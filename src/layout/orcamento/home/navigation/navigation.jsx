import { useForm } from '@/resources/contexts'
import { CheckMark } from '../svgs'
import * as S from './navigation.styles'

const tabs = [
  {
    id: 1,
    number: '01',
    title: 'DADOS PESSOAIS',
    subtitle: 'Informações de contato.',
    variant: 'first',
  },
  {
    id: 2,
    number: '02',
    title: 'PROJETO',
    subtitle: 'Informações do projeto.',
    variant: 'second',
  },
  {
    id: 3,
    number: '03',
    title: 'CONCLUSÃO',
    subtitle: 'Informações do investimento.',
    variant: 'third',
  },
]

function Navigation() {
  const { state, handleChangeStep } = useForm()

  return (
    <S.Container>
      {tabs.map(tab => {
        const activeStep = state.step === tab.id
        const finishedStep = state.step > tab.id

        return (
          <S.Tab
            key={tab.id}
            className={`${tab.variant} ${activeStep ? 'active' : ''}`}
            onClick={() => handleChangeStep(tab.id)}
          >
            <S.Content>
              <S.Indicator className={`${tab.variant} ${finishedStep ? 'finished' : ''}`}>
                {finishedStep ? <CheckMark /> : tab.number}
              </S.Indicator>

              <S.Texts>
                <S.Title isFinished={finishedStep}>{tab.title}</S.Title>
                {!finishedStep && <S.Subtitle>{tab.subtitle}</S.Subtitle>}
              </S.Texts>
            </S.Content>
          </S.Tab>
        )
      })}
    </S.Container>
  )
}

export default Navigation
