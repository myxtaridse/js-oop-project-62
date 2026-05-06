export default class ObjectValidator {
  constructor() {
    this.obj = {}
  }

  shape(obj) {
    this.obj = obj
    return this
  }

  isValid(obj) {
    const isValueEmpty = o => Object.keys(o).length === 0
    if (isValueEmpty(this.obj) && (!obj || isValueEmpty(obj))) {
      return true
    }
    const isValidMap = Object.entries(this.obj)
      .every(([key, value]) => Object.hasOwn(obj, key) && value.isValid(obj[key]))
    return isValidMap
  }
}
