import { Fragment } from 'react'

import {
  Briefing,
  ClipboardLarge,
  CloudLarge,
  CodeLarge,
  Completion,
  Pad,
  Programming,
  QrCodeLarge,
  References,
  TemplateLarge,
  UiUx,
} from '../svgs'

import * as S from './tab-panel.styles'

const panelList = [
  {
    largeIcon: <ClipboardLarge />,
    subtitle: 'Briefing',
    description: `A primeira etapa para darmos início ao projeto é o formulário de Briefing, nessa parte recolhemos todas as informações necessárias da sua empresa e elaboramos os próximos passos.`,
    illustration: <Briefing className={S.Briefing} />,
  },
  {
    largeIcon: <TemplateLarge />,
    subtitle: 'Referências',
    description: `Essa é uma etapa importante para o avanço do projeto, nela conseguimos estudar as tendências do mercado atual e inovar na hora de executar o seu projeto.`,
    illustration: <References className={S.References} />,
  },
  {
    largeIcon: <QrCodeLarge />,
    subtitle: 'Ux/Ui',
    description: `Desde o inicio pensamos em cada detalhe da usabilidade do seu projeto para que você e seus clientes tenham total segurança para prosseguir em cada processo que estão executando.`,
    illustration: <UiUx className={S.UiUx} />,
  },
  {
    largeIcon: <CodeLarge />,
    subtitle: 'Programação',
    description: `Essa é uma etapa importante para o avanço do projeto, nela conseguimos estudar as tendências do mercado atual e inovar na hora de executar o seu projeto.`,
    illustration: <Programming className={S.Programming} />,
  },
  {
    largeIcon: <CloudLarge />,
    subtitle: 'Finalização',
    description: `Na última etapa finalizamos todos os arquivos e procedimentos para que você receba corretamente tudo que foi trabalhado durante os dias de desenvolvimento.`,
    illustration: <Completion className={S.Completion} />,
  },
]

function TabPanel({ tabActive }) {
  return (
    <S.TabPanel role="tabpanel">
      {panelList.map(panel => {
        if (panel.subtitle !== tabActive) {
          return null
        }

        return (
          <Fragment key={panel.subtitle}>
            <S.Content data-aos="zoom-in" data-aos-duration="350">
              {panel.largeIcon}
              <S.Subtitle>{panel.subtitle}</S.Subtitle>
              <S.Description>{panel.description}</S.Description>
            </S.Content>

            <S.SvgWrapper data-aos="zoom-in" data-aos-duration="350">
              <Pad />
              {panel.illustration}
            </S.SvgWrapper>
          </Fragment>
        )
      })}
    </S.TabPanel>
  )
}

export default TabPanel
