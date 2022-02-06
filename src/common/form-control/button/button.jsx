import * as S from './button.styles'

function Button({ config, ...props }) {
  const variant = config.variant || 'contained'
  const size = config.size || ''

  return (
    <S.Button className={`${variant} ${size}`} disabled={config.disabled} {...props}>
      {config.text}
    </S.Button>
  )
}

export default Button
