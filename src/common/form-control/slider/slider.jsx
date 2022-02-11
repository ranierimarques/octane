import { useState, useRef, useLayoutEffect } from 'react'

import { formatterBudgetValue } from 'src/resources/utils'

import * as S from './slider.styles'

function Slider({ config }) {
  const progressRef = useRef(null)
  const tooltipRef = useRef(null)
  const [budget, setBudget] = useState('4500')
  const [step, setStep] = useState('100')

  const sliderMin = '3000'
  const sliderMax = '24000'

  function setElementsPosition(sliderValue) {
    const sliderThumbWidth = 12
    const tooltipParentWidth = tooltipRef.current.offsetParent.offsetWidth // 453

    const maxWidth = tooltipParentWidth - sliderThumbWidth

    const widthInPercentage = (sliderValue - sliderMin) / (sliderMax - sliderMin)
    const positionInPixels = widthInPercentage * maxWidth + sliderThumbWidth / 2

    progressRef.current.style.width = `${positionInPixels}px`
    tooltipRef.current.style.left = `${positionInPixels}px`
  }

  function revalidateStep(value) {
    // if (value >= 6000) {
    //   setStep('1000')
    // }
  }

  function handleSliderChange(event) {
    const value = event.target.value

    setBudget(value)
    setElementsPosition(value)
    revalidateStep(value)
  }

  useLayoutEffect(() => {
    setElementsPosition('4500')
  }, [])

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
