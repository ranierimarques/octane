import { TabList, TabPanel } from '.'

import * as S from './methodologies.styles'

function Methodologies() {
  return (
    <S.Section>
      <S.Wrapper>
        <S.Header>
          <S.Title>Conheça nossa metodologia de execução</S.Title>
          <S.Description>
            Para desenvolver projetos de alto nível é preciso ter uma metodologia que siga
            o mesmo padrão de qualidade.
          </S.Description>
        </S.Header>

        <S.Tabs>
          <TabList />
          <TabPanel />
        </S.Tabs>
      </S.Wrapper>
    </S.Section>
  )
}

export default Methodologies
