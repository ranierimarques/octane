import { Input, Label, Radio } from 'src/common/form'

import * as S from './step-one.styles'

function StepOne() {
  return (
    <S.Form>
      <S.Container>
        <Label htmlFor="name" smallMargin>
          Como podemos te chamar?
        </Label>
        <Label htmlFor="name" description>
          Pode ser seu nome ou algum apelido.
        </Label>
        <Input id="name" type="text" autoComplete="name">
          Seu nome
        </Input>
      </S.Container>

      <S.Container>
        <Label htmlFor="companyName" smallMargin>
          Qual é o nome da empresa que você representa?
        </Label>
        <Label htmlFor="companyName" description>
          Se possível também informe o cargo que ocupa.
        </Label>
        <S.DoubleInput>
          <Input id="companyName" type="text" autoComplete="organization">
            Nome da empresa
          </Input>
          <Input id="companyTitle" type="text" autoComplete="organization-title">
            Cargo
          </Input>
        </S.DoubleInput>
      </S.Container>

      <S.Container>
        <Label htmlFor="howGotHere" smallMargin>
          Como você chegou à Octane?
        </Label>
        <Label htmlFor="howGotHere" description>
          Conte-nós como conheceu a nossa equipe.
        </Label>
        <Radio
          name="howGotHere"
          options={['Redes sociais', 'Indicação', 'Google', 'Outro']}
          vertical
        />
        <Input id="howGotHere" hidden disabled>
          Digite aqui
        </Input>
      </S.Container>

      <S.Container>
        <Label htmlFor="contactForm" smallMargin>
          Como você gostaria que entrássemos em contato?
        </Label>
        <Label htmlFor="contactForm" description>
          Selecione a melhor forma de entrarmos em contato.
        </Label>
        <Radio name="contactForm" options={['E-mail', 'WhatsApp']} />
        <Input id="contactForm" disabled>
          Selecione uma opção
        </Input>
      </S.Container>
    </S.Form>
  )
}

export default StepOne
