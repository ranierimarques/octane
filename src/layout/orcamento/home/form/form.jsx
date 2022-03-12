import { FormButton } from '@/common'
import { useForm } from '@/resources/contexts'
import { useRef } from 'react'
import {
  Final,
  IntroductionForm,
  Modal,
  Navigation,
  StepOne,
  StepThree,
  StepTwo,
} from '..'
import * as S from './form.styles'

function Form() {
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

        <S.Form>{currentStep}</S.Form>

        <S.Buttons>
          <FormButton onClick={handlePrevStep} variant="text">
            Voltar
          </FormButton>
          <FormButton id="next" onClick={handleNextStep}>
            Continuar
          </FormButton>
        </S.Buttons>

        <Modal ref={modalRef} />
      </S.Background>
    )
  }

  return <IntroductionForm />
}

export default Form
