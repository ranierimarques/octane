import { Cards } from '.'

import * as S from './our-services.styles'

function OurServices() {
  return (
    <S.Section>
      <S.Content>
        <S.Header>
          <S.Title data-aos="fade-up">Conheça nossos serviços</S.Title>
          <S.Description data-aos="fade-left" data-aos-delay="100">
            Cada projeto tem o seu diferencial, por esse motivo precisamos estudar as
            necessidades do seu negócio para aplicar a melhor solução!
          </S.Description>
        </S.Header>

        <Cards />
      </S.Content>
    </S.Section>
  )
}

export default OurServices
