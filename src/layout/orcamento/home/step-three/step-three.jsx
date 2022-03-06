import { Slider, Dropdown, Label } from '@/common'
import { ClipboardInformations } from '..'

import * as S from './step-three.styles'

function StepThree() {
  return (
    <S.Wrapper>
      <S.Form>
        <S.Container>
          <Label smallMargin>Quanto você está disposto a investir nesse projeto?</Label>
          <Label description>
            Utilize o slider para determinar o quanto você pretende investir.
          </Label>
          <Slider initial={4500} range={[3000, 6000, 12000, 24000]} step={50} />
        </S.Container>

        <S.Container>
          <Label htmlFor="deadline" smallMargin>
            Qual o prazo que temos para entregar o projeto?
          </Label>
          <Label htmlFor="deadline" description>
            O mínimo que trabalhamos é 30 dias (para projetos de onepage), para sites com
            mais de uma página, projetos só de front-end ou projetos somente design
            precisamos analisar cada caso.
          </Label>
          <Dropdown
            id="deadline"
            options={[
              '30 dias',
              '50 dias',
              '70 dias',
              '90 dias',
              'Prazo não é problema.',
              'Preciso o quanto antes.',
            ]}
          >
            Selecione uma opção
          </Dropdown>
        </S.Container>
      </S.Form>
      <ClipboardInformations />
    </S.Wrapper>
  )
}

export default StepThree
