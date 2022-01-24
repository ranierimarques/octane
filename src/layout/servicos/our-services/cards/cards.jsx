import { Modal } from '..'

import { QrCode, DesktopComputer, Code } from '../svgs'

import * as S from './cards.styles'

const cards = [
  {
    title: 'UX/UI Design',
    description: `Projeto focado somente na estruturação da experiência e interface do usuário, sem a utilização da programação.`,
    icon: <QrCode />,
    showMore: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero viverra aliquam sagittis odio. Tempor ullamcorper aenean orci ipsum fringilla gravida est. Ultricies rhoncus, tempus faucibus enim, ultricies. Nunc, accumsan ut tincidunt sed.`,
  },
  {
    title: 'Website',
    description: `Site completo executado para ter uma experiência e interface completa favorecendo a usabilidade do público alvo.`,
    icon: <DesktopComputer />,
    showMore: 'Em breve mais informações aqui.',
  },
  {
    title: 'Programação',
    description: `Escrevemos linhas de código para estruturar a interface e dar vida ao fluxo completo do seu layout.`,
    icon: <Code />,
    showMore: 'Em breve mais informações aqui.',
  },
]

function Cards() {
  return (
    <S.Cards>
      {cards.map(card => (
        <S.Card key={card.title} className={card.title === 'Website' && 'emphasis'}>
          {card.icon}
          <S.Subtitle>{card.title}</S.Subtitle>
          <S.Divider />
          <S.Description>{card.description}</S.Description>
          <Modal infos={card} />
        </S.Card>
      ))}
    </S.Cards>
  )
}

export default Cards
