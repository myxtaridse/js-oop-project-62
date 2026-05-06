import NumberValidator from './number.js'
import StringValidator from './string.js'

export default class Validator {
  string() {
    return new StringValidator()
  }

  number() {
    return new NumberValidator()
  }
}
