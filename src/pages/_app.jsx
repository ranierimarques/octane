import { styled } from 'linaria/react'
import { useEffect, useState } from 'react'

export const Button = styled.button`
  position: relative;

  position: fixed;
  bottom: 20px;
  right: 20px;

  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  color: #fff;

  background: red;
  padding: 12px 24px;
  border-radius: 4px;

  cursor: pointer;

  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);

  z-index: 100;

  :active {
    opacity: 0.6;
  }

  &.activeFont div {
    position: absolute;
    top: -50px;
    left: 50%;

    transform: translate(-50%);

    line-height: 16px;
    font-weight: 700;
    white-space: nowrap;

    color: #fff;

    background: linear-gradient(to right, red, blue);
    padding: 12px 24px;
    border-radius: 4px;
  }
`

import { Navbar, Footer } from 'src/common'

import globalStyles from '../styles/global-styles'

function MyApp({ Component, pageProps }) {
  const [universal, setUniversal] = useState()
  const [font, setFont] = useState('')

  useEffect(() => {
    document.querySelector('head').appendChild(document.createElement('style'))

    let styleSheet = document.styleSheets[document.styleSheets.length - 1]
    styleSheet.insertRule("* { font-family: 'Inter'; }", 0)

    let universal = styleSheet.cssRules[0]

    setUniversal(universal)
  }, [])

  function changeFont() {
    const font = universal.style.fontFamily

    if (font == '"Segoe UI"') {
      universal.style.fontFamily = 'Inter'
      setFont('Inter')
      return
    }

    universal.style.fontFamily = 'Segoe UI'
    setFont('Segoe UI (Reserva)')
  }

  return (
    <>
      <style jsx global>
        {globalStyles}
      </style>
      <Navbar />
      <Component {...pageProps} />
      <Button onClick={changeFont} className="activeFont">
        Mudar fonte
        {font ? <div>{font}</div> : null}
      </Button>

      <Footer />
    </>
  )
}

export default MyApp
