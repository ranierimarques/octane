import * as S from './step-one.styles'

function StepOne({ nextStep, prevStep }) {
  return (
    <div>
      <S.Title>StepOne</S.Title>
      <S.Wrapper>
        <S.PrevButton onClick={prevStep}>Voltar</S.PrevButton>
        <S.NextButton onClick={nextStep}>Próximo</S.NextButton>
      </S.Wrapper>
    </div>
  )
}

export default StepOne
