import * as S from './input.styles.js'

function Input({ textarea, id }) {
  if (textarea) {
    return (
      <S.Div>
        <S.Textarea as="textarea" id={id} type="text" placeholder=" " />
        <S.Label>Mensagem</S.Label>
        <S.BottomLine />
        <S.TopOverflow />
      </S.Div>
    )
  }

  return (
    <S.Div>
      <S.Input id={id} type="text" placeholder=" " />
      <S.Label>Nome</S.Label>
      <S.BottomLine />
    </S.Div>
  )
}

export default Input
