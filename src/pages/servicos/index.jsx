import Head from 'next/head'

import Home from 'src/layout/services/home'
import WebsiteImportance from 'src/layout/services/websiteImportance'
import OurServices from 'src/layout/services/ourServices'
import Methodologies from 'src/layout/services/methodologies'
import LastCall from 'src/layout/services/lastCall'

export default function Index() {
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
