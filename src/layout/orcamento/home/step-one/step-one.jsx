import { FormControl } from 'src/common'

import * as S from './step-one.styles'

const configs = {
  1: {
    element: 'input',
    id: 'nome',
    title: 'Como podemos te chamar?',
    description: 'Pode ser seu nome ou algum apelido.',
    label: 'Seu nome',
  },
  2: {
    element: 'double-input',
    id: 'nome-da-empresa',
    title: 'Qual é o nome da empresa que você representa?',
    description: 'Se possível também informe o cargo que ocupa.',
    label: 'Nome da empresa',
    secondLabel: 'Cargo',
  },
  3: {
    element: 'radio',
    id: 'como-chegou-aqui',
    title: 'Como você chegou à Octane?',
    description: 'Conte-nós como conheceu a nossa equipe.',
    label: 'Digite aqui',
    options: ['Redes sociais', 'Indicação', 'Google', 'Outro'],
    disabled: true,
    vertical: true,
    hidden: true,
  },
  4: {
    element: 'radio',
    id: 'forma-de-contato',
    title: 'Como você gostaria que entrássemos em contato?',
    description: 'Selecione a melhor forma de entrarmos em contato.',
    label: 'Selecione uma opção',
    options: ['E-mail', 'Whatsapp'],
    disabled: true,
  },
}

function StepOne() {
  return (
    <S.Form>
      <FormControl config={configs[1]} />
      <FormControl config={configs[2]} />
      <FormControl config={configs[3]} />
      <FormControl config={configs[4]} />
    </S.Form>
  )
}

export default StepOne
