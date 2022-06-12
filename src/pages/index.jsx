import { MetaSEO } from '@/common'
import { Faq, Home, HowWeWork, WhyChooseOctane } from '@/layout/index'
import { LastCall } from '@/shared'

const meta = {
  title: 'Octane - Construção de sites modernos.',
  description: `Somos um estúdio de design e desenvolvimento de software. Realizamos entregas nacionais e internacionais, somos referência em design e código de qualidade.`,
  image: 'https://octanestd.com/sharing-cards/home.jpg',
  alt: `Design e desenvolvimento de sites modernos, escaláveis e rápidos.`,
  url: 'https://octanestd.com',
}

function Index() {
  return (
    <main>
      <MetaSEO
        title={meta.title}
        description={meta.description}
        image={meta.image}
        alt={meta.alt}
        url={meta.url}
      />

      <Home />
      <WhyChooseOctane />
      <HowWeWork />
      <Faq />
      <LastCall />
    </main>
  )
}

export default Index
