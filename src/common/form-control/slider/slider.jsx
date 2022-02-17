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
  const markers = [3000, 8250, 18750, 24000]

  function setElementsPosition(sliderValue, sliderMin, sliderMax) {
    const sliderThumbWidth = 12
    const sliderWidth = sliderRef.current.offsetWidth // 452

    const maxWidth = sliderWidth - sliderThumbWidth

    const widthInPercentage = (sliderValue - sliderMin) / (sliderMax - sliderMin)
    const positionInPixels = widthInPercentage * maxWidth + sliderThumbWidth / 2

    setPosition(positionInPixels)
  }

  function getMarkerIndex(sliderValue) {
    function isBetweenTheMarkers(marker, index) {
      const value = sliderValue
      const atualMarker = marker
      const nextMarker = markers[index + 1]

      const valueIsBetweenTheMarkers = atualMarker <= value && nextMarker >= value

      return valueIsBetweenTheMarkers
    }

    const markerValue = markers.filter(isBetweenTheMarkers)
    const markerIndex = markers.indexOf(markerValue[0])

    return markerIndex
  }

  function setMinAndMax(markerIndex) {
    const totalLines = 18
    const linesBetweenMarkers = 6

    const atualMarker = markers[markerIndex]
    const nextMarker = markers[markerIndex + 1]

    const difference = nextMarker - atualMarker
    const multiplier = difference / linesBetweenMarkers

    const positionFromLeftLines = markerIndex * linesBetweenMarkers

    const minValue = atualMarker - multiplier * positionFromLeftLines
    const maxValue = multiplier * totalLines + minValue

    setMin(minValue)
    setMax(maxValue)
  }

  function revalidateStep(sliderValue) {
    setMinAndMax(getMarkerIndex(sliderValue))
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
          const formattedMarker = formatterBudget(marker)

          if (isFirstMarker) {
            return (
              <S.Line key={marker}>
                <S.Text>{formattedMarker}</S.Text>
              </S.Line>
            )
          }

          if (isLastMarker) {
            return (
              <Fragment key={marker}>
                <Lines />

                <S.Line>
                  <S.Text className="end">{formattedMarker}</S.Text>
                </S.Line>
              </Fragment>
            )
          }

          return (
            <Fragment key={marker}>
              <Lines />

              <S.Line>
                <S.Text className="center">{formattedMarker}</S.Text>
              </S.Line>
            </Fragment>
          )
        })}
      </S.Markers>
    </S.Slider>
  )
}

export default Slider
