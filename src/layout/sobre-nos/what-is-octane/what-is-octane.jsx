import { Illustration } from './svgs'

import * as S from './what-is-octane.styles'

function WhatIsOctane() {
  return (
    <S.Section>
      <S.Wrapper>
        <div data-aos="fade-right">
          <Illustration />
        </div>

        <div data-aos="fade-left">
          <S.Hat>SOBRE NÓS</S.Hat>
          <S.Title>Mas afinal, o que é Octane?</S.Title>
          <S.Description>
            A Octane é um estúdio de inovação criado por um grupo de jovens empreendedores
            apaixonados pelo desenvolvimento empresarial.
            <br /> <br />
            Temos a convicção da responsabilidade que temos em cada projeto e a certeza
            que fazemos cada processo com a verdadeira paixão de um inovador.
            <br /> <br />
            Nossa especialidade é fornecer o alto padrão e tecnologia de ponta para
            obtermos produtos finais excelentes para atingir os seus objetivos e encantar
            o seu público de interesse.
          </S.Description>
        </div>
      </S.Wrapper>
    </S.Section>
  )
}

export default WhatIsOctane
