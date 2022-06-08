import { Email, Location, Phone } from '../svgs'
import * as S from './contact-links.styles'

const contacts = [
  {
    text: '+55 85 9 9917-3750',
    icon: <Phone />,
    href: 'tel:+55-85-3482-6566',
    target: '_self',
    delay: '200',
  },
  {
    text: 'octane@contato.com',
    icon: <Email />,
    href: 'mailto:octane@contato.com',
    target: '_self',
    delay: '300',
  },
  {
    text: 'Fortaleza, Ceará',
    icon: <Location />,
    href: 'https://goo.gl/maps/zJg6hULiZMndJ9jUA',
    target: '_blank',
    delay: '400',
  },
]

function ContactLinks() {
  return (
    <S.ContactLinks>
      {contacts.map(contact => (
        <li
          key={contact.text}
          data-aos="fade-right"
          data-aos-offset="-200"
          data-aos-delay={contact.delay}
        >
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
