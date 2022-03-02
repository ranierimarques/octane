import * as S from './button.styles'

function Button({ variant = 'contained', size = '', text, disabled, ...props }) {
  return (
    <S.Button className={`${variant} ${size}`} disabled={disabled} {...props}>
      {text}
    </S.Button>
  )
}

export default Button
