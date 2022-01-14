import Link from 'next/link'

import { ArrowDown } from './svgs'

import * as S from './button.styles'

function Button({
  variant,
  scrollTo,
  href = '/orcamento',
  secondary,
  children,
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

  return (
    <S.Primary className={variant} {...props}>
      <Link href={href} passHref>
        <S.Link draggable="false">{children}</S.Link>
      </Link>
    </S.Primary>
  )
}

export default Button
