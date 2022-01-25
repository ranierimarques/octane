import { Analytics, CheckMark, CodeSlash, PenTool } from '../svgs'

import * as S from './tab-list.styles'

const tabs = [
  { icon: <Analytics className={S.Svg} />, text: 'Análise', delay: '100' },
  { icon: <PenTool className={S.Svg} />, text: 'Design', delay: '200' },
  { icon: <CodeSlash className={S.Svg} />, text: 'Coding', delay: '300' },
  { icon: <CheckMark className={S.Svg} />, text: 'Entrega', delay: '400' },
]

function Tablist({ state: { tabActive, setTabActive } }) {
  return (
    <S.TabList role="tablist">
      {tabs.map(tab => (
        <S.Tab
          key={tab.text}
          role="tab"
          aria-selected={tab.text === tabActive}
          isActive={tab.text === tabActive}
          onClick={() => setTabActive(tab.text)}
          data-aos="fade-up"
          data-aos-delay={tab.delay}
        >
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
