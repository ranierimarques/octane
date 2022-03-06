import { useForm } from '@/contexts'

import * as S from './input.styles.js'

function Input({ disabled, type, autoComplete, id, children, hidden, variant }) {
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
          type="text"
          placeholder=" "
          onChange={handleInputChange}
          value={state.data[id]}
          maxLength="20"
        />
        <S.Label>{children}</S.Label>
        <S.BottomLine />
        <S.TopOverflow />
      </S.Div>
    )
  }

  if (variant === 'website') {
    return (
      <S.Wrapper isHidden={hidden}>
        <S.Http className={disabled ? 'disabled' : ''}>http://</S.Http>

        <S.Div>
          <S.Input
            id={id}
            type="text"
            placeholder="www.exemplo.com"
            disabled={disabled}
          />
          <S.Label>{children}</S.Label>
          <S.BottomLine />
        </S.Div>
      </S.Wrapper>
    )
  }

  return (
    <S.Div isHidden={hidden}>
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
    </S.Div>
  )
}

export default Input
