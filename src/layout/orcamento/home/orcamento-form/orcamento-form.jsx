import { useState } from 'react'

import { IntroductionForm, Navigation, StepOne, StepTwo, StepThree, Final } from '..'
import { FormControl } from 'src/common'

import * as S from './orcamento-form.styles'

const configs = {
  1: {
    element: 'button',
    text: 'Voltar',
    variant: 'text',
  },
  2: {
    element: 'button',
    text: 'Continuar',
  },
}

function OrcamentoForm() {
  const [step, setStep] = useState(0)

  const prevStep = () => setStep(oldStep => oldStep - 1)
  const nextStep = () => setStep(oldStep => oldStep + 1)
  const backToStart = () => setStep(0)

  const formSection = {
    1: <StepOne />,
    2: <StepTwo />,
    3: <StepThree />,
  }

  const isOnSteps = step >= 1
  const isOnLastStep = step === 4

  if (isOnLastStep) {
    return <Final backToStart={backToStart} />
  }

  if (isOnSteps) {
    return (
      <S.Background>
        <Navigation step={step} setStep={setStep} />

        <S.FormBackground>{formSection[step]}</S.FormBackground>

        <S.Buttons>
          <FormControl onClick={prevStep} config={configs[1]} />
          <FormControl onClick={nextStep} config={configs[2]} />
        </S.Buttons>
      </S.Background>
    )
  }

  return <IntroductionForm handleNextStep={nextStep} />
}

export default OrcamentoForm
