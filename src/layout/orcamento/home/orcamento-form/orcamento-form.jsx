import { useState, useRef } from 'react'

import {
  IntroductionForm,
  Navigation,
  StepOne,
  StepTwo,
  StepThree,
  Final,
  Modal,
} from '..'
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
  const modalRef = useRef(null)
  const [step, setStep] = useState(0)

  function handlePrevStep() {
    setStep(oldStep => oldStep - 1)
  }

  function handleNextStep() {
    if (step === 3) {
      handleOpenModal()
      return
    }
    setStep(oldStep => oldStep + 1)
  }

  function backToStart() {
    setStep(0)
  }

  const formSteps = [<StepOne key={1} />, <StepTwo key={2} />, <StepThree key={3} />]

  const isOnSteps = step >= 1
  const isOnLastStep = step === 4

  if (isOnLastStep) {
    return <Final backToStart={backToStart} />
  }

  function handleOpenModal() {
    modalRef.current.openModal()
  }

  if (isOnSteps) {
    return (
      <S.Background>
        <Navigation step={step} setStep={setStep} />

        <S.FormBackground>{formSteps[step - 1]}</S.FormBackground>

        <S.Buttons>
          <FormControl onClick={handlePrevStep} config={configs[1]} />
          <FormControl onClick={handleNextStep} config={configs[2]} />
        </S.Buttons>

        <Modal ref={modalRef} />
      </S.Background>
    )
  }

  return <IntroductionForm onNextStep={handleNextStep} />
}

export default OrcamentoForm
