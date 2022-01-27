import { InstagramIcon, LinkedinIcon, BehanceIcon } from '../svgs'

import * as S from './social-links.styles'

const social = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/octane.std/',
    icon: <InstagramIcon />,
    delay: '500',
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/company/octane-studio/',
    icon: <LinkedinIcon />,
    delay: '600',
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/octanestudio',
    icon: <BehanceIcon />,
    delay: '700',
  },
]

function SocialLinks() {
  return (
    <S.Container>
      {social.map((social, index) => (
        <li
          key={index}
          aria-label={social.label}
          data-aos="fade-up"
          data-aos-offset="-400"
          data-aos-delay={social.delay}
        >
          <S.Link href={social.href} target="_blank" rel="noreferrer noopener">
            {social.icon}
          </S.Link>
        </li>
      ))}
    </S.Container>
  )
}

export default SocialLinks
