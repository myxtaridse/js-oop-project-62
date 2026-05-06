export default class ObjectValidator {
  constructor() {
    this.obj = {}
  }

  shape(obj) {
    this.obj = obj
    return this
  }

  isValid(obj) {
    const isValidMap = Object.entries(obj).every(([key, value]) => this.obj[key].isValid(value))
    return isValidMap
  }
}
