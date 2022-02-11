import { useState, useRef } from 'react'

import { formatterBudgetValue } from 'src/resources/utils'

import * as S from './slider.styles'

function Slider({ config }) {
  const progressRef = useRef(null)
  const tooltipRef = useRef(null)
  const [budget, setBudget] = useState('4500')
  const [step, setStep] = useState('100')

  function handleSliderChange(event) {
    const value = event.target.value

    const valueInPercentage = ((value - 3000) / (24000 - 3000)) * 100
    progressRef.current.style.width = `${valueInPercentage}%`
    tooltipRef.current.style.left = `${valueInPercentage}%`

    setBudget(value)

    // if (value >= 6000) {
    //   setStep('1000')
    // }
  }

  return (
    <S.Slider>
      <S.Tooltip ref={tooltipRef}>R$ {formatterBudgetValue(budget)}+</S.Tooltip>
      <S.Input
        type="range"
        min="3000"
        max="24000"
        value={budget}
        onChange={handleSliderChange}
        step={step}
      />
      <S.Progress ref={progressRef} />
    </S.Slider>
  )
}

export default Slider
