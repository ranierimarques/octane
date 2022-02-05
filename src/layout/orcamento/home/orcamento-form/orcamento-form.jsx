import { useState } from 'react'
import Image from 'next/image'

import { Navigation, StepOne, StepTwo, StepThree, Final } from '..'
import { Button } from 'src/common'

import { octaneGhostTop, octaneGhostBottom } from '../images'

import * as S from './orcamento-form.styles'

function OrcamentoForm() {
  const [step, setStep] = useState(0)

  const isOnSteps = step >= 1
  const isOnLastStep = step === 4

  const prevStep = () => setStep(oldStep => oldStep - 1)
  const nextStep = () => setStep(oldStep => oldStep + 1)
  const backToStart = () => setStep(0)

  const stepsComponent = {
    1: <StepOne />,
    2: <StepTwo />,
    3: <StepThree />,
  }

  if (isOnLastStep) {
    return <Final backToStart={backToStart} />
  }

  if (isOnSteps) {
    return (
      <S.Background>
        <Navigation step={step} setStep={setStep} />

        <S.FormBackground>{stepsComponent[step]}</S.FormBackground>

        <S.Buttons>
          <S.PrevButton onClick={prevStep}>Voltar</S.PrevButton>
          <S.NextButton onClick={nextStep}>Próximo</S.NextButton>
        </S.Buttons>
      </S.Background>
    )
  }

  return (
    <S.OrcamentoForm data-aos="zoom-in">
      <S.Content>
        <S.Subtitle data-aos="fade-down" data-aos-offset="-200" data-aos-delay="250">
          Formulário de Orçamento
        </S.Subtitle>
        <S.Description data-aos="fade-left" data-aos-offset="-200" data-aos-delay="350">
          Esse formulário foi feito especialmente para você entrar em contato conosco,
          perguntas diretas e sem enrolação.
        </S.Description>
        <div data-aos="fade-up" data-aos-offset="-200" data-aos-delay="450">
          <Button noLink onClick={nextStep}>
            Iniciar formulário de orçamento
          </Button>
        </div>
      </S.Content>

      <S.ImageTop data-aos="fade-down-left" data-aos-offset="-200" data-aos-delay="250">
        <Image
          src={octaneGhostTop}
          alt="Ilustração Fantasma da Octane parte Superior"
          priority
        />
      </S.ImageTop>
      <S.ImageBottom data-aos="fade-up-right" data-aos-offset="-200" data-aos-delay="250">
        <Image
          src={octaneGhostBottom}
          alt="Ilustração Fantasma da Octane parte Inferior"
          priority
        />
      </S.ImageBottom>
    </S.OrcamentoForm>
  )
}

export default OrcamentoForm
