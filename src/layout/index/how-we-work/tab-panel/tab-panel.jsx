import { Modal } from '..'

import { StretchedArrow } from '../svgs'

import * as S from './tab-panel.styles'

const panelsList = {
  Análise: [
    {
      number: '01',
      subtitle: 'Análise do Briefing',
      description: 'Verificamos todos os principais pontos do seu Briefing e Orçamento.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
    },
    {
      number: '02',
      subtitle: 'Pesquisa de Mercado',
      description: 'Organizamos informações relevantes sobre o seu campo de atuação.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
    },
    {
      number: '03',
      subtitle: 'Idealização do Projeto',
      description: 'Idealizamos toda a estrutura do projeto por meio do Design Thinking.',
      arrow: false,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
    },
  ],
  Design: [
    {
      number: '04',
      subtitle: 'Análise do Briefing',
      description: 'Verificamos todos os principais pontos do seu Briefing e Orçamento.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
    },
    {
      number: '05',
      subtitle: 'Pesquisa de Mercado',
      description: 'Organizamos informações relevantes sobre o seu campo de atuação.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
    },
    {
      number: '06',
      subtitle: 'Idealização do Projeto',
      description: 'Idealizamos toda a estrutura do projeto por meio do Design Thinking.',
      arrow: false,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
    },
  ],
  Coding: [
    {
      number: '07',
      subtitle: 'Análise do Briefing',
      description: 'Verificamos todos os principais pontos do seu Briefing e Orçamento.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
    },
    {
      number: '08',
      subtitle: 'Pesquisa de Mercado',
      description: 'Organizamos informações relevantes sobre o seu campo de atuação.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
    },
    {
      number: '09',
      subtitle: 'Idealização do Projeto',
      description: 'Idealizamos toda a estrutura do projeto por meio do Design Thinking.',
      arrow: false,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
    },
  ],
  Entrega: [
    {
      number: '10',
      subtitle: 'Análise do Briefing',
      description: 'Verificamos todos os principais pontos do seu Briefing e Orçamento.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
    },
    {
      number: '11',
      subtitle: 'Pesquisa de Mercado',
      description: 'Organizamos informações relevantes sobre o seu campo de atuação.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
    },
    {
      number: '12',
      subtitle: 'Idealização do Projeto',
      description: 'Idealizamos toda a estrutura do projeto por meio do Design Thinking.',
      arrow: false,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
    },
  ],
}

function TabPanel({ tabActive }) {
  const panels = panelsList[tabActive]

  return (
    <S.TabPanel role="tabpanel" data-aos="fade-right">
      {panels.map(panel => (
        <S.Panel key={panel.number}>
          <S.Localization>
            <S.Number>{panel.number}</S.Number>
            {panel.arrow ? <StretchedArrow /> : null}
          </S.Localization>

          <S.Texts>
            <S.Subtitle>{panel.subtitle}</S.Subtitle>
            <S.Description>{panel.description}</S.Description>
            <Modal infos={panel} />
          </S.Texts>
        </S.Panel>
      ))}
    </S.TabPanel>
  )
}

export default TabPanel
