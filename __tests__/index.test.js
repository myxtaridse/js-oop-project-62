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

test('should validate array correctly', () => {
  const v = new Validator()

  const schema = v.array()

  expect(schema.isValid(null)).toBeTruthy() // true

  schema.required()

  expect(schema.isValid(null)).not.toBeTruthy() // false
  expect(schema.isValid([])).toBeTruthy() // true
  expect(schema.isValid(['hexlet'])).toBeTruthy() // true

  schema.sizeof(2)

  expect(schema.isValid(['hexlet'])).not.toBeTruthy() // false
  expect(schema.isValid(['hexlet', 'code-basics'])).toBeTruthy() // true
})

test('should validate object shape correctly', () => {
  const v = new Validator()

  const schema = v.object()

  schema.shape({
    name: v.string().required(),
    age: v.number().positive(),
  })

  expect(schema.isValid({ name: 'kolya', age: 100 })).toBeTruthy() // true
  expect(schema.isValid({ name: 'maya', age: null })).toBeTruthy() // true
  expect(schema.isValid({ name: '', age: null })).not.toBeTruthy() // false
  expect(schema.isValid({ name: 'ada', age: -5 })).not.toBeTruthy() // false
})

test('should adding custom validators correctly', () => {
  const v = new Validator()

  const fnStr = (value, start) => value.startsWith(start)

  v.addValidator('string', 'startWith', fnStr)

  const schemaStr = v.string().test('startWith', 'H')

  expect(schemaStr.isValid('exlet')).not.toBeTruthy() // false
  expect(schemaStr.isValid('Hexlet')).toBeTruthy() // true

  const fnNum = (value, min) => value >= min

  v.addValidator('number', 'min', fnNum)

  const schemaNum = v.number().test('min', 5)

  expect(schemaNum.isValid(4)).not.toBeTruthy() // false
  expect(schemaNum.isValid(6)).toBeTruthy() // true
})
