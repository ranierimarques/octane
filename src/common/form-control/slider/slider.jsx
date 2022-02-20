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

// function getMarkerIndex(sliderValue, markers) {
//   function isBetweenTheMarkers(marker, index) {
//     const value = sliderValue
//     const atualMarker = marker
//     const nextMarker = markers[index + 1]

//     const valueIsBetweenTheMarkers = atualMarker <= value && nextMarker >= value

//     return valueIsBetweenTheMarkers
//   }

//   const markerValue = markers.filter(isBetweenTheMarkers)
//   const markerIndex = markers.indexOf(markerValue[0])

//   return markerIndex
// }

function setMinAndMax(sliderValue, setMinMax, markers, markerIndex) {
  console.log('Marcador1:', markers[markerIndex], 'Marcador2:', markers[markerIndex + 1])

  const totalLines = 18
  const linesBetweenMarkers = 6

  const atualMarker = markers[markerIndex]
  const nextMarker = markers[markerIndex + 1]

  const difference = nextMarker - atualMarker
  const multiplier = difference / linesBetweenMarkers

  const positionFromLeftLines = markerIndex * linesBetweenMarkers

  const minValue = atualMarker - multiplier * positionFromLeftLines
  const maxValue = multiplier * totalLines + minValue

  setMinMax({ min: minValue, max: maxValue })

  return { min: minValue, max: maxValue }
}

function Slider({ config }) {
  const { firstBudget, lastBudget, initial, range } = config
  const sliderRef = useRef(null)
  const [budget, setBudget] = useState(0)
  const [position, setPosition] = useState('')
  const [minMax, setMinMax] = useState({ min: 3000, max: 12000 })
  const [markers, setMarkers] = useState(range)

  function setElementsPosition(sliderValue, sliderMin, sliderMax) {
    const sliderThumbWidth = 12
    const sliderWidth = sliderRef.current.offsetWidth // 452

    const maxWidth = sliderWidth - sliderThumbWidth

    const widthInPercentage = (sliderValue - sliderMin) / (sliderMax - sliderMin)
    const positionInPixels = widthInPercentage * maxWidth + sliderThumbWidth / 2

    setPosition(positionInPixels)

    return widthInPercentage
  }

  function revalidateStep(sliderValue, index) {
    return setMinAndMax(sliderValue, setMinMax, markers, index)
  }

  function handleSliderChange(event) {
    const value = Number(event.target.value)

    const widthInPercentage = setElementsPosition(value, minMax.min, minMax.max)

    const index = widthInPercentage === 1 ? 2 : Math.floor(widthInPercentage / (1 / 3))

    const step = revalidateStep(value, index)

    console.log(step)
    console.log(widthInPercentage)
    console.log(markers[index])

    const calc1 = widthInPercentage !== 1 ? widthInPercentage % (1 / 3) : 1 / 3
    const calc2 = calc1 / (1 / 3)
    const calc3 = Math.floor((calc2 * markers[index] + 1) / 50) * 50
    const calc4 = calc3 + markers[index]

    console.log(calc1)
    console.log(calc2)
    console.log(calc3)
    console.log(calc2 * markers[index])
    console.log(calc4)
    setBudget(calc4)
  }

  useLayoutEffect(() => {
    setElementsPosition(initial, 3000, 12000)
    setBudget(initial)

    if (!range) {
      const dynamicMarkers = calculateEquidistant(firstBudget, lastBudget)

      setMarkers(dynamicMarkers)
    }
  }, [firstBudget, lastBudget, initial, range])

  return (
    <S.Slider>
      <S.Tooltip left={position}>R$ {formatterBudget(budget)}+</S.Tooltip>
      <S.Input
        type="range"
        min={minMax.min}
        max={minMax.max}
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
