import * as S from './input.styles.js'

function Input() {
  return (
    <>
      <S.Title htmlFor="nome">Qual seu nome?</S.Title>

      <S.Container>
        <S.Input id="nome" type="text" placeholder=" " />
        <S.Label>Nome</S.Label>
        <S.BottomLine />
      </S.Container>
    </>
  )
}

export default Input
