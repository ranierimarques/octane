import { ValidationBuilder } from '@/validations'
import { useReducer, useRef } from 'react'
import { getConfigChanges } from '../helpers'

const inputsConfig = {
  contact: {
    type: { 'E-mail': 'email', WhatsApp: 'tel' },
    autoComplete: { 'E-mail': 'email', WhatsApp: 'tel' },
    disabled: false,
    children: payload => payload,
    optionSelected: payload => payload,
    maxLength: { 'E-mail': '100', WhatsApp: '11' },
  },
}

const inputsValidation = {
  name: {
    getError(action, data) {
      const formStart = Object.values(data).some(value => value !== '')
      if (!formStart) return { error: null }

      const error = new ValidationBuilder(action)
        .isEmpty()
        .isNumber()
        .isSpecialChars()
        .validate()

      return error
    },

    getValue: (action, currentValue, error) => {
      if (action.payload.length > 60) return currentValue
      if (action.payload.length < 1) return ''
      if (error.error) return currentValue

      return action.payload
    },
  },
  contact: {
    getError(action, data, optionSelected) {
      const formStart = Object.values(data).some(value => value !== '')
      if (!formStart) return { error: null }

      const errorOption = {
        email: () => {
          const error = new ValidationBuilder(action).isEmpty().isEmail().validate()

          return error
        },
        tel: () => {
          const error = new ValidationBuilder(action).isEmpty().isPhone().validate()

          return error
        },
      }

      return errorOption[optionSelected]()
    },

    getValue: action => action.payload,
  },
  message: {
    getError: (action, data) => {
      const formStart = Object.values(data).some(value => value !== '')
      if (!formStart) return { error: null }

      const error = new ValidationBuilder(action).isEmpty().validate()

      return error
    },

    getValue: action => action.payload,
  },
}

const initialState = {
  data: {
    name: '',
    contact: '',
    message: '',
  },
  sendMessage: {
    loading: false,
  },
  name: {
    error: {
      error: null,
    },
  },
  message: {
    error: {
      error: null,
    },
  },
  contact: {
    autoComplete: '',
    type: '',
    disabled: true,
    children: '',
    optionSelected: '',
    maxLength: '',
    error: {
      error: null,
    },
  },
}

function reducer(state, action) {
  switch (action.type) {
    case 'change_data': {
      const validation = inputsValidation[action.id]
      const value = validation.getValue(
        action,
        state.data[action.id],
        state[action.id].error
      )

      return {
        ...state,
        data: { ...state.data, [action.id]: value },
      }
    }
    case 'handle_erros': {
      const data = { ...state.data, [action.id]: action.payload }
      const validation = inputsValidation[action.id]
      const optionSelected = state[action.id].type

      const error = validation.getError(action, data, optionSelected)
      const errors = { [action.id]: { ...state[action.id], error } }

      const formStart = Object.values(data).some(value => value !== '')

      if (!formStart) {
        // Imperative
        Object.keys(state.data).forEach(key => {
          errors[key] = { ...state[key], error: { error: null } }
        })
      }

      return { ...state, ...errors }
    }
    case 'select_option': {
      const inputConfig = inputsConfig[action.id]
      const config = getConfigChanges(inputConfig, action.payload)

      return {
        ...state,
        data: { ...state.data, [action.id]: '' },
        [action.id]: { ...state[action.id], ...config },
      }
    }
    case 'deselect_option': {
      return {
        ...state,
        data: { ...state.data, [action.id]: '' },
        [action.id]: { ...initialState[action.id] },
      }
    }
    case 'reset': {
      return initialState
    }
    case 'submit': {
      return {
        ...state,
        sendMessage: {
          loading: true,
        },
      }
    }
    default:
      throw new Error()
  }
}

function useFormData() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const timeoutRef = useRef(null)

  function handleChangeData(event, id) {
    const input = event.nativeEvent.data
    const payload = event.target.value

    // clearTimeout(timeoutRef.current)
    // timeoutRef.current = setTimeout(() => {
    //   console.log('eae')
    // }, 30000) // 30 Seconds

    dispatch({ type: 'handle_erros', id, input, payload })
    dispatch({ type: 'change_data', id, input, payload })
  }

  function handleOptionUnChecked(option, id) {
    if (option === state[id].optionSelected) {
      dispatch({ type: 'deselect_option', id })
    }
  }

  function handleOptionChange(option, id) {
    dispatch({ type: 'select_option', id, payload: option })
  }

  return { state, handleChangeData, handleOptionUnChecked, handleOptionChange, dispatch }
}

export default useFormData
