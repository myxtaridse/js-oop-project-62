export default class ObjectValidator {
  constructor() {
    this.shapeObj = {}
  }

  shape(obj) {
    this.shapeObj = obj
    return this
  }

  isValid(obj) {
    const isValueEmpty = o => Object.keys(o).length === 0
    if (isValueEmpty(this.shapeObj) && (!obj || isValueEmpty(obj))) {
      return true
    }
    const isValidMap = Object.entries(this.shapeObj)
      .every(([key, value]) => Object.hasOwn(obj, key) && value.isValid(obj[key]))
    return isValidMap
  }
}
