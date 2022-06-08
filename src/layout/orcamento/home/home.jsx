import { FormContext } from '@/contexts'
import { Form } from '.'
import * as S from './home.styles'
import { useFormData } from './hooks'

function Home() {
  const value = useFormData()

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

      <FormContext.Provider value={value}>
        <Form />
      </FormContext.Provider>
    </S.Section>
  )
}

export default Home
