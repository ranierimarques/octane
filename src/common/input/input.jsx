import { useForm } from '@/contexts'
import * as S from './input.styles'

function Input({ disabled, type, autoComplete, id, children, variant, ...props }) {
  const { handleChangeData, state } = useForm()

  function handleInputChange(event) {
    const value = event.target.value

    handleChangeData(value, id)
  }

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
          onChange={handleInputChange}
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
            onChange={handleInputChange}
            placeholder="www.exemplo.com"
          />
          <S.Label>{children}</S.Label>
          <S.BottomLine />
        </S.Div>
      </S.Wrapper>
    )
  }

  return (
    <S.Div isHidden={state[id]?.hidden}>
      <S.Input
        id={id}
        type={state[id]?.type || type}
        autoComplete={state[id]?.autoComplete || autoComplete}
        disabled={state[id]?.disabled}
        value={state.data[id]}
        onChange={handleInputChange}
        placeholder=" "
      />
      <S.Label>{state[id]?.children || children}</S.Label>
      <S.BottomLine />
      <S.Counter>{state.data[id].length} / 60</S.Counter>
    </S.Div>
  )
}

export default Input
