import { useForm } from 'src/resources/contexts'
import { Loader } from 'src/common'

import * as S from './button.styles'

function Button({ variant = 'contained', size = '', children, ...props }) {
  const { state } = useForm()

  return (
    <S.Button
      className={`${variant} ${size}`}
      disabled={state.isSubmitDisabled}
      {...props}
    >
      {state.isLoading ? <Loader /> : children}
    </S.Button>
  )
}

export default Button
