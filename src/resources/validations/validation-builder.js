// Design pattern - Fluent Builder
export class ValidationBuilder {
  constructor(action) {
    this.input = action.input
    this.payload = action.payload
    this.erros = []
  }

  isEmail() {
    const emailRegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegExp.test(this.payload)) {
      const index = this.erros.length
      this.erros.push({
        occurrence: index,
        error: 'email',
        message: 'Digite um email válido.',
        title: 'Digite um email válido.',
      })
    }
    return this
  }

  isEmpty() {
    if (this.payload.length < 1) {
      const index = this.erros.length
      this.erros.push({
        occurrence: index,
        error: 'empty',
        message: '*Este campo é obrigatório.',
        title: 'Preencha este campo.',
      })
    }
    return this
  }

  isMaxLength(maxLength) {
    if (this.payload.length > maxLength) {
      const index = this.erros.length
      this.erros.push({
        occurrence: index,
        error: 'maxLength',
      })
    }
    return this
  }

  isSpecialChars() {
    const specialCharsRegExp = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    if (specialCharsRegExp.test(this.input)) {
      const index = this.erros.length
      this.erros.push({
        occurrence: index,
        error: 'specialChars',
        message: 'Caracteres especiais não são permitidos, utilize somente letras.',
        title: 'Caracteres especiais não são permitidos.',
      })
    }
    return this
  }

  isNumber() {
    if (!isNaN(this.input) && !isNaN(parseFloat(this.input))) {
      const index = this.erros.length
      this.erros.push({
        occurrence: index,
        error: 'number',
        message: 'Números não são permitidos, utilize somente letras.',
        title: 'Números não são permitidos.',
      })
    }
    return this
  }

  isPhone() {
    const str = this.payload.replace(/[^0-9]/g, '')

    const phoneRegExp =
      /^[\+]?\d{2,}?[(]?\d{2,}[)]?[-\s\.]?\d{2,}?[-\s\.]?\d{2,}[-\s\.]?\d{0,9}$/im
    if (!phoneRegExp.test(str)) {
      const index = this.erros.length
      this.erros.push({
        occurrence: index,
        error: 'phone',
        message: 'Digite um número de telefone válido.',
        title: 'Digite um número de telefone válido.',
      })
    }
    return this
  }

  validate() {
    if (this.erros.length === 0) return { error: null }
    const { occurrence, ...rest } = this.erros.filter(e => e.occurrence === 0)[0]
    return { ...rest }
  }
}
