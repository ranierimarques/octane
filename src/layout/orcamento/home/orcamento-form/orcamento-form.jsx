import { useState } from 'react'
import Image from 'next/image'

import { Navigation, StepOne, StepTwo, StepThree, Final } from '..'
import { Button, FormControl } from 'src/common'

import { octaneGhostTop, octaneGhostBottom } from '../images'

import * as S from './orcamento-form.styles'

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
          <FormControl element="button" onClick={prevStep} config={{ variant: 'text' }}>
            Voltar
          </FormControl>
          <FormControl element="button" onClick={nextStep}>
            Continuar
          </FormControl>
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
