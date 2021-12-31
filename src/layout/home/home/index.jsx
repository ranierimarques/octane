import Image from 'next/image'
import Link from 'next/link'

import homeIllustrationImg from 'public/images/home-illustration.png'
import ArrowDownSvg from 'public/svg/arrow-down'
import OctaneGhostSvg from 'public/svg/octane-ghost'

import styles from './styles.module.scss'

function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.main}>
        <div className={styles.hat}>
          <OctaneGhostSvg />
          <span>Boas vindas à Octane</span>
        </div>
        <h1>Construindo o futuro por meio do Design e da Programação</h1>
        <h2>
          Somos um estúdio brasileiro que constrói sites modernos, escaláveis e rápidos.
        </h2>
        <div className={styles.buttons}>
          <Link href="/orcamento" passHref>
            <button className={styles.primaryButton}>
              <a draggable="false">Vamos fazer um projeto juntos</a>
            </button>
          </Link>
          <button
            className={styles.secondaryButton}
            onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
          >
            Descobrir <ArrowDownSvg />
          </button>
        </div>
      </div>

      <div className={styles.image1}>
        <Image src={homeIllustrationImg} alt="Ilustração Inicio Octane" priority />
      </div>
    </section>
  )
}

export default Home
