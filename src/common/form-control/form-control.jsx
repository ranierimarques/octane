import { Input, Label, Button, Radio } from '.'

import * as S from './form-control.styles'

function FormControl() {
  return (
    <>
      <Label id="nome">Qual seu nome?</Label>
      <Input id="nome">Nome</Input>

      <Label id="radio">Como podemos entrar em contato?</Label>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
        <Radio>E-mail</Radio>
        <Radio>Whatsapp</Radio>
      </div>
      <Input id="radio" disabled>
        Selecione uma opção
      </Input>

      <Label id="message">Sua mensagem</Label>
      <Input textarea id="message">
        Mensagem
      </Input>

      <Button size="large" disabled>
        Enviar mensagem
      </Button>
    </>
  )
}

export default FormControl

// É responsabilidade do FormControl dizer quais componentes serão retornados para o
// formulário, sejam apenas botões (prev) e (next) ou label + input, input + dropdown
// label + description + input.... slider...
