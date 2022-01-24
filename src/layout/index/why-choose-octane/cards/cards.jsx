import { Modal } from '..'

import { ApproveUser, PenTool, Bolt } from '../svgs'

import * as S from './cards.styles'

const cards = [
  {
    title: 'Experiência do usuário',
    description: `Entendemos que o Design acima de tudo precisa ser estratégico e eficiente.`,
    icon: <ApproveUser />,
    showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero viverra aliquam sagittis odio. Tempor ullamcorper aenean orci ipsum fringilla gravida est. Ultricies rhoncus, tempus faucibus enim, ultricies. Nunc, accumsan ut tincidunt sed.`,
  },
  {
    title: 'Design de interfaces',
    description: `Criamos produtos digitais que transmitem valor e atendem às necessidades da sua marca.`,
    icon: <PenTool />,
    showMore: 'Em breve mais informações aqui.',
  },
  {
    title: 'Alta performance',
    description: `Utilizamos tecnologias de ponta em nossos projetos para uma experiência otimizada e fluida.`,
    icon: <Bolt />,
    showMore: 'Em breve mais informações aqui.',
  },
]

function Cards() {
  return (
    <S.Cards>
      {cards.map(card => (
        <S.Card key={card.title}>
          <S.Icon>{card.icon}</S.Icon>

          <S.Subtitle>{card.title}</S.Subtitle>
          <S.Description>{card.description}</S.Description>
          <Modal infos={card} />
        </S.Card>
      ))}
    </S.Cards>
  )
}

export default Cards
