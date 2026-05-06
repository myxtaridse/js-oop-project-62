export default class StringValidator {
  constructor() {
    this.isRequired = false
    this.minL = 0
    this.substring = ''
    this.testFnc = null
  }

  required() {
    this.isRequired = true
    return this
  }

  minLength(min) {
    this.minL = min
    return this
  }

  contains(str) {
    this.substring = str
    return this
  }

  isValid(str) {
    const isValueEmpty = str === '' || typeof str !== 'string'
    if (this.isRequired && isValueEmpty) {
      return false
    }
    if (!this.isRequired && isValueEmpty) {
      return true
    }
    if (str.length < this.minL || !str.includes(this.substring)) {
      return false
    }
    if (this.testFnc && !this.testFnc(str)) {
      return false
    }
    return true
  }

  test(name, arg) {
    this.testFnc = str => this[name](str, arg)
    return this
  }
}
