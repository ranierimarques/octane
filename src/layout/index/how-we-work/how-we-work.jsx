import { Navigation } from '.'

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

        <Navigation />
      </S.Content>

      <S.Illustration type="image/svg+xml" data="/animated/towers.svg" />
    </S.Section>
  )
}

export default HowWeWork
