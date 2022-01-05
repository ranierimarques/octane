import Link from 'next/link'

import LogoSvg from 'public/svg/octane-logo'
import InstagramSvg from 'public/svg/instagram-icon'
import LinkedinSvg from 'public/svg/linkedin-icon'
import BehanceSvg from 'public/svg/behance-icon'
import HeartSvg from 'public/svg/heart-icon'
import ArrowUpSvg from 'public/svg/arrow-up'

import * as S from './footer.styles'

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <Link href="/">
            <a>
              <LogoSvg />
            </a>
          </Link>
          <span>Um estúdio de inovação para quem quer inovar!</span>
          <span>
            Octane 2021 <br />
            Todos os direitos reservados
          </span>
        </div>

        <nav>
          <ul>
            <span>Páginas</span>
            <li>
              <Link href="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li>
              <Link href="/sobre-nos">
                <a>Sobre nós</a>
              </Link>
            </li>
            <li>
              <Link href="/servicos">
                <a>Serviços</a>
              </Link>
            </li>
            <li>
              <Link href="/orcamento">
                <a>Orçamento</a>
              </Link>
            </li>
          </ul>

          <ul>
            <span>Sobre</span>
            <li>
              <Link href="/">
                <a>A Octane</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Direitos autorais</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Termos de uso</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Políticas de privacidade</a>
              </Link>
            </li>
          </ul>

          <ul>
            <span>Dúvidas</span>
            <li>
              <Link href="/contato">
                <a>Contato</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>WhatsApp</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <div>
          <a
            href="https://www.instagram.com/octane.std/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <InstagramSvg />
          </a>
          <a
            href="https://www.linkedin.com/company/octane-studio/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedinSvg />
          </a>
          <a
            href="https://www.behance.net/octanestudio"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BehanceSvg />
          </a>
        </div>

        <div>
          <span>
            Feito com <HeartSvg />
          </span>
          <button aria-label="Subir até o topo da página">
            <ArrowUpSvg />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
