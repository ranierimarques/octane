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

const panelList = {
  Briefing: {
    largeIcon: <ClipboardLarge />,
    subtitle: 'Briefing',
    description: `A primeira etapa para darmos início ao projeto é o formulário de Briefing, nessa parte recolhemos todas as informações necessárias da sua empresa e elaboramos os próximos passos.`,
    illustration: <Briefing className={S.Briefing} />,
  },
  Referências: {
    largeIcon: <TemplateLarge />,
    subtitle: 'Referências',
    description: `Essa é uma etapa importante para o avanço do projeto, nela conseguimos estudar as tendências do mercado atual e inovar na hora de executar o seu projeto.`,
    illustration: <References className={S.References} />,
  },
  'Ux/Ui': {
    largeIcon: <QrCodeLarge />,
    subtitle: 'Ux/Ui',
    description: `Desde o inicio pensamos em cada detalhe da usabilidade do seu projeto para que você e seus clientes tenham total segurança para prosseguir em cada processo que estão executando.`,
    illustration: <UiUx className={S.UiUx} />,
  },
  Programação: {
    largeIcon: <CodeLarge />,
    subtitle: 'Programação',
    description: `Essa é uma etapa importante para o avanço do projeto, nela conseguimos estudar as tendências do mercado atual e inovar na hora de executar o seu projeto.`,
    illustration: <Programming className={S.Programming} />,
  },
  Finalização: {
    largeIcon: <CloudLarge />,
    subtitle: 'Finalização',
    description: `Na última etapa finalizamos todos os arquivos e procedimentos para que você receba corretamente tudo que foi trabalhado durante os dias de desenvolvimento.`,
    illustration: <Completion className={S.Completion} />,
  },
}

function TabPanel({ tabActive }) {
  const { largeIcon, subtitle, description, illustration } = panelList[tabActive]

  return (
    <S.TabPanel role="tabpanel">
      <S.Content data-aos="zoom-in" data-aos-duration="350">
        {largeIcon}
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Description>{description}</S.Description>
      </S.Content>

      <S.SvgWrapper data-aos="zoom-in" data-aos-duration="350">
        <Pad />
        {illustration}
      </S.SvgWrapper>
    </S.TabPanel>
  )
}

export default TabPanel
