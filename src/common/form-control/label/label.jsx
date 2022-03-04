import * as S from './label.styles'

function Label({ description, children, ...props }) {
  return (
    <>
      <S.Title hasDescription={description} {...props}>
        {children}
      </S.Title>

      {description && <S.Description {...props}>{description}</S.Description>}
    </>
  )
}

export default Label
