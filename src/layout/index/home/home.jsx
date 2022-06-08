import Image from 'next/image'
import { Button } from 'src/common'
import * as S from './home.styles'
import { illustration } from './images'
import { OctaneGhost } from './svgs'

function Home() {
  return (
    <S.Section>
      <S.Main data-aos="fade-right">
        <S.Hat>
          <OctaneGhost />
          <S.Text>Boas vindas à Octane</S.Text>
        </S.Hat>
        <S.Title>Construindo o futuro por meio do Design e da Programação</S.Title>
        <S.Description>
          Somos um estúdio brasileiro que constrói sites modernos, escaláveis e rápidos.
        </S.Description>
        <S.Buttons>
          <Button>Vamos fazer um projeto juntos</Button>
          <Button secondary scrollTo={1345}>
            Descobrir
          </Button>
        </S.Buttons>
      </S.Main>

      <S.Image1 data-aos="fade-left">
        <Image src={illustration} alt="Ilustração Inicio Octane" priority unoptimized />
      </S.Image1>
    </S.Section>
  )
}

export default Home
