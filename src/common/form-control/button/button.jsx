import { useForm } from 'src/resources/contexts'

import * as S from './button.styles'

function Button({ variant = 'contained', size = '', children, disabled, ...props }) {
  const { state } = useForm()

  return (
    <S.Button
      className={`${variant} ${size}`}
      disabled={state.isSubmitDisabled}
      {...props}
    >
      {children}
    </S.Button>
  )
}

export default Button
