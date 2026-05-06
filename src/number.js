export default class NumberValidator {
  constructor() {
    this.isRequired = false
    this.isPositive = false
    this.rangeObj = {
      start: -Infinity,
      end: Infinity,
    }
  }

  required() {
    this.isRequired = true
    return this
  }

  positive() {
    this.isPositive = true
    return this
  }

  range(start, end) {
    this.rangeObj['start'] = start
    this.rangeObj['end'] = end
    return this
  }

  isValid(num) {
    const isValueEmpty = typeof num !== 'number'
    if (this.isRequired && isValueEmpty) {
      return false
    }
    if (!this.isRequired && isValueEmpty) {
      return true
    }
    if (this.isPositive && num < 0) {
      return false
    }
    if (num >= this.rangeObj.start && num <= this.rangeObj.end) {
      return true
    }
    return false
  }
}
