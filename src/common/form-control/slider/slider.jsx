import { useState, useRef, useLayoutEffect } from 'react'

import { formatterBudgetValue, calculateEquidistantValue } from '../utils'

import * as S from './slider.styles'

function Lines() {
  return (
    <>
      <S.Line />
      <S.Line />
      <S.Line />
      <S.Line />
      <S.Line />
    </>
  )
}

function Slider({ config }) {
  const { min, max } = config
  const sliderRef = useRef(null)
  const [budget, setBudget] = useState(14000)
  const [position, setPosition] = useState('')

  function setElementsPosition(sliderValue, sliderMin, sliderMax) {
    const sliderThumbWidth = 12
    const sliderWidth = sliderRef.current.offsetWidth // 452

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

  function getEquidistantBudgetValue(min, max, approximation) {
    const budget = calculateEquidistantValue(min, max, approximation)
    return formatterBudgetValue(budget)
  }

  return (
    <S.Slider>
      <S.Tooltip left={position}>R$ {formatterBudgetValue(budget)}+</S.Tooltip>
      <S.Input
        type="range"
        min={min}
        max={max}
        value={budget}
        onChange={handleSliderChange}
        step="50"
        ref={sliderRef}
      />
      <S.Progress width={position} />

      <S.Markers>
        <S.Line>
          <S.Text>{formatterBudgetValue(min)}</S.Text>
        </S.Line>

        <Lines />

        <S.Line>
          <S.Text className="center">{getEquidistantBudgetValue(min, max, min)}</S.Text>
        </S.Line>

        <Lines />

        <S.Line>
          <S.Text className="center">{getEquidistantBudgetValue(min, max, max)}</S.Text>
        </S.Line>

        <Lines />

        <S.Line>
          <S.Text className="end">{formatterBudgetValue(max)}</S.Text>
        </S.Line>
      </S.Markers>
    </S.Slider>
  )
}

export default Slider
