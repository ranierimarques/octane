import { useRef } from 'react'

import { Modal } from '..'

import { ApproveUser, PenTool, Bolt } from '../svgs'

import * as S from './cards.styles'

const cards = [
  {
    title: 'Experiência do usuário',
    description: `Entendemos que o Design acima de tudo precisa ser estratégico e eficiente.`,
    icon: <ApproveUser />,
    showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero viverra aliquam sagittis odio. Tempor ullamcorper aenean orci ipsum fringilla gravida est. Ultricies rhoncus, tempus faucibus enim, ultricies. Nunc, accumsan ut tincidunt sed.`,
    delay: '100',
  },
  {
    title: 'Design de interfaces',
    description: `Criamos produtos digitais que transmitem valor e atendem às necessidades da sua marca.`,
    icon: <PenTool />,
    showMore: 'Em breve mais informações aqui.',
    delay: '200',
  },
  {
    title: 'Alta performance',
    description: `Utilizamos tecnologias de ponta em nossos projetos para uma experiência otimizada e fluida.`,
    icon: <Bolt />,
    showMore: 'Em breve mais informações aqui.',
    delay: '300',
  },
]

function Card({ card }) {
  const modalRef = useRef(null)

  function handleOpenModal() {
    modalRef.current.openModal()
  }

  return (
    <S.Card data-aos="fade-up" data-aos-delay={card.delay}>
      <S.Icon>{card.icon}</S.Icon>

      <S.Subtitle>{card.title}</S.Subtitle>
      <S.Description>{card.description}</S.Description>
      <S.TextButton onClick={handleOpenModal}>Saiba mais</S.TextButton>
      <Modal infos={card} ref={modalRef} />
    </S.Card>
  )
}

function Cards() {
  return (
    <S.Cards>
      {cards.map(card => {
        return <Card key={card.title} card={card} />
      })}
    </S.Cards>
  )
}

export default Cards
