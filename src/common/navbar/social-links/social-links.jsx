import * as S from './social-links.styles'

const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/octane-studio/' },
  { name: 'Instagram', href: 'https://www.instagram.com/octane.std/' },
  { name: 'Behance', href: 'https://www.behance.net/octanestudio' },
]

function SocialLinks() {
  return (
    <S.SocialLinks>
      {socials.map(social => (
        <li key={social.name}>
          <S.Link href={social.href} target="_blank" rel="noreferrer noopener">
            {social.name}
          </S.Link>
        </li>
      ))}
    </S.SocialLinks>
  )
}

export default SocialLinks
