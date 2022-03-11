import { useCallback, useLayoutEffect, useMemo, useReducer, useRef } from 'react'
import { Markers } from '.'
import { composeSliderChange, getMarkers } from './helpers'
import * as S from './slider.styles'
import { formatterBudget } from './utils'

const initialState = { budget: 0, position: 0, min: 0, max: 0 }

function reducer(_, action) {
  switch (action.type) {
    case 'slider_change':
      return {
        budget: action.payload.budget,
        position: action.payload.position,
        min: action.payload.min,
        max: action.payload.max,
      }
    default:
      throw new Error()
  }
}

function Slider({ initial, range, step }) {
  const sliderRef = useRef(null)
  const lastBudgetRef = useRef(null)
  const [state, dispatch] = useReducer(reducer, initialState)
  const { budget, position, min, max } = state
  const markers = useMemo(() => getMarkers(range), [range])
  const sliderChange = useMemo(
    () => composeSliderChange(markers, sliderRef, lastBudgetRef, step, dispatch),
    [markers, step]
  )

  function handleSliderChange(event) {
    const value = Number(event.target.value)

    sliderChange.usingPosition(value, state)
  }

  // prettier-ignore
  const handleMarkersChangeValue = useCallback(value => { 
    sliderChange.usingValue(value)
  }, [sliderChange])

  useLayoutEffect(() => {
    sliderChange.usingValue(initial)
  }, [initial, sliderChange])

  return (
    <S.Slider>
      <S.Tooltip left={position}>R$ {formatterBudget(budget)}+</S.Tooltip>
      <S.Input
        type="range"
        min={min}
        max={max}
        value={budget}
        onChange={handleSliderChange}
        step={step}
        ref={sliderRef}
      />
      <S.Progress width={position} />

      <Markers markers={markers} onMarkersChangeValue={handleMarkersChangeValue} />
    </S.Slider>
  )
}

export default Slider
