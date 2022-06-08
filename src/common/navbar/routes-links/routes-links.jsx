import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './routes-links.styles'

const routes = [
  { href: '/servicos', name: 'Serviços' },
  { href: '/sobre-nos', name: 'Sobre nós' },
  { href: '/contato', name: 'Contato' },
]

function RoutesLinks({ closeMenu }) {
  const { pathname } = useRouter()

  return (
    <>
      {routes.map(route => (
        <li key={route.name} onClick={closeMenu}>
          <Link href={route.href} passHref>
            <S.Link className={pathname === route.href && 'active'}>{route.name}</S.Link>
          </Link>
        </li>
      ))}
    </>
  )
}
export default RoutesLinks
