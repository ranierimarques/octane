import { useForm } from '@/contexts'
import { beforeMaskedStateChange } from './helpers'
import * as S from './input.styles'

function Input({
  disabled,
  type,
  autoComplete,
  id,
  children,
  variant,
  maxLength,
  ...props
}) {
  const { handleChangeData, state } = useForm()

  const count = state.data[id].length
  const error = state[id]?.error

  const counterVisibility =
    count >=
    (state[id]?.maxLength || maxLength) -
      ((state[id]?.maxLength || maxLength) <= 20 ? 0 : 20)

  if (variant === 'textarea') {
    return (
      <S.Div className={error?.error && 'error'}>
        <S.Textarea
          as="textarea"
          id={id}
          type={state[id]?.type || type}
          autoComplete={state[id]?.autoComplete || autoComplete}
          disabled={state[id]?.disabled}
          value={state.data[id]}
          onChange={event => handleChangeData(event, id)}
          onBlur={event => handleChangeData(event, id)}
          maxLength={maxLength}
          title="Preencha este campo."
          placeholder=" "
          {...props}
        />
        <S.Label>{children}</S.Label>
        <S.BottomLine />
        <S.TopOverflow />
        <S.ErrorIcon />

        <S.Helpers>
          <S.Message>{error?.message}</S.Message>
          <S.Counter isVisible={count >= maxLength / 2}>
            {count} / {maxLength}
          </S.Counter>
        </S.Helpers>
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

  return (
    <S.Div className={error?.error && 'error'} isHidden={state[id]?.hidden}>
      <S.Input
        id={id}
        type={state[id]?.type || type}
        mask={state[id]?.type === 'tel' ? '(99) 9 9999-9999' : ''}
        beforeMaskedStateChange={beforeMaskedStateChange}
        autoComplete={state[id]?.autoComplete || autoComplete}
        disabled={state[id]?.disabled}
        value={state.data[id]}
        onChange={event => handleChangeData(event, id)}
        onBlur={event => handleChangeData(event, id)}
        maxLength={state[id]?.type === 'tel' ? '' : state[id]?.maxLength || maxLength}
        title={error?.title}
        placeholder=" "
        {...props}
      />
      <S.Label>{state[id]?.children || children}</S.Label>
      <S.BottomLine />
      <S.ErrorIcon />

      <S.Helpers>
        <S.Message>{error?.message}</S.Message>
        <S.Counter isVisible={counterVisibility}>
          {count} / {state[id]?.maxLength || maxLength}
        </S.Counter>
      </S.Helpers>
    </S.Div>
  )
}

export default Input
