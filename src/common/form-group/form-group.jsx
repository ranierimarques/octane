import { Input, Label, Button } from '.'

import * as S from './form-group.styles'

function FormGroup() {
  return (
    <>
      <Label id="nome">Qual seu nome?</Label>
      <Input id="nome" />

      <Label id="message">Sua mensagem</Label>
      <Input textarea id="message" />

      <Button size="large" disabled>
        Enviar mensagem
      </Button>
    </>
  )
}

export default FormGroup

// É responsabilidade do FormGroup dizer quais componentes serão retornados para o
// formulário, sejam apenas botões (prev) e (next) ou label + input, input + dropdown
// label + description + input.... slider...
