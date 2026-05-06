import ArrayValidator from './array.js'
import NumberValidator from './number.js'
import ObjectValidator from './object.js'
import StringValidator from './string.js'

export default class Validator {
  string() {
    return new StringValidator()
  }

  number() {
    return new NumberValidator()
  }

  array() {
    return new ArrayValidator()
  }

  object() {
    return new ObjectValidator()
  }
}
