export default class ArrayValidator {
  constructor() {
    this.isRequired = false
    this.size = null
  }

  required() {
    this.isRequired = true
    return this
  }

  sizeof(size) {
    this.size = size
    return this
  }

  isValid(arr) {
    const hasArray = Array.isArray(arr)
    if (this.isRequired && !hasArray) {
      return false
    }
    if (!this.isRequired && !hasArray) {
      return true
    }
    if (!this.size) {
      return true
    }
    if (this.size === arr.length) {
      return true
    }
    return false
  }
}
