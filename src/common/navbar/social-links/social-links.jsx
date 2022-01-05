import * as S from './social-links.styles'

const social = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/octane-studio/' },
  { name: 'Instagram', href: 'https://www.instagram.com/octane.std/' },
  { name: 'Behance', href: 'https://www.behance.net/octanestudio' },
]

function SocialLinks() {
  return (
    <S.SocialLinks>
      {social.map(social => (
        <li key={social.name}>
          <a href={social.href} target="_blank" rel="noreferrer noopener">
            {social.name}
          </a>
        </li>
      ))}
    </S.SocialLinks>
  )
}

export default SocialLinks
