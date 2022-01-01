import Head from 'next/head'

import Home from 'src/layout/aboutUs/home'
import WhatIsOctane from 'src/layout/aboutUs/whatIsOctane'

export default function Index() {
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
