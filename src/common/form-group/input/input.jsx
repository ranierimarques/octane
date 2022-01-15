import * as S from './input.styles.js'

function Input({ textarea }) {
  if (textarea) {
    return (
      <S.Container style={{ marginTop: '32px' }}>
        <S.Textarea as="textarea" id="nome" type="text" placeholder=" " />
        <S.Label>Mensagem</S.Label>
        <S.BottomLine />
        <S.TopOverflow />
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.Input id="nome" type="text" placeholder=" " />
      <S.Label>Nome</S.Label>
      <S.BottomLine />
    </S.Container>
  )
}

export default Input
