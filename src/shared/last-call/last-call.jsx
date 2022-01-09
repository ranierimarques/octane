import { Button } from 'src/common'

import * as S from './last-call.styles'

function LastCall() {
  return (
    <S.Section>
      <S.Header>
        <S.OctaneGhost />
        <S.Title>Pronto para começar?</S.Title>
        <S.Description>
          Preencha nosso formulário e comece um projeto agora mesmo.
        </S.Description>
      </S.Header>

      <Button>Solicitar Orçamento</Button>
    </S.Section>
  )
}

export default LastCall
