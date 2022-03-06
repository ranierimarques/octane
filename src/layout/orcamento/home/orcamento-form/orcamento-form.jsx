import { useRef } from 'react'

import {
  IntroductionForm,
  Navigation,
  StepOne,
  StepTwo,
  StepThree,
  Final,
  Modal,
} from '..'
import { Button } from 'src/common/form-control'
import { useForm } from '@/resources/contexts'

import * as S from './orcamento-form.styles'

function OrcamentoForm() {
  const { state, handlePrevStep, handleNextStep } = useForm()
  const modalRef = useRef(null)

  function handleOpenModal() {
    modalRef.current.openModal()
  }

  const formSteps = [<StepOne key={1} />, <StepTwo key={2} />, <StepThree key={3} />]

  const isOnSteps = state.step >= 1
  const isOnLastStep = state.step === formSteps.length + 1
  const currentStep = formSteps[state.step - 1]

  if (isOnLastStep) {
    return <Final />
  }

  if (isOnSteps) {
    return (
      <S.Background>
        <Navigation />

        <S.FormBackground>{currentStep}</S.FormBackground>

        <S.Buttons>
          <Button onClick={handlePrevStep} variant="text">
            Voltar
          </Button>
          <Button onClick={handleNextStep}>Continuar</Button>
        </S.Buttons>

        <Modal ref={modalRef} />
      </S.Background>
    )
  }

  return <IntroductionForm />
}

export default OrcamentoForm
