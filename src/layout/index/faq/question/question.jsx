import { useRef } from 'react'

import * as S from './question.style'

function Question({ question }) {
  const itemRef = useRef(null)
  const answerRef = useRef(null)
  const wrapperRef = useRef(null)

  function showAnswer() {
    const item = itemRef.current
    const wrapper = wrapperRef.current
    const answer = answerRef.current

    item.classList.toggle('open')
    const answerIsOpen = item.classList.contains('open')

    if (answerIsOpen) {
      wrapper.style.maxHeight = `${answer.scrollHeight}px`
      return
    }
    wrapper.style.maxHeight = '0px'
  }

  return (
    <S.Item key={question.number} ref={itemRef} data-aos="fade-up">
      <S.Button className={question.number === '1' ? 'first' : ''} onClick={showAnswer}>
        <S.Number>{question.number}</S.Number>
        <S.Question>{question.question}</S.Question>

        <S.ArrowDown />
      </S.Button>

      <S.Wrapper ref={wrapperRef}>
        <S.Answer ref={answerRef}>{question.answer}</S.Answer>
      </S.Wrapper>
    </S.Item>
  )
}

export default Question
