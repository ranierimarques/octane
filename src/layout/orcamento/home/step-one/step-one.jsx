import * as S from './step-one.styles'

function StepOne({ nextStep, prevStep }) {
  return (
    <S.Container>
      <S.Title>StepOne</S.Title>
      <S.Wrapper>
        <S.PrevButton onClick={prevStep}>Voltar</S.PrevButton>
        <S.NextButton onClick={nextStep}>Próximo</S.NextButton>
      </S.Wrapper>
    </S.Container>
  )
}

export default StepOne
