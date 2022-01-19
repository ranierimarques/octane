import { Input, Label, Button, Radio } from '.'

import * as S from './form-control.styles'

function FormControl() {
  return (
    <>
      <S.Container>
        <Label id="nome">Qual seu nome?</Label>
        <Input id="nome">Nome</Input>
      </S.Container>

      <S.Container>
        <Label id="radio">Como podemos entrar em contato?</Label>
        <S.Radios>
          <Radio>E-mail</Radio>
          <Radio>Whatsapp</Radio>
        </S.Radios>
        <Input id="radio" disabled>
          Selecione uma opção
        </Input>
      </S.Container>

      <S.Container>
        <Label id="message">Sua mensagem</Label>
        <Input textarea id="message">
          Mensagem
        </Input>
      </S.Container>

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
