import { QrCode, DesktopComputer, Code } from '../svgs'

import * as S from './cards.styles'

const cards = [
  {
    title: 'UX/UI Design',
    description: `Projeto focado somente na estruturação da experiência e interface do usuário, sem a utilização da programação.`,
    icon: <QrCode />,
  },
  {
    title: 'Website',
    description: `Site completo executado para ter uma experiência e interface completa favorecendo a usabilidade do público alvo.`,
    icon: <DesktopComputer />,
  },
  {
    title: 'Programação',
    description: `Escrevemos linhas de código para estruturar a interface e dar vida ao fluxo completo do seu layout.`,
    icon: <Code />,
  },
]

function Cards() {
  return (
    <S.Cards>
      {cards.map(card => (
        <S.Card key={card.title} className={card.title === 'Website' && 'emphasis'}>
          <S.Icon>{card.icon}</S.Icon>

          <S.Subtitle>{card.title}</S.Subtitle>
          <S.Description>{card.description}</S.Description>
          <S.TextButton>Saiba mais</S.TextButton>
        </S.Card>
      ))}
    </S.Cards>
  )
}

export default Cards
