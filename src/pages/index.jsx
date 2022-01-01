import Head from 'next/head'
import { styled } from 'linaria/react'

import Faq from 'src/layout/home/faq'
import Home from 'src/layout/home/home'
import HowWeWork from 'src/layout/home/howWeWork'
import LastCall from 'src/layout/home/lastCall'
import WhyChooseOctane from 'src/layout/home/whyChooseOctane'

const Title = styled.h1`
  color: red;
  line-height: 75px;

  * {
    top: calc(1+ 2);
  }
`

export default function Index() {
  return (
    <>
      <Head>
        <title>Octane | A inovação começa aqui!</title>
      </Head>
      <Title>Eae galera</Title>

      {/* <Home />
      <WhyChooseOctane />
      <HowWeWork />
      <Faq />
      <LastCall /> */}
    </>
  )
}
