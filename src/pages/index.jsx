import Head from 'next/head'

import { Home, WhyChooseOctane, HowWeWork, Faq, LastCall } from 'src/layout/index'

function Index() {
  return (
    <>
      <Head>
        <title>Octane | A inovação começa aqui!</title>
      </Head>

      <Home />
      <WhyChooseOctane />
      <HowWeWork />
      <Faq />
      <LastCall />
    </>
  )
}

export default Index
