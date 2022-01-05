import Head from 'next/head'

import { Home, WhatIsOctane } from 'src/layout/sobre-nos'

function SobreNos() {
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

export default SobreNos
