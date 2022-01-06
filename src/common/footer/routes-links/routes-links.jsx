import Link from 'next/link'

import * as S from './routes-links.styles'

const navigation = [
  {
    title: 'Páginas',
    routes: [
      { href: '/', name: 'Inicio' },
      { href: '/sobre-nos', name: 'Sobre nós' },
      { href: '/servicos', name: 'Serviços' },
      { href: '/orcamento', name: 'Orçamento' },
    ],
  },
  {
    title: 'Sobre',
    routes: [
      { href: '/', name: 'A Octane' },
      { href: '/', name: 'Direitos autorais' },
      { href: '/', name: 'Termos de uso' },
      { href: '/', name: 'Políticas de privacidade' },
    ],
  },
  {
    title: 'Dúvidas',
    routes: [
      { href: '/contato', name: 'Contato' },
      { href: '/', name: 'WhatsApp' },
    ],
  },
]

function RoutesLinks() {
  return (
    <nav>
      {navigation.map(navigation => (
        <ul key={navigation.title}>
          <span>{navigation.title}</span>

          {navigation.routes.map(route => (
            <li key={route.name}>
              <Link href={route.href}>
                <a>{route.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  )
}

export default RoutesLinks
