import Head from 'next/head'

import { Home, WebsiteImportance, OurServices, Methodologies } from 'src/layout/servicos'
import { LastCall } from 'src/shared'

function Servicos() {
  return (
    <>
      <Head>
        <title>Octane | A inovação começa aqui!</title>
      </Head>

      <Home />
      <WebsiteImportance />
      <OurServices />
      <Methodologies />
      <LastCall />
    </>
  )
}

export default Servicos
