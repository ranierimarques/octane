import { useEffect, useReducer } from 'react'

import { Input, Label, Radio, Button } from 'src/common/form-control'

import * as S from './form.styles'

const initialState = {
  data: {
    name: '',
    contact: '',
    message: '',
  },
  optionSelected: '',
  radioDisabled: true,
  submitDisabled: true,
}

function reducer(state, action) {
  switch (action.type) {
    case 'change_data':
      return {
        ...state,
        data: {
          ...state.data,
          [action.data]: action.payload,
        },
      }
    case 'select_option':
      return { ...state, radioDisabled: false, optionSelected: action.payload }
    case 'active_button':
      return { ...state, submitDisabled: action.payload }
    default:
      throw new Error()
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { data, radioDisabled, submitDisabled, optionSelected } = state

  function handleSubmit(event) {
    event.preventDefault()
    console.log(data)
  }

  function handleChangeData(value, id) {
    dispatch({ type: 'change_data', data: id, payload: value })
  }

  useEffect(() => {
    const inputsFilled = Object.values(data).every(value => value !== '')

    dispatch({ type: 'active_button', payload: !inputsFilled })
  }, [data])

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Container>
        <Label id="name" title="Qual seu nome?" />
        <Input id="name" label="Nome" onChangeData={handleChangeData} />
      </S.Container>

      <S.Container>
        <Label id="contact" title="Como podemos entrar em contato?" />
        <Radio name="contact" options={['E-mail', 'Whatsapp']} dispatch={dispatch} />
        <Input
          id="contact"
          label={optionSelected || 'Selecione uma opção'}
          disabled={radioDisabled}
          onChangeData={handleChangeData}
        />
      </S.Container>

      <S.Container>
        <Label id="message" title="Sua mensagem" />
        <Input
          id="message"
          label="Mensagem"
          variant="textarea"
          onChangeData={handleChangeData}
        />
      </S.Container>

      <Button text="Enviar mensagem" size="large" disabled={submitDisabled} />
    </S.Form>
  )
}

export default Form
