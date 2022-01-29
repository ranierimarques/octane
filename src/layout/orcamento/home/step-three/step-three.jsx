import * as S from './step-three.styles'

function StepThree({ nextStep, prevStep }) {
  return (
    <S.Container>
      <S.Title>StepThree</S.Title>
      <S.Wrapper>
        <S.PrevButton onClick={prevStep}>Voltar</S.PrevButton>
        <S.NextButton onClick={nextStep}>Próximo</S.NextButton>
      </S.Wrapper>
    </S.Container>
  )
}

export default StepThree
