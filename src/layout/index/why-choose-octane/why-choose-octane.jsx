import { Cards } from '.'

import { OctaneText } from './svgs'

import * as S from './why-choose-octane.styles'

function WhyChooseOctane() {
  return (
    <S.Section>
      <S.Wrapper>
        <S.Content>
          <S.Header>
            <S.Title data-aos="fade-up">Porque escolher a Octane?</S.Title>
            <S.Description data-aos="fade-left" data-aos-delay="100">
              Desenvolvemos projetos, com base em estratégias focadas em evoluir o seu
              negócio, criando valor significativo por meio do design e da programação.
            </S.Description>
          </S.Header>

          <Cards />
        </S.Content>

        <OctaneText />
      </S.Wrapper>
    </S.Section>
  )
}

export default WhyChooseOctane
