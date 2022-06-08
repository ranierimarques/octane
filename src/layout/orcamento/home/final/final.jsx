import { FormButton } from '@/common'
import { useForm } from '@/resources/contexts'
import { HeartIcon } from '../svgs'
import * as S from './final.styles'

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
        <FormButton onClick={goBackToStart}>Concluir</FormButton>
      </div>

      <S.Wire />
      <S.Illustration type="image/svg+xml" data="/animated/boxs.svg" />
    </S.Final>
  )
}

export default Final
