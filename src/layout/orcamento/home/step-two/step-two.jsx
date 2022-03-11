import { Dropdown, Input, Label, Radio } from '@/common'
import * as S from './step-two.styles'

function StepTwo() {
  return (
    <S.Form>
      <S.Container>
        <Label htmlFor="companyCategory" smallMargin>
          Em qual categoria a empresa se enquadra?
        </Label>
        <Label htmlFor="companyCategory" description>
          Escolha a opção correspondente a realidade da sua empresa.
        </Label>
        <Dropdown
          id="companyCategory"
          options={[
            'Profissional Liberal',
            'Micro (2-10 Funcionários)',
            'Pequena (10-50 Funcionários)',
            'Média (50-100 Funcionários)',
            'Grande (Mais de 100 Funcionários)',
          ]}
        >
          Selecione uma opção
        </Dropdown>
      </S.Container>

      <S.Container>
        <Label htmlFor="service" smallMargin>
          Qual dos serviços você está interessado(a)?
        </Label>
        <Label htmlFor="service" description>
          Escolha um dos serviços que oferecemos.
        </Label>
        <Dropdown id="service" options={['Website', 'Design UX/UI', 'Front-end']}>
          Selecione uma opção
        </Dropdown>
      </S.Container>

      <S.Container>
        <Label htmlFor="description" smallMargin>
          Faça uma breve descrição do seu projeto
        </Label>
        <Label htmlFor="description" description>
          Conte-nos os seus objetivos para esse projeto, lembrando que em breve entraremos
          em contato para mais informações.
        </Label>
        <Input variant="textarea" id="description" type="text">
          Descrição
        </Input>
      </S.Container>

      <S.Container>
        <Label htmlFor="companyWebsite">A empresa já possui website?</Label>
        <Radio name="companyWebsite" options={['Sim, já possui.', 'Ainda não possui.']} />
        <Input variant="website" id="companyWebsite" autoComplete="url">
          Seu site
        </Input>
      </S.Container>
    </S.Form>
  )
}

export default StepTwo
