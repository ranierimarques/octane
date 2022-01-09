import { TabList, TabPanel } from '.'

import { OctaneGhost } from './svgs'

import * as S from './how-we-work.styles'

function HowWeWork() {
  return (
    <S.Section>
      <S.Content>
        <S.Header>
          <S.Icon>
            <OctaneGhost />
          </S.Icon>
          <S.Title>
            Conheça nossas etapas <br /> de desenvolvimento
          </S.Title>
        </S.Header>

        <TabList />

        <TabPanel />
      </S.Content>

      <S.Illustration />
    </S.Section>
  )
}

export default HowWeWork
