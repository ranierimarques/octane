import * as S from './clipboard-informations.styles'

const texts = [
  { id: 1, title: 'Serviço selecionado', description: 'Projeto Web' },
  { id: 2, title: 'Orçamento', description: 'R$ 4.500' },
  { id: 3, title: 'Prazo', description: '50 dias' },
  { id: 4, title: 'Tamanho da empresa', description: 'Pequena (10-50 Funcionários)' },
  { id: 5, title: 'Como vamos entrar em contato', description: '+55 (85) 9 9917-3750' },
]

const auxTexts = [
  { id: 1, title: 'Ranieri', description: 'Co-founder' },
  { id: 2, title: 'Octane Studio', description: 'www.octane.com.br' },
]

function ClipboardInformations() {
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
