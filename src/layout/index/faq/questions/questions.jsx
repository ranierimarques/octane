import { ArrowDown } from '../svgs'

import * as S from './questions.style'

const questions = [
  {
    number: '1',
    question: 'O que é preciso para contratar vocês?',
    answer: 'Lorem ipsum dolor sit',
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

function Questions() {
  return (
    <>
      {questions.map(question => (
        <S.Item key={question.number}>
          <S.Button>
            <S.Number>{question.number}</S.Number>
            <S.Question>{question.question}</S.Question>

            <ArrowDown />
          </S.Button>

          <S.Answer>{question.answer}</S.Answer>
        </S.Item>
      ))}
    </>
  )
}

export default Questions
