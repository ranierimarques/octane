import { Clipboard, Template, QrCode, Code, Cloud } from '../svgs'

import * as S from './tab-list.styles'

const tabs = [
  { icon: <Clipboard className={S.Svg} />, text: 'Briefing' },
  { icon: <Template className={S.Svg} />, text: 'Referências' },
  { icon: <QrCode className={S.Svg} />, text: 'Ux/Ui' },
  { icon: <Code className={S.Svg} />, text: 'Programação' },
  { icon: <Cloud className={S.Svg} />, text: 'Finalização' },
]

function Tablist() {
  return (
    <S.TabList role="tablist">
      {tabs.map(tab => (
        <S.Tab key={tab.text} role="tab" aria-selected="false">
          {tab.icon}
          {tab.text}
        </S.Tab>
      ))}
    </S.TabList>
  )
}

export default Tablist
