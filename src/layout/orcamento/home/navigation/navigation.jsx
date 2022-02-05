import { CheckMark } from '../svgs'

import * as S from './navigation.styles'

const tabs = [
  {
    id: 1,
    indicator: '01',
    title: 'DADOS PESSOAIS',
    subtitle: 'Informações de contato.',
    variant: 'first',
  },
  {
    id: 2,
    indicator: '02',
    title: 'PROJETO',
    subtitle: 'Informações do projeto.',
    variant: 'second',
  },
  {
    id: 3,
    indicator: '03',
    title: 'CONCLUSÃO',
    subtitle: 'Informações do investimento.',
    variant: 'third',
  },
]

function Navigation({ step, setStep }) {
  const handleChangeStep = tabId => setStep(tabId)

  return (
    <S.Container>
      {tabs.map(tab => {
        const activeStep = step === tab.id
        const finishedStep = step > tab.id

        return (
          <S.Tab
            key={tab.id}
            className={`${tab.variant} ${activeStep ? 'active' : ''}`}
            onClick={() => handleChangeStep(tab.id)}
          >
            <S.Content>
              <S.Indicator className={`${tab.variant} ${finishedStep ? 'finished' : ''}`}>
                {finishedStep ? <CheckMark /> : tab.indicator}
              </S.Indicator>

              <S.Texts>
                <S.Title>{tab.title}</S.Title>
                <S.Subtitle>{tab.subtitle}</S.Subtitle>
              </S.Texts>
            </S.Content>
          </S.Tab>
        )
      })}
    </S.Container>
  )
}

export default Navigation
