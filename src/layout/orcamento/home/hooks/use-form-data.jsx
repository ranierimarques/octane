import { useReducer } from 'react'

const stateOptions = {
  contact: {
    type: {
      'E-mail': 'email',
      WhatsApp: 'tel',
    },
    autoComplete: {
      'E-mail': 'email',
      WhatsApp: 'tel',
    },
    children: payload => payload,
    hidden: () => false,
  },
  howGotHere: {
    type: {},
    autoComplete: {},
    children: () => '',
    hidden: payload => payload !== 'Outro',
  },
}

const initialState = {
  step: 0,
  data: {
    name: '',
    companyName: '',
    companyTitle: '',
    contact: '',
    howGotHere: '',
  },
  isSubmitDisabled: false,
  isLoading: false,
  howGotHere: {
    hidden: true,
    optionSelected: '',
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
      return { ...state, data: { ...state.data, [action.data]: action.payload } }
    }
    case 'prev_step': {
      return { ...state, step: state.step - 1 }
    }
    case 'next_step': {
      return { ...state, step: state.step + 1 }
    }
    case 'change_step': {
      return { ...state, step: action.payload }
    }
    case 'select_option': {
      const type = stateOptions[action.id]?.type[action.payload]
      const autoComplete = stateOptions[action.id]?.autoComplete[action.payload]
      const children = stateOptions[action.id]?.children(action.payload)
      const hidden = stateOptions[action.id]?.hidden(action.payload)

      return {
        ...state,
        data: {
          ...state.data,
          [action.id]: '',
        },
        [action.id]: {
          ...state[action.id],
          autoComplete,
          type,
          children,
          hidden,
          disabled: false,
          optionSelected: action.payload,
        },
      }
    }
    case 'deselect_option': {
      return {
        ...state,
        data: {
          ...state.data,
          [action.id]: '',
        },
        [action.id]: { ...initialState[action.id] },
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

  function handleOptionUnChecked(option, id) {
    if (option === state[id].optionSelected) {
      dispatch({ type: 'deselect_option', id })
    }
  }

  function handleOptionChange(option, id) {
    dispatch({ type: 'select_option', id, payload: option })
  }

  function handlePrevStep() {
    dispatch({ type: 'prev_step' })
  }

  function handleNextStep() {
    dispatch({ type: 'next_step' })
  }

  function handleChangeStep(tabId) {
    dispatch({ type: 'change_step', payload: tabId })
  }

  function goBackToStart() {
    dispatch({ type: 'reset' })
  }

  return {
    state,
    handlePrevStep,
    goBackToStart,
    handleChangeStep,
    handleNextStep,
    handleChangeData,
    handleOptionUnChecked,
    handleOptionChange,
    dispatch,
  }
}

export default useFormData
