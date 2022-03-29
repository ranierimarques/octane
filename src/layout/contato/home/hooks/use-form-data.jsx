import { ValidationBuilder } from '@/validations'
import { useReducer, useRef } from 'react'
import { clearAllInputErrors, formStart, getConfig } from '../helpers'

const inputs = {
  name: {
    getError: action =>
      new ValidationBuilder(action).isEmpty().isNumber().isSpecialChars().validate(),

    getValue: (action, state) => {
      const currentValue = state.data[action.id]
      const error = new ValidationBuilder(action)
        .isEmpty()
        .isNumber()
        .isSpecialChars()
        .isMaxLength(60)
        .validate()

      if (error.error === 'empty') return ''
      if (error.error === 'maxLength') return currentValue
      if (error.error) return currentValue

      return action.payload
    },
  },
  contact: {
    config: {
      type: { 'E-mail': 'email', WhatsApp: 'tel' },
      autoComplete: { 'E-mail': 'email', WhatsApp: 'tel' },
      disabled: false,
      children: payload => payload,
      optionSelected: payload => payload,
      maxLength: { 'E-mail': '100', WhatsApp: '16' },
    },
    getError: (action, state) => {
      const optionSelected = state[action.id].type
      const options = {
        email: () => new ValidationBuilder(action).isEmpty().isEmail().validate(),
        tel: () => new ValidationBuilder(action).isEmpty().isPhone().validate(),
      }

      return options[optionSelected]()
    },
    getValue: action => action.payload,
  },
  message: {
    getError: action => new ValidationBuilder(action).isEmpty().validate(),
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
      const input = inputs[action.id]
      const value = input.getValue(action, state)

      return {
        ...state,
        data: { ...state.data, [action.id]: value },
      }
    }
    case 'handle_erros': {
      const input = inputs[action.id]
      const error = input.getError(action, state)

      const isFormStart = formStart(action, state)
      const inputError = {
        [action.id]: { ...state[action.id], error: isFormStart ? error : null },
      }

      if (!isFormStart) return clearAllInputErrors(state)
      return { ...state, ...inputError }
    }
    case 'select_option': {
      const inputConfig = inputs[action.id].config
      const config = getConfig(inputConfig, action.payload)

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
