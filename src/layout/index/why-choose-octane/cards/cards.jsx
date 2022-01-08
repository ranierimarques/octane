import { ApproveUser, PenTool, Bolt } from '../svgs'

import * as S from './cards.styles'

const cards = [
  {
    title: 'Experiência do usuário',
    description: `Entendemos que o Design acima de tudo precisa ser estratégico e eficiente.`,
    icon: <ApproveUser />,
  },
  {
    title: 'Design de interfaces',
    description: `Criamos produtos digitais que transmitem valor e atendem às necessidades da sua marca.`,
    icon: <PenTool />,
  },
  {
    title: 'Alta performance',
    description: `Utilizamos tecnologias de ponta em nossos projetos para uma experiência otimizada e fluida.`,
    icon: <Bolt />,
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
          <S.TextButton>Saiba mais</S.TextButton>
        </S.Card>
      ))}
    </S.Cards>
  )
}

export default Cards
