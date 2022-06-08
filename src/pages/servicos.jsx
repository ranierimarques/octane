import { Home, Methodologies, OurServices, WebsiteImportance } from '@/layout/servicos'
import { LastCall } from '@/shared'
import Head from 'next/head'

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
