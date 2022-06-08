import { CircleShape } from '../svgs'
import * as S from './details.styles'

function Details() {
  return (
    <S.Details data-aos="fade-up-left" data-aos-offset="-400" data-aos-delay="800">
      <S.Front>
        <S.OctaneGhost />
      </S.Front>

      <CircleShape />
    </S.Details>
  )
}

export default Details
