import { FormControl } from 'src/common'

import * as S from './step-two.styles'

const configs = {
  1: {
    element: 'dropdown',
    id: 'empresa-categoria',
    title: 'Em qual categoria a empresa se enquadra?',
    description: 'Escolha a opção correspondente a realidade da sua empresa.',
    options: [
      'Profissional Liberal',
      'Micro (2-10 Funcionários)',
      'Pequena (10-50 Funcionários)',
      'Média (50-100 Funcionários)',
      'Grande (Mais de 100 Funcionários)',
    ],
    label: 'Selecione uma opção',
  },
  2: {
    element: 'dropdown',
    id: 'serviço',
    title: 'Qual dos serviços você está interessado(a)?',
    description: 'Escolha um dos serviços que oferecemos.',
    options: ['Website', 'Design UX/UI', 'Front-end'],
    label: 'Selecione uma opção',
  },
  3: {
    element: 'input',
    variant: 'textarea',
    id: 'descrição',
    title: 'Faça uma breve descrição do seu projeto',
    description: `Conte-nos os seus objetivos para esse projeto, lembrando que em breve entraremos em contato para mais informações.`,
    label: 'Descrição',
  },
  4: {
    element: 'radio',
    id: 'empresa-website',
    title: 'A empresa já possui website?',
    label: 'Seu site',
    options: ['Sim, já possui.', 'Ainda não possui.'],
    disabled: false,
    variant: 'website',
  },
}

function StepTwo() {
  return (
    <S.Form>
      <FormControl config={configs[1]} />
      <FormControl config={configs[2]} />
      <FormControl config={configs[3]} />
      <FormControl config={configs[4]} />
    </S.Form>
  )
}

export default StepTwo
