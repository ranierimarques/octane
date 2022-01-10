import { ContactLinks, SocialLinks } from '..'

import * as S from './contact-form.styles'

function ContactForm() {
  return (
    <div>
      <div>
        <header>
          <h3>Formulário de contato</h3>
          <p>
            Preencha o formulário e nossa equipe entrará em contato com você em até 24
            horas.
          </p>
        </header>

        <ContactLinks />

        <SocialLinks />
      </div>

      <div>
        <form></form>
      </div>
    </div>
  )
}

export default ContactForm
