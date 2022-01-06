import Link from 'next/link'

import { RoutesLinks, SocialLinks } from '.'

import { OctaneLogo, HeartIcon, ArrowUp } from 'public/svg'

import * as S from './footer.styles'

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <Link href="/">
            <a>
              <OctaneLogo />
            </a>
          </Link>
          <span>Um estúdio de inovação para quem quer inovar!</span>
          <span>
            Octane 2021 <br />
            Todos os direitos reservados
          </span>
        </div>

        <RoutesLinks />
      </div>

      <div>
        <SocialLinks />

        <div>
          <span>
            Feito com <HeartIcon />
          </span>
          <button aria-label="Subir até o topo da página">
            <ArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
