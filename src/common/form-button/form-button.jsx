import { useForm } from '@/contexts'
import { Loader } from '.'

import * as S from './form-button.styles'

function FormButton({ variant = 'contained', size = '', children, ...props }) {
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

export default FormButton
