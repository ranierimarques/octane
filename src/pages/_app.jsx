import Navbar from '../components/common/navbar'

import '../styles/GlobalFonts.css'
import '../styles/GlobalStyle.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
