import * as S from './input.styles.js'

function Input({ textarea, id }) {
  if (textarea) {
    return (
      <S.Container>
        <S.Textarea as="textarea" id={id} type="text" placeholder=" " />
        <S.Label>Mensagem</S.Label>
        <S.BottomLine />
        <S.TopOverflow />
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.Input id={id} type="text" placeholder=" " />
      <S.Label>Nome</S.Label>
      <S.BottomLine />
    </S.Container>
  )
}

export default Input
