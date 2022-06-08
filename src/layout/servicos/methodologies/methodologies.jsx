import { Navigation } from '.'
import * as S from './methodologies.styles'

function Methodologies() {
  return (
    <S.Section>
      <S.Wrapper>
        <S.Header>
          <S.Title data-aos="fade-up">Conheça nossa metodologia de execução</S.Title>
          <S.Description data-aos="fade-left" data-aos-delay="100">
            Para desenvolver projetos de alto nível é preciso ter uma metodologia que siga
            o mesmo padrão de qualidade.
          </S.Description>
        </S.Header>

        <S.Tabs>
          <Navigation />
        </S.Tabs>
      </S.Wrapper>
    </S.Section>
  )
}

export default Methodologies
