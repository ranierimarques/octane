import { Footer, Navbar } from '@/common'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Head from 'next/head'
import { useEffect } from 'react'
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#121212" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#121212" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#121212" />
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
