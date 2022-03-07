import { useRef } from 'react'

import { useForm } from '@/contexts'
import { Input, Label, Radio, FormButton } from '@/common'
import { Modal } from '..'

import * as S from './form.styles'

function Form() {
  const { state, dispatch } = useForm()
  const modalRef = useRef(null)

  function handleOpenModal() {
    modalRef.current.openModal()
  }

  async function handleSubmit(event) {
    event.preventDefault()

    dispatch({ type: 'submit' })

    const data = { ...state.data, contactOption: state.contact.optionSelected }
    const JSONdata = JSON.stringify(data)

    const endpoint = '/api/form'
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()

    handleOpenModal()

    dispatch({ type: 'reset' })

    console.log(result)
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Container>
        <Label htmlFor="name">Qual seu nome?</Label>
        <Input id="name" type="text" autoComplete="name">
          Nome
        </Input>
      </S.Container>

      <S.Container>
        <Label htmlFor="contact">Como podemos entrar em contato?</Label>
        <Radio name="contact" options={['E-mail', 'WhatsApp']} />
        <Input id="contact">Selecione uma opção</Input>
      </S.Container>

      <S.Container>
        <Label htmlFor="message">Sua mensagem</Label>
        <Input id="message" type="text" variant="textarea">
          Mensagem
        </Input>
      </S.Container>

      <FormButton size="large">Enviar mensagem</FormButton>

      <Modal ref={modalRef} />
    </S.Form>
  )
}

export default Form
