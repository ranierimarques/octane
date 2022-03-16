import { useForm } from '@/contexts'
import { Loader } from '.'
import * as S from './form-button.styles'

function FormButton({ variant = 'contained', size = '', id, children, ...props }) {
  const { state } = useForm()

  const isInputsFilled = Object.values(state.data).every(value => value !== '')

  return (
    <S.Button className={`${variant} ${size}`} disabled={!isInputsFilled} {...props}>
      {state[id]?.loading ? <Loader /> : state[id]?.children || children}
    </S.Button>
  )
}

export default FormButton
