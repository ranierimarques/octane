import { FormControl } from 'src/common'
import { SuccessCheck } from '../svgs'

import * as S from './successful-modal.styles'

const configs = {
  1: {
    element: 'button',
    text: 'OK',
  },
}

function SuccessfulModal() {
  return (
    <S.Modal>
      <SuccessCheck />
      <S.Title>Sucesso</S.Title>
      <S.Description>Seu formulário foi enviado!</S.Description>

      <FormControl config={configs[1]} />
    </S.Modal>
  )
}

export default SuccessfulModal
