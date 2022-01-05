import Head from 'next/head'

import {
  Home,
  WebsiteImportance,
  OurServices,
  Methodologies,
  LastCall,
} from 'src/layout/servicos'

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
