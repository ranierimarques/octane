import { Button } from 'src/common'

import * as S from './last-call.styles'

function LastCall() {
  return (
    <S.Section>
      <S.Header>
        <S.OctaneGhost />
        <S.Title data-aos="fade-up">Pronto para começar?</S.Title>
        <S.Description data-aos="fade-up">
          Preencha nosso formulário e comece um projeto agora mesmo.
        </S.Description>
      </S.Header>

      <Button data-aos="fade-in" data-aos-delay="100">
        Solicitar Orçamento
      </Button>
    </S.Section>
  )
}

export default LastCall
