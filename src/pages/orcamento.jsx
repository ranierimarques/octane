import Head from 'next/head'

import { Home } from 'src/layout/orcamento'

function Orcamento() {
  return (
    <main>
      <Head>
        <title>Octane | A inovação começa aqui!</title>
      </Head>

      <Home />
    </main>
  )
}

export default Orcamento
