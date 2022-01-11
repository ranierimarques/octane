import { ContactLinks, Details, Form, SocialLinks } from '..'

import * as S from './contact-form.styles'

function ContactForm() {
  return (
    <S.ContactForm>
      <S.Left>
        <S.Header>
          <S.Subtitle>Formulário de contato</S.Subtitle>
          <S.Description>
            Preencha o formulário e nossa equipe entrará em contato com você em até 24
            horas.
          </S.Description>
        </S.Header>

        <ContactLinks />

        <SocialLinks />

        <Details />
      </S.Left>

      <S.Right>
        <Form />
      </S.Right>
    </S.ContactForm>
  )
}

export default ContactForm
