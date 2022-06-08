import { useForm } from '@/resources/contexts'
import Image from 'next/image'
import { Button } from 'src/common'
import { octaneGhostBottom, octaneGhostTop } from '../images'
import * as S from './introduction-form.styles'

function IntroductionForm() {
  const { handleNextStep } = useForm()

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
          <Button noLink onClick={handleNextStep}>
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

export default IntroductionForm
