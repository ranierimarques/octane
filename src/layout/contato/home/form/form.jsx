import { FormButton, Input, Label, Radio } from '@/common'
import { useForm } from '@/contexts'
import { useRef } from 'react'
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

    await fetch(endpoint, options)

    handleOpenModal()

    dispatch({ type: 'reset' })
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Container>
        <Label htmlFor="name">Qual seu nome?</Label>
        {/* TODO: autoComplete="name" */}
        <Input id="name" type="text" autoComplete="off" maxLength="60" required>
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

      <FormButton id="sendMessage" size="large">
        Enviar mensagem
      </FormButton>

      <Modal ref={modalRef} />
    </S.Form>
  )
}

export default Form
