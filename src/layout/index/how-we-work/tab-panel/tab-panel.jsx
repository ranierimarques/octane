import { StretchedArrow } from '../svgs'

import * as S from './tab-panel.styles'

const panelsList = {
  Análise: [
    {
      number: '01',
      subtitle: 'Análise do Briefing',
      description: 'Verificamos todos os principais pontos do seu Briefing e Orçamento.',
      arrow: true,
    },
    {
      number: '02',
      subtitle: 'Pesquisa de Mercado',
      description: 'Organizamos informações relevantes sobre o seu campo de atuação.',
      arrow: true,
    },
    {
      number: '03',
      subtitle: 'Idealização do Projeto',
      description: 'Idealizamos toda a estrutura do projeto por meio do Design Thinking.',
      arrow: false,
    },
  ],
  Design: [
    {
      number: '04',
      subtitle: 'Análise do Briefing',
      description: 'Verificamos todos os principais pontos do seu Briefing e Orçamento.',
      arrow: true,
    },
    {
      number: '05',
      subtitle: 'Pesquisa de Mercado',
      description: 'Organizamos informações relevantes sobre o seu campo de atuação.',
      arrow: true,
    },
    {
      number: '06',
      subtitle: 'Idealização do Projeto',
      description: 'Idealizamos toda a estrutura do projeto por meio do Design Thinking.',
      arrow: false,
    },
  ],
  Coding: [
    {
      number: '07',
      subtitle: 'Análise do Briefing',
      description: 'Verificamos todos os principais pontos do seu Briefing e Orçamento.',
      arrow: true,
    },
    {
      number: '08',
      subtitle: 'Pesquisa de Mercado',
      description: 'Organizamos informações relevantes sobre o seu campo de atuação.',
      arrow: true,
    },
    {
      number: '09',
      subtitle: 'Idealização do Projeto',
      description: 'Idealizamos toda a estrutura do projeto por meio do Design Thinking.',
      arrow: false,
    },
  ],
  Entrega: [
    {
      number: '10',
      subtitle: 'Análise do Briefing',
      description: 'Verificamos todos os principais pontos do seu Briefing e Orçamento.',
      arrow: true,
    },
    {
      number: '11',
      subtitle: 'Pesquisa de Mercado',
      description: 'Organizamos informações relevantes sobre o seu campo de atuação.',
      arrow: true,
    },
    {
      number: '12',
      subtitle: 'Idealização do Projeto',
      description: 'Idealizamos toda a estrutura do projeto por meio do Design Thinking.',
      arrow: false,
    },
  ],
}

function TabPanel({ tabActive }) {
  const panels = panelsList[tabActive]

  return (
    <S.TabPanel role="tabpanel">
      {panels.map(panel => (
        <S.Panel key={panel.number}>
          <S.Localization>
            <S.Number>{panel.number}</S.Number>
            {panel.arrow ? <StretchedArrow /> : null}
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
