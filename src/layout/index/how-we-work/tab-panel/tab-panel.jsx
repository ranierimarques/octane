import { StretchedArrow } from '../svgs'

import * as S from './tab-panel.styles'

const panels = [
  {
    number: '01',
    subtitle: 'Análise do Briefing',
    description: 'Verificamos todos os principais pontos do seu Briefing e Orçamento.',
  },
  {
    number: '02',
    subtitle: 'Pesquisa de Mercado',
    description: 'Organizamos informações relevantes sobre o seu campo de atuação.',
  },
  {
    number: '03',
    subtitle: 'Idealização do Projeto',
    description: 'Idealizamos toda a estrutura do projeto por meio do Design Thinking.',
  },
]

function TabPanel() {
  return (
    <S.TabPanel role="tabpanel">
      {panels.map(panel => (
        <S.Panel key={panel.number}>
          <S.Localization>
            <S.Number>{panel.number}</S.Number>
            <StretchedArrow />
          </S.Localization>

          <S.Texts>
            <S.Subtitle>{panel.subtitle}</S.Subtitle>
            <S.Description>{panel.description}</S.Description>
            <S.TextButton>Saiba mais</S.TextButton>
          </S.Texts>
        </S.Panel>
      ))}
    </S.TabPanel>
  )
}

export default TabPanel
