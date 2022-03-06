import { useReducer } from 'react'

const initialState = {
  data: {
    name: '',
    contact: '',
    message: '',
  },
  optionSelected: '',
  isSubmitDisabled: false,
  isLoading: false,
  contact: {
    autoComplete: '',
    type: '',
    disabled: true,
    children: '',
  },
  step: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'change_data': {
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
