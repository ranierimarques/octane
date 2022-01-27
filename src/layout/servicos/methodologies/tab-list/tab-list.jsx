import { Clipboard, Template, QrCode, Code, Cloud } from '../svgs'

import * as S from './tab-list.styles'

const tabs = [
  { icon: <Clipboard className={S.Svg} />, text: 'Briefing', delay: '0' },
  { icon: <Template className={S.Svg} />, text: 'Referências', delay: '100' },
  { icon: <QrCode className={S.Svg} />, text: 'Ux/Ui', delay: '200' },
  { icon: <Code className={S.Svg} />, text: 'Programação', delay: '300' },
  { icon: <Cloud className={S.Svg} />, text: 'Finalização', delay: '400' },
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
          data-aos="fade-right"
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
