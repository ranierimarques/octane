import { Fragment, memo } from 'react'
import { formatterBudget } from '../utils'
import * as S from './markers.styles'

function createLines() {
  const lines = []
  for (let i = 0; i < 5; i++) {
    lines.push(<S.Line key={i} />)
  }
  return lines
}

const lines = createLines()

function Markers({ markers, onMarkersChangeValue }) {
  return (
    <S.Markers>
      {markers.map(marker => {
        const isFirstMarker = markers[0] === marker
        const isLastMarker = markers[markers.length - 1] === marker
        const formattedMarker = formatterBudget(marker)

        function handleSliderChange() {
          onMarkersChangeValue(marker)
        }

        if (isFirstMarker) {
          return (
            <S.Line key={marker}>
              <S.Text onClick={handleSliderChange}>{formattedMarker}</S.Text>
            </S.Line>
          )
        }

        if (isLastMarker) {
          return (
            <Fragment key={marker}>
              {lines}

              <S.Line>
                <S.Text className="end" onClick={handleSliderChange}>
                  {formattedMarker}
                </S.Text>
              </S.Line>
            </Fragment>
          )
        }

        return (
          <Fragment key={marker}>
            {lines}

            <S.Line>
              <S.Text className="center" onClick={handleSliderChange}>
                {formattedMarker}
              </S.Text>
            </S.Line>
          </Fragment>
        )
      })}
    </S.Markers>
  )
}

export default memo(Markers)
