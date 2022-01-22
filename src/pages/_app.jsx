import { Navbar, Footer, DevelopmentOptions } from 'src/common'

import '../styles/global-styles.css'

function MyApp({ Component, pageProps }) {
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
