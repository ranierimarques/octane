import { InstagramIcon, LinkedinIcon, BehanceIcon } from 'public/svgs'

import * as S from './social-links.styles'

const social = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/octane.std/',
    icon: <InstagramIcon />,
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/company/octane-studio/',
    icon: <LinkedinIcon />,
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/octanestudio',
    icon: <BehanceIcon />,
  },
]

function SocialLinks() {
  return (
    <S.Container>
      {social.map((social, index) => (
        <li key={index} aria-label={social.label}>
          <S.Link href={social.href} target="_blank" rel="noreferrer noopener">
            {social.icon}
          </S.Link>
        </li>
      ))}
    </S.Container>
  )
}

export default SocialLinks
