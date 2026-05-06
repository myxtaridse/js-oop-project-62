export default class ArrayValidator {
  constructor() {
    this.checks = {}
  }

  isArray(data) {
    return Array.isArray(data)
  }

  required() {
    this.checks.required = v => this.isArray(v)
    return this
  }

  sizeof(size) {
    this.checks.sizeof = v => v.length === size
    return this
  }

  isValid(data) {
    if (!Object.hasOwn(this.checks, 'required')) {
      if (!this.isArray(data)) {
        return true
      }
    }
    return Object.values(this.checks).every(fn => fn(data))
  }
}
