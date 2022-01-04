import { Navbar } from '../components/common/navbar'
import Footer from 'src/components/common/footer'

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
