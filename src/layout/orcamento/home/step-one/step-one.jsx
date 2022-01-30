import { Navigation } from '..'

import * as S from './step-one.styles'

function StepOne({ nextStep, prevStep }) {
  return (
    <S.Background>
      <Navigation />

      <S.FormBackground></S.FormBackground>

      <S.Buttons>
        <S.PrevButton onClick={prevStep}>Voltar</S.PrevButton>
        <S.NextButton onClick={nextStep}>Próximo</S.NextButton>
      </S.Buttons>
    </S.Background>
  )
}

export default StepOne
