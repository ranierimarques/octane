import { useRef } from 'react'
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
      delay: '100',
    },
    {
      number: '02',
      subtitle: 'Pesquisa de Mercado',
      description: 'Organizamos informações relevantes sobre o seu campo de atuação.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
      delay: '200',
    },
    {
      number: '03',
      subtitle: 'Idealização do Projeto',
      description: 'Idealizamos toda a estrutura do projeto por meio do Design Thinking.',
      arrow: false,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
      delay: '300',
    },
  ],
  Design: [
    {
      number: '04',
      subtitle: 'Análise do Briefing',
      description: 'Verificamos todos os principais pontos do seu Briefing e Orçamento.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
      delay: '100',
    },
    {
      number: '05',
      subtitle: 'Pesquisa de Mercado',
      description: 'Organizamos informações relevantes sobre o seu campo de atuação.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
      delay: '200',
    },
    {
      number: '06',
      subtitle: 'Idealização do Projeto',
      description: 'Idealizamos toda a estrutura do projeto por meio do Design Thinking.',
      arrow: false,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
      delay: '300',
    },
  ],
  Coding: [
    {
      number: '07',
      subtitle: 'Análise do Briefing',
      description: 'Verificamos todos os principais pontos do seu Briefing e Orçamento.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
      delay: '100',
    },
    {
      number: '08',
      subtitle: 'Pesquisa de Mercado',
      description: 'Organizamos informações relevantes sobre o seu campo de atuação.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
      delay: '200',
    },
    {
      number: '09',
      subtitle: 'Idealização do Projeto',
      description: 'Idealizamos toda a estrutura do projeto por meio do Design Thinking.',
      arrow: false,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
      delay: '300',
    },
  ],
  Entrega: [
    {
      number: '10',
      subtitle: 'Análise do Briefing',
      description: 'Verificamos todos os principais pontos do seu Briefing e Orçamento.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
      delay: '100',
    },
    {
      number: '11',
      subtitle: 'Pesquisa de Mercado',
      description: 'Organizamos informações relevantes sobre o seu campo de atuação.',
      arrow: true,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
      delay: '200',
    },
    {
      number: '12',
      subtitle: 'Idealização do Projeto',
      description: 'Idealizamos toda a estrutura do projeto por meio do Design Thinking.',
      arrow: false,
      showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in quam sem arcu sem. Sodales massa at vivamus orci, vitae proin. Aliquam eget consequat eget interdum donec a. Dolor in mattis facilisi fermentum. Elit dictumst interdum tincidunt molestie ornare adipiscing neque. Nisl, sapien diam purus scelerisque. `,
      delay: '300',
    },
  ],
}

function Panel({ panel }) {
  const modalRef = useRef(null)

  function handleOpenModal() {
    modalRef.current.openModal()
  }

  return (
    <S.Panel key={panel.number} data-aos="fade-right" data-aos-delay={panel.delay}>
      <S.Localization>
        <S.Number>{panel.number}</S.Number>
        {panel.arrow ? <StretchedArrow /> : null}
      </S.Localization>

      <S.Texts>
        <S.Subtitle>{panel.subtitle}</S.Subtitle>
        <S.Description>{panel.description}</S.Description>
        <S.TextButton onClick={handleOpenModal}>Saiba mais</S.TextButton>

        <Modal infos={panel} ref={modalRef} />
      </S.Texts>
    </S.Panel>
  )
}

function TabPanel({ tabActive }) {
  const panels = panelsList[tabActive]

  return (
    <S.TabPanel role="tabpanel" data-aos="fade-right">
      {panels.map(panel => (
        <Panel key={panel.number} panel={panel} />
      ))}
    </S.TabPanel>
  )
}

export default TabPanel
