export default class NumberValidator {
  constructor() {
    this.checks = {}
  }

  isNumber(data) {
    return typeof data === 'number'
  }

  required() {
    this.checks.required = v => this.isNumber(v)
    return this
  }

  positive() {
    this.checks.positive = v => v > 0
    return this
  }

  range(start, end) {
    this.checks.range = v => v >= start && v <= end
    return this
  }

  isValid(data) {
    if (!Object.hasOwn(this.checks, 'required')) {
      if (!this.isNumber(data)) {
        return true
      }
    }
    return Object.values(this.checks).every(fn => fn(data))
  }

  test(name, arg) {
    this.checks[name] = num => this[name](num, arg)
    return this
  }
}
