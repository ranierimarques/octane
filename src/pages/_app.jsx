import { useEffect } from 'react'
import AOS from 'aos'

import { Navbar, Footer, DevelopmentOptions } from 'src/common'

import 'aos/dist/aos.css'
import '../styles/global-styles.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      duration: 250,
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <DevelopmentOptions />
      <Footer />
    </>
  )
}

export default MyApp
