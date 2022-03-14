import { useForm } from '@/contexts'
import * as S from './input.styles'

function Input({ disabled, type, autoComplete, id, children, variant, ...props }) {
  const { handleChangeData, state } = useForm()

  if (variant === 'textarea') {
    return (
      <S.Div>
        <S.Textarea
          as="textarea"
          id={id}
          type={state[id]?.type || type}
          autoComplete={state[id]?.autoComplete || autoComplete}
          disabled={state[id]?.disabled}
          value={state.data[id]}
          onChange={event => handleChangeData(event, id)}
          placeholder=" "
          {...props}
        />
        <S.Label>{children}</S.Label>
        <S.BottomLine />
        <S.TopOverflow />
      </S.Div>
    )
  }

  if (variant === 'website') {
    return (
      <S.Wrapper isHidden={state[id]?.hidden}>
        <S.Http className={state[id]?.disabled ? 'disabled' : ''}>http://</S.Http>

        <S.Div>
          <S.Input
            id={id}
            type={state[id]?.type || type}
            autoComplete={state[id]?.autoComplete || autoComplete}
            disabled={state[id]?.disabled}
            value={state.data[id]}
            onChange={event => handleChangeData(event, id)}
            placeholder="www.exemplo.com"
          />
          <S.Label>{children}</S.Label>
          <S.BottomLine />
        </S.Div>
      </S.Wrapper>
    )
  }

  const count = state.data[id].length
  const error = state[id]?.error

  return (
    <S.Div className={error?.hasError && 'error'} isHidden={state[id]?.hidden}>
      <S.Input
        id={id}
        type={state[id]?.type || type}
        autoComplete={state[id]?.autoComplete || autoComplete}
        disabled={state[id]?.disabled}
        value={state.data[id]}
        onChange={event => handleChangeData(event, id)}
        onBlur={event => handleChangeData(event, id)}
        placeholder=" "
      />
      <S.Label>{state[id]?.children || children}</S.Label>
      <S.BottomLine />
      <S.ErrorIcon />

      <S.Helpers>
        <S.Message>
          {error?.isSpecialChars &&
            'Caracteres especiais não são permitidos, utilize somente letras.'}
          {error?.isNumeric && 'Números não são permitidos, utilize somente letras.'}
        </S.Message>
        <S.Counter isVisible={count >= 40}>{count} / 60</S.Counter>
      </S.Helpers>
    </S.Div>
  )
}

export default Input
