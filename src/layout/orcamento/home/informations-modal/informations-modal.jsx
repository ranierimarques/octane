import { useState } from 'react'
import { FormControl } from 'src/common'
import { ProtectedFiles } from '../svgs'
import * as S from './informations-modal.styles'

const stepQuestions = {
  1: [
    { question: 'SEU NOME', answer: 'Samuel Lucas' },
    { question: 'NOME DA EMPRESA', answer: 'Octane' },
    { question: 'SEU CARGO', answer: 'Founder' },
    { question: 'COMO CONHECEU A OCTANE', answer: 'Indicação' },
    { question: 'FORMA DE ENTRAR EM CONTATO', answer: '+85 99917-3750' },
  ],
  2: [
    { question: 'Tamanho da empresa', answer: 'Pequena (10-50 Funcionários)' },
    { question: 'Serviço interessado', answer: 'Website' },
    {
      question: 'Descrição do projeto',
      answer: `Nosso objetivo inicial com o projeto é a captação de novos clientes e a divulgação do site através de tráfego pago.`,
    },
    { question: 'Website da empresa', answer: 'Ainda não possui' },
  ],
  3: [
    { question: 'Investimento', answer: 'R$ 4.500' },
    { question: 'Prazo', answer: '50 dias' },
  ],
}

const stepTitle = ['Dados pessoais', 'Projeto', 'Conclusão']

function InformationsModal() {
  const [step, setStep] = useState(1)

  const configs = {
    1: {
      element: 'button',
      text: 'Voltar',
      variant: 'text',
    },
    2: {
      element: 'button',
      text: step === 3 ? 'Concluir' : 'Próximo',
    },
  }

  function handlePrevStep() {
    if (step === 1) return
    setStep(oldStep => oldStep - 1)
  }

  function handleNextStep() {
    if (step === 3) return
    setStep(oldStep => oldStep + 1)
  }

  return (
    <S.Modal>
      <S.Header>
        <ProtectedFiles />
        <S.Title>Verifique suas informações</S.Title>
      </S.Header>
      <S.Description>
        Confira abaixo as informações que você colocou em nosso formulário.
      </S.Description>

      <S.Informations>
        <S.Step>
          <S.Marker>{step}</S.Marker>
          <S.StepTitle>{stepTitle[step - 1]}</S.StepTitle>
        </S.Step>

        <S.Questions>
          {stepQuestions[step].map(question => (
            <S.Wrapper key={question.question}>
              <S.Question>{question.question}</S.Question>
              <S.Answer>{question.answer}</S.Answer>
            </S.Wrapper>
          ))}
        </S.Questions>
      </S.Informations>

      <S.Buttons>
        <FormControl onClick={handlePrevStep} config={configs[1]} />
        <FormControl onClick={handleNextStep} config={configs[2]} />
      </S.Buttons>

      <S.CloseMenu />
    </S.Modal>
  )
}

export default InformationsModal
