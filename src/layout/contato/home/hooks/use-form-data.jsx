import { useReducer } from 'react'

const initialState = {
  data: {
    name: '',
    contact: '',
    message: '',
  },
  optionSelected: '',
  isSubmitDisabled: true,
  contact: {
    autoComplete: '',
    type: '',
    disabled: true,
    children: '',
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
        isSubmitDisabled: !isInputsFilled,
        data,
      }
    }
    case 'select_option': {
      const type = action.payload === 'E-mail' ? 'email' : 'tel'
      const autoComplete = action.payload === 'E-mail' ? 'email' : 'tel'

      const data = {
        ...state.data,
        contact: '',
      }

      const isInputsFilled = Object.values(data).every(value => value !== '')

      return {
        ...state,
        data,
        optionSelected: action.payload,
        isSubmitDisabled: !isInputsFilled,
        contact: {
          autoComplete,
          type,
          disabled: false,
          children: action.payload,
        },
      }
    }
    case 'deselect_option': {
      const data = {
        ...state.data,
        contact: '',
      }

      const isInputsFilled = Object.values(data).every(value => value !== '')

      return {
        ...state,
        data,
        optionSelected: '',
        isSubmitDisabled: !isInputsFilled,
        contact: {
          autoComplete: '',
          type: '',
          disabled: true,
          children: '',
        },
      }
    }
    case 'reset': {
      return initialState
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

  function handleOptionUnChecked(option) {
    if (option === state.optionSelected) {
      dispatch({ type: 'deselect_option' })
    }
  }

  function handleOptionChange(option) {
    dispatch({ type: 'select_option', payload: option })
  }

  return { state, handleChangeData, handleOptionUnChecked, handleOptionChange, dispatch }
}

export default useFormData
