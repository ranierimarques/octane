import * as S from './input.styles.js'

function Input({ config, secondInput }) {
  const hasSecondInput = secondInput

  if (config.variant === 'textarea') {
    return (
      <S.Div>
        <S.Textarea as="textarea" id={config.id} type="text" placeholder=" " />
        <S.Label>{config.title}</S.Label>
        <S.BottomLine />
        <S.TopOverflow />
      </S.Div>
    )
  }

  return (
    <S.Div>
      <S.Input id={config.id} type="text" placeholder=" " disabled={config.disabled} />
      <S.Label>{hasSecondInput ? config.secondLabel : config.label}</S.Label>
      <S.BottomLine />
    </S.Div>
  )
}

export default Input
