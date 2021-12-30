import Link from 'next/link'

import LogoSvg from 'public/svg/octane-logo.jsx'

const routes = [
  { href: '/serviços', name: 'Serviços' },
  { href: '/sobre-nós', name: 'Sobre nós' },
  { href: '/contato', name: 'Contato' },
  { href: '/orçamento', name: 'Orçamento' },
]

function NavbarItems() {
  return (
    <ul>
      {routes.map(route => {
        return (
          <li key={route.name}>
            <Link href={route.href} passHref>
              <a>{route.name}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/" passHref>
          <a>
            <LogoSvg />
          </a>
        </Link>

        <NavbarItems />
      </nav>
    </header>
  )
}

export default Navbar
