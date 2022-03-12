import { useReducer } from 'react'

const initialState = {
  data: {
    name: '',
    contact: '',
    message: '',
  },
  sendMessage: {
    disabled: true,
    loading: false,
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
      const data = {
        ...state.data,
        [action.data]: action.payload,
      }

      const isInputsFilled = Object.values(data).every(value => value !== '')

      return {
        ...state,
        sendMessage: {
          ...state.sendMessage,
          disabled: !isInputsFilled,
        },
        data,
      }
    }
    case 'select_option': {
      const type = action.payload === 'E-mail' ? 'email' : 'tel'
      const autoComplete = action.payload === 'E-mail' ? 'email' : 'tel'

      const data = {
        ...state.data,
        [action.id]: '',
      }

      const isInputsFilled = Object.values(data).every(value => value !== '')

      return {
        ...state,
        data,
        sendMessage: {
          ...state.sendMessage,
          disabled: !isInputsFilled,
        },
        [action.id]: {
          ...state[action.id],
          autoComplete,
          type,
          disabled: false,
          children: action.payload,
          optionSelected: action.payload,
        },
      }
    }
    case 'deselect_option': {
      const data = {
        ...state.data,
        [action.id]: '',
      }

      const isInputsFilled = Object.values(data).every(value => value !== '')

      return {
        ...state,
        data,
        sendMessage: {
          ...state.sendMessage,
          disabled: !isInputsFilled,
        },
        [action.id]: {
          ...initialState[action.id],
        },
      }
    }
    case 'reset': {
      return initialState
    }
    case 'submit': {
      return {
        ...state,
        sendMessage: {
          disabled: true,
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

  function handleChangeData(value, id) {
    dispatch({ type: 'change_data', data: id, payload: value })
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
