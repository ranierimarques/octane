import Image from 'next/image'

import { Button } from 'src/common'

import { illustration } from './images'
import { OctaneGhost } from './svgs'

import * as S from './home.styles'

function Home() {
  return (
    <S.Section>
      <S.Main>
        <S.Hat>
          <OctaneGhost />
          <span>Boas vindas à Octane</span>
        </S.Hat>
        <h1>Construindo o futuro por meio do Design e da Programação</h1>
        <h2>
          Somos um estúdio brasileiro que constrói sites modernos, escaláveis e rápidos.
        </h2>
        <S.Buttons>
          <Button>Vamos fazer um projeto juntos</Button>
          <Button secondary>Descobrir</Button>
        </S.Buttons>
      </S.Main>

      <S.Image1>
        <Image src={illustration} alt="Ilustração Inicio Octane" priority unoptimized />
      </S.Image1>
    </S.Section>
  )
}

export default Home
