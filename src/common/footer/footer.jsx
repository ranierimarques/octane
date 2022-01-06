import Link from 'next/link'

import { RoutesLinks, SocialLinks } from '.'

import { OctaneLogo, HeartIcon, ArrowUp } from 'public/svgs'

import * as S from './footer.styles'

function Footer() {
  const scrollTo = () => window.scrollTo({ behavior: 'smooth', top: 0 })

  return (
    <S.Footer>
      <S.Content>
        <S.Main>
          <S.Octane>
            <Link href="/">
              <a>
                <OctaneLogo />
              </a>
            </Link>
            <S.Slogan>
              Um estúdio de inovação <br /> para quem quer inovar!
            </S.Slogan>
            <S.Copy>
              Octane 2022 <br />
              Todos os direitos reservados
            </S.Copy>
          </S.Octane>

          <RoutesLinks />
        </S.Main>

        <S.Bottom>
          <SocialLinks />

          <S.Right>
            <S.MadeBy>
              Feito com <HeartIcon />
            </S.MadeBy>
            <S.UpButton aria-label="Subir até o topo da página" onClick={scrollTo}>
              <ArrowUp />
            </S.UpButton>
          </S.Right>
        </S.Bottom>
      </S.Content>
    </S.Footer>
  )
}

export default Footer
