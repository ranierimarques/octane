import Head from 'next/head'

import { Home, WebsiteImportance, OurServices, Methodologies } from '@/layout/servicos'
import { LastCall } from '@/shared'

function Servicos() {
  return (
    <main>
      <Head>
        <title>Octane | A inovação começa aqui!</title>
      </Head>

      <Home />
      <WebsiteImportance />
      <OurServices />
      <Methodologies />
      <LastCall />
    </main>
  )
}

export default Servicos
