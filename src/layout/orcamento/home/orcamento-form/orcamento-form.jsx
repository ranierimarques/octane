import { useState } from 'react'
import Image from 'next/image'

import { StepOne, StepTwo, StepThree, Final } from '..'
import { Button } from 'src/common'

import { octaneGhostTop, octaneGhostBottom } from '../images'

import * as S from './orcamento-form.styles'

function OrcamentoForm() {
  const [step, setStep] = useState(0)

  const nextStep = () => {
    if (step === 4) {
      setStep(0)
      return
    }
    setStep(oldStep => oldStep + 1)
  }

  const prevStep = () => {
    setStep(oldStep => oldStep - 1)
  }

  switch (step) {
    case 1:
      return <StepOne prevStep={prevStep} nextStep={nextStep} />
    case 2:
      return <StepTwo prevStep={prevStep} nextStep={nextStep} />
    case 3:
      return <StepThree prevStep={prevStep} nextStep={nextStep} />
    case 4:
      return <Final prevStep={prevStep} nextStep={nextStep} />
    default:
      return (
        <S.OrcamentoForm data-aos="zoom-in">
          <S.Content>
            <S.Subtitle data-aos="fade-down" data-aos-offset="-200" data-aos-delay="250">
              Formulário de Orçamento
            </S.Subtitle>
            <S.Description
              data-aos="fade-left"
              data-aos-offset="-200"
              data-aos-delay="350"
            >
              Esse formulário foi feito especialmente para você entrar em contato conosco,
              perguntas diretas e sem enrolação.
            </S.Description>
            <div data-aos="fade-up" data-aos-offset="-200" data-aos-delay="450">
              <Button noLink onClick={nextStep}>
                Iniciar formulário de orçamento
              </Button>
            </div>
          </S.Content>

          <S.ImageTop
            data-aos="fade-down-left"
            data-aos-offset="-200"
            data-aos-delay="250"
          >
            <Image
              src={octaneGhostTop}
              alt="Ilustração Fantasma da Octane parte Superior"
              priority
            />
          </S.ImageTop>
          <S.ImageBottom
            data-aos="fade-up-right"
            data-aos-offset="-200"
            data-aos-delay="250"
          >
            <Image
              src={octaneGhostBottom}
              alt="Ilustração Fantasma da Octane parte Inferior"
              priority
            />
          </S.ImageBottom>
        </S.OrcamentoForm>
      )
  }
}

export default OrcamentoForm
