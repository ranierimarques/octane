import { FormControl } from 'src/common'

// import * as S from './step-one.styles'

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
  3: {},
}

function StepOne() {
  return (
    <div>
      <FormControl config={configs[1]} />
      <FormControl config={configs[2]} />
      {/* <FormControl element="radio" config={configs.input3} /> */}
    </div>
  )
}

export default StepOne
