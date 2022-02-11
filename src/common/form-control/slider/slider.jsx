import { useState, useRef, useLayoutEffect } from 'react'

import { formatterBudgetValue } from 'src/resources/utils'

import * as S from './slider.styles'

function Slider({ config }) {
  const { min, max } = config
  const sliderRef = useRef(null)
  const [budget, setBudget] = useState('4500')
  const [step, setStep] = useState('100')
  const [position, setPosition] = useState('')

  function setElementsPosition(sliderValue, sliderMin, sliderMax) {
    const sliderThumbWidth = 12
    const sliderWidth = sliderRef.current.offsetWidth // 453

    const maxWidth = sliderWidth - sliderThumbWidth

    const widthInPercentage = (sliderValue - sliderMin) / (sliderMax - sliderMin)
    const positionInPixels = widthInPercentage * maxWidth + sliderThumbWidth / 2

    setPosition(positionInPixels)
  }

  function revalidateStep(value) {
    // if (value >= 6000) {
    //   setStep('1000')
    // }
  }

  function handleSliderChange(event) {
    const value = event.target.value

    setBudget(value)
    setElementsPosition(value, min, max)
    revalidateStep(value)
  }

  useLayoutEffect(() => {
    setElementsPosition('4500', min, max)
  }, [min, max])

  return (
    <S.Slider>
      <S.Tooltip left={position}>R$ {formatterBudgetValue(budget)}+</S.Tooltip>
      <S.Input
        type="range"
        min="3000"
        max="24000"
        value={budget}
        onChange={handleSliderChange}
        step={step}
        ref={sliderRef}
      />
      <S.Progress width={position} />
    </S.Slider>
  )
}

export default Slider
