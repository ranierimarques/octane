import { Button } from 'src/common'
import * as S from './home.styles'

function Home() {
  return (
    <S.Section>
      <S.Wrapper>
        <S.Main data-aos="fade-right">
          <S.Hat>SOBRE NÓS</S.Hat>
          <S.Title>
            Somos uma equipe apaixonada por desenvolver projetos de alto nível
          </S.Title>
          <S.Description>
            Com a nossa tecnologia oferecemos soluções eficazes para a rotina diária do
            seu cliente. Muito mais que criar sites e landing pages, nosso propósito é
            solucionar o seu problema!
          </S.Description>
          <Button secondary variant="outlined" scrollTo={559}>
            Clique para descobrir
          </Button>
        </S.Main>

        <S.Illustration
          type="image/svg+xml"
          data="/animated/persons.svg"
          data-aos="fade-left"
        />
      </S.Wrapper>

      <S.Wire />
    </S.Section>
  )
}

export default Home
