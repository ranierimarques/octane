import Head from 'next/head'

import Home from 'src/layout/about-us/home'
import WhatIsOctane from 'src/layout/about-us/whatIsOctane'

function Index() {
  return (
    <>
      <Head>
        <title>Octane | A inovação começa aqui!</title>
      </Head>
      <Home />
      <WhatIsOctane />
    </>
  )
}

export default Index
