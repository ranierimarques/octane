import { Button } from 'src/common'

import * as S from './orcamento-form.styles'

function OrcamentoForm() {
  return (
    <S.OrcamentoForm>
      <S.Content>
        <S.Subtitle>Formulário de Orçamento</S.Subtitle>
        <S.Description>
          Esse formulário foi feito especialmente para você entrar em contato conosco,
          perguntas diretas e sem enrolação.
        </S.Description>
        <Button noLink>Iniciar formulário de orçamento</Button>
      </S.Content>
    </S.OrcamentoForm>
  )
}

export default OrcamentoForm
