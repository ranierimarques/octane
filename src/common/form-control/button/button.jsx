import * as S from './button.styles'

function Button({ children, variant = 'contained', size = '', disabled, ...props }) {
  return (
    <S.Button className={`${variant} ${size}`} disabled={disabled} {...props}>
      {children}
    </S.Button>
  )
}

export default Button
