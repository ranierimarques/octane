import Image from 'next/image'
import Link from 'next/link'

import illustrationImg from 'public/images/home-illustration.webp'
import ArrowDownSvg from 'public/svg/arrow-down'
import OctaneGhostSvg from 'public/svg/octane-ghost'

import * as S from './home.styles'

function Home() {
  const scrollTo = () => window.scrollTo({ behavior: 'smooth', top: 0 })

  return (
    <S.Section>
      <S.Main>
        <S.Hat>
          <OctaneGhostSvg />
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
            Descobrir <ArrowDownSvg />
          </S.SecondaryButton>
        </S.Buttons>
      </S.Main>

      <S.Image1>
        <Image
          src={illustrationImg}
          alt="Ilustração Inicio Octane"
          priority
          unoptimized
        />
      </S.Image1>
    </S.Section>
  )
}

export default Home
