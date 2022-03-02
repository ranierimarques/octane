import * as S from './label.styles'

function Label({ description, id, title }) {
  return (
    <>
      <S.Title htmlFor={id} hasDescription={description}>
        {title}
      </S.Title>

      {description && <S.Description htmlFor={id}>{description}</S.Description>}
    </>
  )
}

export default Label
