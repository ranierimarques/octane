import { ContactForm } from '.'

import * as S from './home.styles'

function Home() {
  return (
    <S.Section>
      <S.Header data-aos="fade-up">
        <S.Hat>CONTATO</S.Hat>
        <S.Title>Restou alguma dúvida?</S.Title>
        <S.Description>
          Utilize o formulário abaixo para entrar em contato conosco!
        </S.Description>
      </S.Header>

      <ContactForm />
    </S.Section>
  )
}

export default Home
