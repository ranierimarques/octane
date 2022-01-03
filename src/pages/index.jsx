import Head from 'next/head'

import Faq from 'src/layout/home/faq'
import Home from 'src/layout/home/home'
import HowWeWork from 'src/layout/home/howWeWork'
import LastCall from 'src/layout/home/lastCall'
import WhyChooseOctane from 'src/layout/home/whyChooseOctane'

export default function Index() {
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
