import Head from 'next/head'

import { Home, WhatIsOctane } from '@/layout/sobre-nos'

function SobreNos() {
  return (
    <main>
      <Head>
        <title>Octane | A inovação começa aqui!</title>
      </Head>

      <Home />
      <WhatIsOctane />
    </main>
  )
}

export default SobreNos
