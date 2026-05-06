import Validator from '../src'

test('should validate strings correctly', () => {
  const v = new Validator()

  const schema = v.string()

  expect(schema.isValid('')).toBeTruthy()
  expect(schema.isValid(null)).toBeTruthy()
  expect(schema.isValid(undefined)).toBeTruthy()

  schema.required()

  expect(schema.isValid('what does the fox say')).toBeTruthy()
  expect(schema.isValid('hexlet')).toBeTruthy()
  expect(schema.isValid(null)).not.toBeTruthy()
  expect(schema.isValid('')).not.toBeTruthy()

  expect(schema.contains('what').isValid('what does the fox say')).toBeTruthy()
  expect(schema.contains('whatthe').isValid('what does the fox say')).not.toBeTruthy()

  expect(schema.isValid('what does the fox say')).not.toBeTruthy()

  // expect(schema.minLength(10).minLength(4).isValid('Hexlet')).toBeTruthy();
})

test('should validate number correctly', () => {
  const v = new Validator()

  const schema = v.number()

  expect(schema.isValid(null)).toBeTruthy() // true

  schema.required()

  expect(schema.isValid(null)).not.toBeTruthy() // false
  expect(schema.isValid(7)).toBeTruthy() // true

  expect(schema.positive().isValid(10)).toBeTruthy() // true

  schema.range(-5, 5)

  expect(schema.isValid(-3)).not.toBeTruthy() // false
  expect(schema.isValid(0)).toBeTruthy() // true
  expect(schema.isValid(5)).toBeTruthy() // true
})
