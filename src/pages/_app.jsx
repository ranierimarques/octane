import { Navbar, Footer } from 'src/common'

import globalStyles from '../styles/global-styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {globalStyles}
      </style>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
