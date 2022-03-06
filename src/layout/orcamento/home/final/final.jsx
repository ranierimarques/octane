import { useForm } from '@/resources/contexts'
import { FormControl } from 'src/common'

import { HeartIcon } from '../svgs'

import * as S from './final.styles'

const configs = {
  1: {
    element: 'button',
    text: 'Concluir',
  },
}

function Final() {
  const { goBackToStart } = useForm()

  return (
    <S.Final>
      <div>
        <S.Hat>
          <HeartIcon />
          <S.Text>Você chegou ao fim</S.Text>
        </S.Hat>
        <S.Title>Agradecemos por chegar até aqui</S.Title>
        <S.Description>
          Fique atento, nossa equipe entrará em contato nas próximas 24 horas.
        </S.Description>
        <FormControl onClick={goBackToStart} config={configs[1]} />
      </div>

      <S.Wire />
      <S.Illustration type="image/svg+xml" data="/animated/boxs.svg" />
    </S.Final>
  )
}

export default Final
