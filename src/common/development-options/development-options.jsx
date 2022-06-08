import { useEffect, useState } from 'react'
import * as S from './development-options.styles'

function DevelopmentOptions() {
  const [universal, setUniversal] = useState()

  useEffect(() => {
    document.querySelector('head').appendChild(document.createElement('style'))

    let styleSheet = document.styleSheets[document.styleSheets.length - 1]
    styleSheet.insertRule('* {}', 0)

    let universal = styleSheet.cssRules[0]

    setUniversal(universal)
  }, [])

  function changeFont() {
    const font = universal.style.fontFamily

    if (font == '"Segoe UI"') {
      universal.style.fontFamily = 'Inter'
      return
    }

    universal.style.fontFamily = 'Segoe UI'
  }

  return <S.Button onClick={changeFont}>Mudar fonte</S.Button>
}

export default DevelopmentOptions
