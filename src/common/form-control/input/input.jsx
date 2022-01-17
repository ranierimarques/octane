import * as S from './input.styles.js'

function Input({ disabled, textarea, id, children }) {
  if (textarea) {
    return (
      <S.Div>
        <S.Textarea as="textarea" id={id} type="text" placeholder=" " />
        <S.Label>{children}</S.Label>
        <S.BottomLine />
        <S.TopOverflow />
      </S.Div>
    )
  }

  return (
    <S.Div>
      <S.Input id={id} type="text" placeholder=" " disabled={disabled} />
      <S.Label>{children}</S.Label>
      <S.BottomLine />
    </S.Div>
  )
}

export default Input
