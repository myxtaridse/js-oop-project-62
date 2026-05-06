export default class StringValidator {
  constructor() {
    this.checks = {}
  }

  isString(data) {
    return typeof data === 'string' && data.length > 0
  }

  required() {
    this.checks.required = v => this.isString(v)
    return this
  }

  minLength(min) {
    this.checks.minLength = v => v.length > min
    return this
  }

  contains(substring) {
    this.checks.contains = v => v.includes(substring)
    return this
  }

  isValid(data) {
    if (!Object.hasOwn(this.checks, 'required')) {
      if (!this.isString(data)) {
        return true
      }
    }
    return Object.values(this.checks).every(fn => fn(data))
  }

  test(name, arg) {
    this.checks[name] = str => this[name](str, arg)
    return this
  }
}
