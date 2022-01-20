import Image from 'next/image'

import { Button } from 'src/common'

import { octaneGhostTop, octaneGhostBottom } from '../images'

import * as S from './orcamento-form.styles'

function OrcamentoForm() {
  return (
    <S.OrcamentoForm>
      <S.Content>
        <S.Subtitle>Formulário de Orçamento</S.Subtitle>
        <S.Description>
          Esse formulário foi feito especialmente para você entrar em contato conosco,
          perguntas diretas e sem enrolação.
        </S.Description>
        <Button noLink>Iniciar formulário de orçamento</Button>
      </S.Content>

      <S.ImageTop>
        <Image
          src={octaneGhostTop}
          alt="Ilustração Fantasma da Octane parte Superior"
          priority
        />
      </S.ImageTop>
      <S.ImageBottom>
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
