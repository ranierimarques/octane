import { useForm } from '@/contexts'

import * as S from './radio.styles'

function Radio({ vertical, options, name }) {
  const { handleOptionUnChecked, handleOptionChange, state } = useForm()

  return (
    <S.Radios isVertical={vertical}>
      {options.map(option => (
        <S.Label key={option}>
          <S.Wrapper>
            <S.Input
              type="radio"
              name={name}
              checked={state[name].optionSelected === option}
              onClick={() => handleOptionUnChecked(option, name)}
              onChange={() => handleOptionChange(option, name)}
            />
            <S.Tooltip>{option}</S.Tooltip>
          </S.Wrapper>
          {option}
        </S.Label>
      ))}
    </S.Radios>
  )
}

export default Radio
