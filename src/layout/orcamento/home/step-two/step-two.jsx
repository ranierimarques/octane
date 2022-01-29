import * as S from './step-two.styles'

function StepTwo({ nextStep, prevStep }) {
  return (
    <S.Container>
      <S.Title>StepTwo</S.Title>
      <S.Wrapper>
        <S.PrevButton onClick={prevStep}>Voltar</S.PrevButton>
        <S.NextButton onClick={nextStep}>Próximo</S.NextButton>
      </S.Wrapper>
    </S.Container>
  )
}

export default StepTwo
