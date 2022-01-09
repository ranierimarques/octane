import { Button } from 'src/common'

import * as S from './home.styles'

function Home() {
  return (
    <S.Section>
      <S.Wrapper>
        <S.Main>
          <S.Hat>ESPECIALISTAS</S.Hat>
          <S.Title>
            Mestres em solucionar o seu problema de uma forma prática e descomplicada
          </S.Title>
          <S.Description>
            Nossos serviços são a ponte para a transformação digital que sua empresa
            precisa, cuidando de cada detalhe conseguimos proporcionar experiências únicas
            para cada usuário.
          </S.Description>
          <Button secondary variant="outlined">
            Conheça nossos serviços
          </Button>
        </S.Main>

        <S.Illustration />
      </S.Wrapper>

      <S.Wire />
    </S.Section>
  )
}

export default Home
