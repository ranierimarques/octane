import Link from 'next/link'
import * as S from './button.styles'
import { ArrowDown } from './svgs'

function Button({
  variant,
  scrollTo,
  href = '/orcamento',
  secondary,
  children,
  noLink,
  ...props
}) {
  const scrollToTop = () => window.scrollTo({ behavior: 'smooth', top: scrollTo })

  if (secondary) {
    return (
      <S.Secondary className={variant} onClick={scrollToTop} {...props}>
        {children} <ArrowDown />
      </S.Secondary>
    )
  }

  if (noLink) {
    return (
      <S.PrimaryNoLink className={variant} {...props}>
        {children}
      </S.PrimaryNoLink>
    )
  }

  return (
    <S.Primary className={variant} {...props}>
      <Link href={href} passHref>
        <S.Link draggable="false">{children}</S.Link>
      </Link>
    </S.Primary>
  )
}

export default Button
