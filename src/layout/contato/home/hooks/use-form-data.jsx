import { useReducer, useRef } from 'react'

function getProperties(stateOptions, action) {
  const properties = {}

  const elementOptions = stateOptions[action.id]
  const elementProperties = Object.keys(elementOptions)

  for (const property of elementProperties) {
    const options = elementOptions[property]

    if (typeof options === 'object') properties[property] = options[action.payload]
    if (typeof options === 'function') properties[property] = options(action.payload)
    if (typeof options === 'boolean') properties[property] = options
  }

  return properties
}

const stateOptions = {
  contact: {
    type: { 'E-mail': 'email', WhatsApp: 'tel' },
    autoComplete: { 'E-mail': 'email', WhatsApp: 'tel' },
    disabled: false,
    children: payload => payload,
    optionSelected: payload => payload,
  },
}

const errorMessage = {
  number: 'Números não são permitidos, utilize somente letras.',
  specialChars: 'Caracteres especiais não são permitidos, utilize somente letras.',
  empty: '*Este campo é obrigatório.',
}

const inputValidation = {
  name: {
    getError: (action, data) => {
      const str = action.input

      const formStart = Object.values(data).some(value => value !== '')

      if (!formStart) return { hasError: false }

      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

      const isSpecialChars = specialChars.test(str) && 'specialChars'
      const isNumeric = !isNaN(str) && !isNaN(parseFloat(str)) && 'number'
      const isEmpty = action.payload.length < 1 && 'empty'

      const hasError = isNumeric || isSpecialChars || isEmpty

      return { hasError, message: errorMessage[hasError] }
    },

    getValue: (action, currentValue, error) => {
      let value = action.payload

      if (action.payload.length > 60) value = currentValue
      if (error.hasError) value = currentValue
      if (action.payload.length < 1) value = ''

      return value
    },
  },
  contact: {
    getError: () => {},

    getValue: action => action.payload,
  },
  message: {
    getError: (action, data) => {
      const formStart = Object.values(data).some(value => value !== '')

      if (!formStart) return { hasError: false }

      const isEmpty = action.payload.length < 1 && 'empty'

      const hasError = isEmpty

      return { hasError, message: errorMessage[hasError] }
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
      hasError: false,
    },
  },
  contact: {
    error: {
      hasError: false,
    },
  },
  message: {
    error: {
      hasError: false,
    },
  },
  contact: {
    autoComplete: '',
    type: '',
    disabled: true,
    children: '',
    optionSelected: '',
  },
}

function reducer(state, action) {
  switch (action.type) {
    case 'change_data': {
      const validation = inputValidation[action.id]

      const data = { ...state.data, [action.id]: action.payload }

      const error = validation.getError(action, data)
      const value = validation.getValue(action, state.data[action.id], error)

      return {
        ...state,
        [action.id]: { ...state[action.id], error },
        data: { ...state.data, [action.id]: value },
      }
    }
    case 'select_option': {
      const properties = getProperties(stateOptions, action)

      return {
        ...state,
        data: { ...state.data, [action.id]: '' },
        [action.id]: { ...state[action.id], ...properties },
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

    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      console.log('eae')
    }, 30000) // 30 Seconds

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
