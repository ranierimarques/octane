import { ClipboardInformations } from '..'
import { FormControl } from 'src/common'

import * as S from './step-three.styles'

const configs = [
  {
    element: 'slider',
    title: 'Quanto você está disposto a investir nesse projeto?',
    description: 'Utilize o slider para determinar o quanto você pretende investir.',
    range: [3000, 6000, 12000, 24000],
    initial: 4500,
    step: 50,
  },
  {
    element: 'dropdown',
    id: 'prazo',
    title: 'Qual o prazo que temos para entregar o projeto?',
    description: `O mínimo que trabalhamos é 30 dias (para projetos de onepage), para sites com mais de uma página, projetos só de front-end ou projetos somente design precisamos analisar cada caso.`,
    options: [
      '30 dias',
      '50 dias',
      '70 dias',
      '90 dias',
      'Prazo não é problema.',
      'Preciso o quanto antes.',
    ],
    label: 'Selecione uma opção',
  },
]

function StepThree() {
  return (
    <S.Wrapper>
      <S.Form>
        {configs.map((config, index) => (
          <FormControl key={index} config={config} />
        ))}
      </S.Form>
      <ClipboardInformations />
    </S.Wrapper>
  )
}

export default StepThree
