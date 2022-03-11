import { useForm } from '@/contexts'
import { formatterBudget } from 'src/common/slider/utils'
import * as S from './clipboard-informations.styles'

function ClipboardInformations() {
  const { state } = useForm()

  const budgetFormatted = formatterBudget(state.data.budget)

  const texts = [
    { id: 1, title: 'Serviço selecionado', description: state.data.service },
    { id: 2, title: 'Orçamento', description: `R$ ${budgetFormatted}` },
    { id: 3, title: 'Prazo', description: state.data.deadline },
    { id: 4, title: 'Tamanho da empresa', description: state.data.companyCategory },
    { id: 5, title: 'Como vamos entrar em contato', description: state.data.contact },
  ]

  const auxTexts = [
    { id: 1, title: state.data.name, description: state.data.companyTitle },
    { id: 2, title: state.data.companyName, description: state.data.companyWebsite },
  ]

  return (
    <S.ClipboardInformation>
      <S.Auxiliary>
        {auxTexts.map(text => (
          <S.AuxTexts key={text.id}>
            <S.AuxTitle>{text.title}</S.AuxTitle>
            <S.AuxDescription>{text.description}</S.AuxDescription>
          </S.AuxTexts>
        ))}
      </S.Auxiliary>

      <S.Main>
        {texts.map(text => (
          <S.Texts key={text.id}>
            <S.Title>{text.title}</S.Title>
            <S.Description>{text.description}</S.Description>
          </S.Texts>
        ))}
      </S.Main>
    </S.ClipboardInformation>
  )
}

export default ClipboardInformations
