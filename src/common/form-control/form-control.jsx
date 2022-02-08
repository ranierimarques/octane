import { Input, Label, Button, Radio } from '.'

import * as S from './form-control.styles'

function FormControl({ config, children, ...props }) {
  const element = config.element || ''

  if (element === 'input') {
    return (
      <S.Container>
        <Label config={config} />
        <Input config={config} />
      </S.Container>
    )
  }

  if (element === 'radio') {
    return (
      <S.Container>
        <Label config={config} />
        <Radio config={config} />
        <Input config={config} />
      </S.Container>
    )
  }

  if (element === 'button') {
    return <Button config={config} {...props} />
  }

  return <S.Warning>Você precisa especificar um elemento para ser retornado!</S.Warning>
}

export default FormControl

// É responsabilidade do FormControl dizer quais componentes serão retornados para o
// formulário, sejam apenas botões (prev) e (next) ou label + input, input + dropdown
// label + description + input.... slider...

// Não é responsabilidade do FormControl controlar COMO os componentes devem ser retornados
// Ex: Condicionais, estilização, lógica

// Não é responsabilidade do FormControl gerenciar e manipular os dados dos componentes
