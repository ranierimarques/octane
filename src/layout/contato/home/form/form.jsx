import { FormControl } from 'src/common'

import * as S from './form.styles'

const configs = {
  1: {
    element: 'input',
    id: 'nome',
    title: 'Qual seu nome?',
    label: 'Nome',
  },
  2: {
    element: 'radio',
    id: 'radio',
    title: 'Como podemos entrar em contato?',
    label: 'Selecione uma opção',
    options: ['E-mail', 'Whatsapp'],
    disabled: true,
  },
  3: {
    element: 'input',
    variant: 'textarea',
    id: 'mensagem',
    title: 'Sua mensagem',
    label: 'Mensagem',
  },
  4: {
    element: 'button',
    text: 'Enviar mensagem',
    disabled: true,
    size: 'large',
  },
}

function Form() {
  return (
    <S.Form>
      <FormControl config={configs[1]} />
      <FormControl config={configs[2]} />
      <FormControl config={configs[3]} />
      <FormControl config={configs[4]} />
    </S.Form>
  )
}

export default Form
