import { OrcamentoForm } from '.'

import * as S from './home.styles'

function Home() {
  return (
    <S.Section>
      <S.Header data-aos="fade-up">
        <S.Hat>ORÇAMENTO</S.Hat>
        <S.Title>Estamos esperando por você!</S.Title>
        <S.Description>
          Preencha corretamente as informações definidas no formulário para que possamos
          entrar em contato!
        </S.Description>
      </S.Header>

      <OrcamentoForm />
    </S.Section>
  )
}

export default Home
