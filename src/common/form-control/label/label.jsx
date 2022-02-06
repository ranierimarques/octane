import * as S from './label.styles'

function Label({ config }) {
  const hasDescription = config.description

  return (
    <>
      <S.Title htmlFor={config.id} hasDescription={hasDescription}>
        {config.title}
      </S.Title>

      {hasDescription && (
        <S.Description htmlFor={config.id}>{config.description}</S.Description>
      )}
    </>
  )
}

export default Label
