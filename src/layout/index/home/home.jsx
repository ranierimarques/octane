import Image from 'next/image'
import Link from 'next/link'

import { illustration } from './images'
import { ArrowDown, OctaneGhost } from './svgs'

import * as S from './home.styles'

function Home() {
  const scrollTo = () => window.scrollTo({ behavior: 'smooth', top: 0 })

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
          <Link href="/orcamento" passHref>
            <S.PrimaryButton>
              <a draggable="false">Vamos fazer um projeto juntos</a>
            </S.PrimaryButton>
          </Link>
          <S.SecondaryButton onClick={scrollTo}>
            Descobrir <ArrowDown />
          </S.SecondaryButton>
        </S.Buttons>
      </S.Main>

      <S.Image1>
        <Image src={illustration} alt="Ilustração Inicio Octane" priority unoptimized />
      </S.Image1>
    </S.Section>
  )
}

export default Home
