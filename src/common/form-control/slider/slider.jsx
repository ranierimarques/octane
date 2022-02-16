import { useState, useRef, useLayoutEffect, Fragment } from 'react'

import { formatterBudget, calculateEquidistant } from '../utils'

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
  const { min: firstBudget, max: lastBudget, initial } = config
  const sliderRef = useRef(null)
  const [budget, setBudget] = useState(0)
  const [position, setPosition] = useState('')
  const [min, setMin] = useState(firstBudget)
  const [max, setMax] = useState(lastBudget)

  // TODO: Gerar esses valores dinamicamente
  const markers = [12000, 31500, 70500, 90000]

  function setElementsPosition(sliderValue, sliderMin, sliderMax) {
    const sliderThumbWidth = 12
    const sliderWidth = sliderRef.current.offsetWidth // 452

    const maxWidth = sliderWidth - sliderThumbWidth

    const widthInPercentage = (sliderValue - sliderMin) / (sliderMax - sliderMin)
    const positionInPixels = widthInPercentage * maxWidth + sliderThumbWidth / 2

    setPosition(positionInPixels)
  }

  function revalidateStep(sliderValue) {
    const TOTAL_LINES = 18

    if (sliderValue >= markers[0] && sliderValue <= markers[1]) {
      const difference = markers[1] - markers[0]
      const multiplier = difference / 6

      const minValue = markers[0] - multiplier * 0
      const maxValue = multiplier * TOTAL_LINES + minValue

      setMin(minValue)
      setMax(maxValue)
    }

    if (sliderValue >= markers[1] && sliderValue <= markers[2]) {
      const difference = markers[2] - markers[1]
      const multiplier = difference / 6

      const minValue = markers[1] - multiplier * 6
      const maxValue = multiplier * TOTAL_LINES + minValue

      setMin(minValue)
      setMax(maxValue)
    }

    if (sliderValue >= markers[2] && sliderValue <= markers[3]) {
      const difference = markers[3] - markers[2]
      const multiplier = difference / 6

      const minValue = markers[2] - multiplier * 12
      const maxValue = multiplier * TOTAL_LINES + minValue

      setMin(minValue)
      setMax(maxValue)
    }
  }

  function handleSliderChange(event) {
    const value = Number(event.target.value)

    setBudget(value)
    setElementsPosition(value, min, max)
    revalidateStep(value)
  }

  useLayoutEffect(() => {
    setElementsPosition(initial, firstBudget, lastBudget)
    setBudget(initial)
  }, [firstBudget, lastBudget, initial])

  return (
    <S.Slider>
      <S.Tooltip left={position}>R$ {formatterBudget(budget)}+</S.Tooltip>
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
        {markers.map(marker => {
          const isFirstMarker = markers[0] === marker
          const isLastMarker = markers[markers.length - 1] === marker

          if (isFirstMarker) {
            return (
              <S.Line key={marker}>
                <S.Text>{formatterBudget(marker)}</S.Text>
              </S.Line>
            )
          }

          if (isLastMarker) {
            return (
              <Fragment key={marker}>
                <Lines />

                <S.Line>
                  <S.Text className="end">{formatterBudget(marker)}</S.Text>
                </S.Line>
              </Fragment>
            )
          }

          return (
            <Fragment key={marker}>
              <Lines />

              <S.Line>
                <S.Text className="center">{formatterBudget(marker)}</S.Text>
              </S.Line>
            </Fragment>
          )
        })}
      </S.Markers>
    </S.Slider>
  )
}

export default Slider
