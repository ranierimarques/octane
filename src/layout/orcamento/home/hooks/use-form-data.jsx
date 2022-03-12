import { useReducer } from 'react'

const stateOptions = {
  contact: {
    type: { 'E-mail': 'email', WhatsApp: 'tel' },
    autoComplete: { 'E-mail': 'email', WhatsApp: 'tel' },
    children: payload => payload,
  },
  howGotHere: {
    hidden: payload => payload !== 'Outro',
  },
  companyWebsite: {
    hidden: payload => payload === 'Ainda não possui.',
  },
}

const initialState = {
  step: 0,
  data: {
    name: '',
    companyName: '',
    companyTitle: '',
    companyWebsite: '',
    companyCategory: '',
    service: '',
    contact: '',
    howGotHere: '',
    description: '',
    budget: 0,
    deadline: '',
  },
  next: {
    disabled: false,
    loading: false,
    children: '',
  },
  companyWebsite: {
    hidden: false,
    disabled: true,
    optionSelected: '',
  },
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
  budget: {
    position: 0,
    min: 0,
    max: 0,
  },
}

function hasProperty(property, action) {
  const thisHasProperty = initialState[action.id].hasOwnProperty(property)
  const options = stateOptions[action.id]

  function getProperty() {
    if (!thisHasProperty) return

    return options[property][action.payload]
  }

  function callback() {
    if (!thisHasProperty) return

    return options[property](action.payload)
  }

  return { getProperty, callback }
}

function reducer(state, action) {
  switch (action.type) {
    case 'change_data': {
      return { ...state, data: { ...state.data, [action.id]: action.payload } }
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
      const type = hasProperty('type', action).getProperty()
      const autoComplete = hasProperty('autoComplete', action).getProperty()
      const children = hasProperty('children', action).callback()
      const hidden = hasProperty('hidden', action).callback()

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
    case 'slider_change': {
      return {
        ...state,
        data: {
          ...state.data,
          [action.id]: action.payload.budget,
        },
        [action.id]: {
          position: action.payload.position,
          min: action.payload.min,
          max: action.payload.max,
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
    dispatch({ type: 'change_data', id, payload: value })
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
