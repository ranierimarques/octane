import { Analytics, CheckMark, CodeSlash, PenTool } from '../svgs'

import * as S from './tab-list.styles'

const tabs = [
  { icon: <Analytics className={S.Svg} />, text: 'Análise' },
  { icon: <PenTool className={S.Svg} />, text: 'Design' },
  { icon: <CodeSlash className={S.Svg} />, text: 'Coding' },
  { icon: <CheckMark className={S.Svg} />, text: 'Entrega' },
]

function Tablist() {
  return (
    <S.TabList role="tablist">
      {tabs.map(tab => (
        <S.Tab key={tab.text} role="tab" aria-selected="false">
          <S.Text>
            {tab.icon}
            {tab.text}
          </S.Text>
        </S.Tab>
      ))}
    </S.TabList>
  )
}

export default Tablist
