import { Question } from '.'

import * as S from './faq.styles'

const questions = [
  {
    number: '1',
    question: 'O que é preciso para contratar vocês?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nisi consequat, viverra eget diam volutpat eu. Amet cursus urna, nulla adipiscing fringilla commodo. Mauris pulvinar donec morbi malesuada. Eu egestas viverra sed ac a varius eu varius mus. Nunc scelerisque eu lorem sed. Adipiscing dui, fermentum mi vitae egestas auctor. Lectus sit ullamcorper scelerisque vitae velit maecenas amet pellentesque. Mauris turpis dignissim pulvinar nibh suscipit.`,
  },
  {
    number: '2',
    question: 'Como faço para contratar vocês?',
    answer: 'Lorem ipsum dolor sit',
  },
  {
    number: '3',
    question: 'Como vocês agregam valor ao meu negócio?',
    answer: 'Lorem ipsum dolor sit',
  },
  {
    number: '4',
    question: 'Vocês são confiáveis?',
    answer: 'Lorem ipsum dolor sit',
  },
  {
    number: '5',
    question: 'Como posso trabalhar na Octane?',
    answer: 'Lorem ipsum dolor sit',
  },
]

function Faq() {
  return (
    <S.Section>
      <S.Wrapper>
        <S.Header>
          <S.Title>
            Perguntas mais <br /> frequentes <S.Shape2d />
          </S.Title>

          <S.Texts>
            <S.Strong>Restou alguma dúvida?</S.Strong>
            Entre em contato com nosso time
            <S.TextButton>Entrar em contato</S.TextButton>
          </S.Texts>
        </S.Header>

        {questions.map(question => (
          <Question key={question.number} question={question} />
        ))}
      </S.Wrapper>
    </S.Section>
  )
}

export default Faq
