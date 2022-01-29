import * as S from './final.styles'

function Final({ nextStep, prevStep }) {
  return (
    <div>
      <S.Title>Final</S.Title>
      <S.Wrapper>
        <S.PrevButton onClick={prevStep}>Voltar</S.PrevButton>
        <S.NextButton onClick={nextStep}>Próximo</S.NextButton>
      </S.Wrapper>
    </div>
  )
}
export default Final
