import { useRef } from 'react'

import * as S from './question.style'

function Question({ question }) {
  const itemRef = useRef(null)

  function showAnswer() {
    itemRef.current.classList.toggle('open')
  }

  return (
    <S.Item key={question.number} ref={itemRef} data-aos="fade-up">
      <S.Button className={question.number === '1' ? 'first' : ''} onClick={showAnswer}>
        <S.Number>{question.number}</S.Number>
        <S.Question>{question.question}</S.Question>

        <S.ArrowDown />
      </S.Button>

      <S.Answer>{question.answer}</S.Answer>
    </S.Item>
  )
}

export default Question
