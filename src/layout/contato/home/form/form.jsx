import { useRef } from 'react'

import { Input, Label, Radio, Button } from '@/common/form'
import { FormContext } from '@/contexts'
import { Modal } from '..'
import { useFormData } from '../hooks'

import * as S from './form.styles'

function Form() {
  const modalRef = useRef(null)
  const value = useFormData()

  function handleOpenModal() {
    modalRef.current.openModal()
  }

  async function handleSubmit(event) {
    event.preventDefault()

    value.dispatch({ type: 'submit' })

    const data = { ...value.state.data, contactOption: value.state.optionSelected }
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

    value.dispatch({ type: 'reset' })

    console.log(result)
  }

  return (
    <FormContext.Provider value={value}>
      <S.Form onSubmit={handleSubmit}>
        <S.Container>
          <Label htmlFor="name">Qual seu nome?</Label>
          <Input id="name" type="text" autoComplete="name">
            Nome
          </Input>
        </S.Container>

        <S.Container>
          <Label htmlFor="contact">Como podemos entrar em contato?</Label>
          <Radio name="contact" options={['E-mail', 'Whatsapp']} />
          <Input id="contact">Selecione uma opção</Input>
        </S.Container>

        <S.Container>
          <Label htmlFor="message">Sua mensagem</Label>
          <Input id="message" type="text" variant="textarea">
            Mensagem
          </Input>
        </S.Container>

        <Button size="large">Enviar mensagem</Button>

        <Modal ref={modalRef} />
      </S.Form>
    </FormContext.Provider>
  )
}

export default Form
