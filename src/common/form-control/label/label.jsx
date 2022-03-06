import * as S from './label.styles'

function Label({ description, smallMargin, children, ...props }) {
  if (description) {
    return <S.Description {...props}>{children}</S.Description>
  }

  return (
    <S.Title smallMargin={smallMargin} {...props}>
      {children}
    </S.Title>
  )
}

export default Label
