import { Faq, Home, HowWeWork, WhyChooseOctane } from '@/layout/index'
import { LastCall } from '@/shared'
import Head from 'next/head'

function Index() {
  return (
    <main>
      <Head>
        <title>Octane - Construção de sites modernos.</title>
        <meta
          name="description"
          content="Somos um estúdio de design e desenvolvimento de software. Realizamos entregas nacionais e internacionais, somos referência em design e código de qualidade."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://octanestd.com" />
        <meta property="og:title" content="Octane - Construção de sites modernos." />
        <meta
          property="og:description"
          content="Somos um estúdio de design e desenvolvimento de software. Realizamos entregas nacionais e internacionais, somos referência em design e código de qualidade."
        />
        <meta
          property="og:image"
          content="https://octanestd.com/sharing-cards/home.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>

      <Home />
      <WhyChooseOctane />
      <HowWeWork />
      <Faq />
      <LastCall />
    </main>
  )
}

export default Index
