import { InstagramIcon, LinkedinIcon, BehanceIcon } from 'public/svg'

import * as S from './social-links.styles'

const social = [
  { href: 'https://www.instagram.com/octane.std/', icon: <InstagramIcon /> },
  { href: 'https://www.linkedin.com/company/octane-studio/', icon: <LinkedinIcon /> },
  { href: 'https://www.behance.net/octanestudio', icon: <BehanceIcon /> },
]

function SocialLinks() {
  return (
    <div>
      {social.map((social, index) => (
        <a key={index} href={social.href} target="_blank" rel="noreferrer noopener">
          {social.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
