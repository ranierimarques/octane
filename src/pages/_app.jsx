import Head from 'next/head'
import { useEffect } from 'react'
import AOS from 'aos'

import { Navbar, Footer } from '@/common'

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
      <Head>
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
