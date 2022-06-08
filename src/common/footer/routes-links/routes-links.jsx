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
    <S.Nav>
      {navigation.map(navigation => (
        <ul key={navigation.title}>
          <S.Title>{navigation.title}</S.Title>

          {navigation.routes.map(route => (
            <S.Item key={route.name}>
              <Link href={route.href} passHref>
                <S.Link>{route.name}</S.Link>
              </Link>
            </S.Item>
          ))}
        </ul>
      ))}
    </S.Nav>
  )
}

export default RoutesLinks
