import { Navigation } from '.'
import * as S from './how-we-work.styles'
import { OctaneGhost } from './svgs'

function HowWeWork() {
  return (
    <S.Section>
      <S.Content>
        <S.Header data-aos="fade-right">
          <S.Icon>
            <OctaneGhost />
          </S.Icon>
          <S.Title>
            Conheça nossas etapas <br /> de desenvolvimento
          </S.Title>
        </S.Header>

        <Navigation />
      </S.Content>

      <S.Illustration
        type="image/svg+xml"
        data="/animated/towers.svg"
        data-aos="fade-in"
      />
    </S.Section>
  )
}

export default HowWeWork
