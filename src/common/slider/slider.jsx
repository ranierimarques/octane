import { useForm } from '@/contexts'
import { useCallback, useLayoutEffect, useMemo, useRef } from 'react'
import { Markers } from '.'
import { composeSliderChange, getMarkers } from './helpers'
import * as S from './slider.styles'
import { formatterBudget } from './utils'

function Slider({ id, initial, range, step }) {
  const { state, dispatch } = useForm()
  const sliderRef = useRef(null)
  const lastBudgetRef = useRef(null)
  const markers = useMemo(() => getMarkers(range), [range])
  const sliderChange = useMemo(
    () => composeSliderChange(markers, sliderRef, lastBudgetRef, step, dispatch, id),
    [markers, step, dispatch, id]
  )

  function handleSliderChange(event) {
    const value = Number(event.target.value)

    sliderChange.usingPosition(value, state[id])
  }

  // prettier-ignore
  const handleMarkersChangeValue = useCallback(value => { 
    sliderChange.usingValue(value)
  }, [sliderChange])

  useLayoutEffect(() => {
    sliderChange.usingValue(state.data[id] || initial)
  }, [initial, sliderChange, state.data, id])

  return (
    <S.Slider>
      <S.Tooltip left={state[id].position}>
        R$ {formatterBudget(state.data[id])}+
      </S.Tooltip>
      <S.Input
        type="range"
        min={state[id].min}
        max={state[id].max}
        value={state.data[id]}
        onChange={handleSliderChange}
        step={step}
        ref={sliderRef}
      />
      <S.Progress width={state[id].position} />

      <Markers markers={markers} onMarkersChangeValue={handleMarkersChangeValue} />
    </S.Slider>
  )
}

export default Slider
