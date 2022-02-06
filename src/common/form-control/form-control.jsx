import { Input, Label, Button, Radio } from '.'

import * as S from './form-control.styles'

function FormControl({ element, config, children, ...props }) {
  switch (element) {
    case 'button':
      return (
        <Button variant={config?.variant} {...props}>
          {children}
        </Button>
      )
    default:
      return (
        <>
          <S.Container data-aos="fade-up" data-aos-offset="-200" data-aos-delay="100">
            <Label id="nome">Qual seu nome?</Label>
            <Input id="nome">Nome</Input>
          </S.Container>

          <S.Container data-aos="fade-up" data-aos-offset="-200" data-aos-delay="200">
            <Label id="radio">Como podemos entrar em contato?</Label>
            <S.Radios>
              <Radio>E-mail</Radio>
              <Radio>Whatsapp</Radio>
            </S.Radios>
            <Input id="radio" disabled>
              Selecione uma opção
            </Input>
          </S.Container>

          <S.Container data-aos="fade-up" data-aos-offset="-200" data-aos-delay="300">
            <Label id="message">Sua mensagem</Label>
            <Input textarea id="message">
              Mensagem
            </Input>
          </S.Container>

          <div data-aos="fade-up" data-aos-offset="-200" data-aos-delay="400">
            <Button size="large" disabled>
              Enviar mensagem
            </Button>
          </div>
        </>
      )
  }
}

export default FormControl

// É responsabilidade do FormControl dizer quais componentes serão retornados para o
// formulário, sejam apenas botões (prev) e (next) ou label + input, input + dropdown
// label + description + input.... slider...
