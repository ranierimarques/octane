import { Input, Label, Button, Radio } from '.'

import * as S from './form-control.styles'

function FormControl({ config, children, ...props }) {
  const element = config?.element || ''

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

        <S.Radios>
          {config.options.map(option => (
            <Radio key={option} option={option} />
          ))}
        </S.Radios>
        <Input config={config} />
      </S.Container>
    )
  }

  if (element === 'double-input') {
    return (
      <S.Container>
        <Label config={config} />

        <S.DoubleInput>
          <Input config={config} />
          <Input config={config} secondInput />
        </S.DoubleInput>
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
