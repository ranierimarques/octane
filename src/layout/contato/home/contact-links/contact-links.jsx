import { Email, Location, Phone } from '../svgs'

import * as S from './contact-links.styles'

const contacts = [
  {
    text: '+55 85 9 9917-3750',
    icon: <Phone />,
    href: 'tel:+55-85-3482-6566',
    target: '_self',
  },
  {
    text: 'octane@contato.com',
    icon: <Email />,
    href: 'mailto:octane@contato.com',
    target: '_self',
  },
  {
    text: 'Fortaleza, Ceará',
    icon: <Location />,
    href: 'https://goo.gl/maps/zJg6hULiZMndJ9jUA',
    target: '_blank',
  },
]

function ContactLinks() {
  return (
    <S.ContactLinks>
      {contacts.map(contact => (
        <li key={contact.text}>
          <S.Link href={contact.href} target={contact.target} rel="noreferrer noopener">
            <i>{contact.icon}</i>
            {contact.text}
          </S.Link>
        </li>
      ))}
    </S.ContactLinks>
  )
}

export default ContactLinks
