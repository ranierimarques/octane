import { Pad, References, TemplateLarge } from '../svgs'

import * as S from './tab-panel.styles'

function TabPanel() {
  return (
    <S.TabPanel role="tabpanel">
      <S.Content>
        <TemplateLarge />
        <S.Subtitle>Referências</S.Subtitle>
        <S.Description>
          Essa é uma etapa importante para o avanço do projeto, nela conseguimos estudar
          as tendências do mercado atual e inovar na hora de executar o seu projeto.
        </S.Description>
      </S.Content>

      <S.SvgWrapper>
        <Pad />
        <References className={S.Svg} />
      </S.SvgWrapper>
    </S.TabPanel>
  )
}

export default TabPanel
