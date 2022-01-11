import { Navbar, Footer, DevelopmentOptions } from 'src/common'

import globalStyles from '../styles/global-styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {globalStyles}
      </style>
      <Navbar />
      <Component {...pageProps} />
      <DevelopmentOptions />
      <Footer />
    </>
  )
}

export default MyApp
