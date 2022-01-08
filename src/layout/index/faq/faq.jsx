import { Questions } from '.'

import * as S from './faq.styles'

function Faq() {
  return (
    <S.Section>
      <S.Wrapper>
        <S.Header>
          <S.Title>
            Perguntas mais frequentes <S.Shape2d />
          </S.Title>

          <S.Texts>
            <S.Strong>Restou alguma dúvida?</S.Strong>
            Entre em contato com nosso time
            <S.TextButton>Entrar em contato</S.TextButton>
          </S.Texts>
        </S.Header>

        <Questions />
      </S.Wrapper>
    </S.Section>
  )
}

export default Faq
