import { Home, WhatIsOctane } from '@/layout/sobre-nos'
import Head from 'next/head'

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
