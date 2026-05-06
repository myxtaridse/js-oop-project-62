### Hexlet tests and linter status:
[![Actions Status](https://github.com/myxtaridse/js-oop-project-62/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/myxtaridse/js-oop-project-62/actions)

# Validator Data
Валидатор данных - библиотека, с помощью которой можно проверять корректность любых данных

## Requirements
- Unix system (Macos/Linux)
- Nodejs 22.x+
- Make

## Description
Библиотека поддерживает:
- **Декларативный подход:** базируется на паттерне fluent-интерфейс - цепочках методов-правил для описания валидации
- **Расширяемость**: возмодность добавления собственных правил проверок
- **Тестирование**: полное покрытие тестами с помощью Jest

## Installation
```bash
git clone https://github.com/myxtaridse/js-oop-project-62.git
cd js-oop-project-62
make install
```

## Usage
```JavaScript
import Validator from './src/index.js';
const v = new Validator();

const schema = v.string().required().minLength(5);
schema.isValid('Hexlet'); // true
```

## API / Доступные проверки

### Строки (v.string())
- `required()` - делает поле обязательным
- `minLength(min)` - устанавливает минимальную длину строки
- `contains(substring)` - проверка на наличие подстроки
#### Пример
```JavaScript
const schema = v.string().required().minLength(5).contains('what');

schema.isValid('what does the fox say'); // true
schema.isValid('the fox barks loudly'); // false
```

### Числа (v.number())
- `required()` - делает поле обязательным
- `positive()` - проверка на положительное число
- `range(start, end)` - устанавливает диапазон
#### Пример
```JavaScript
const schema = v.number().required().positive().range(-5, 5);

schema.isValid(5); // true
schema.isValid(0); // false
```

### Массивы (v.array())
- `required()` - делает поле обязательным
- `sizeof(size)` - проверка на строгое соответствие длине массива
#### Пример
```JavaScript
const schema = v.array().required().sizeof(2);

schema.isValid(['hexlet', 'code-basics']); // true
schema.isValid(['hexlet']); // false
```

### Объекты (v.object())
- `shape({ key: value, ... })` - позволяет описывать валидацию для свойств объекта
#### Пример
```JavaScript
const schema = v.object();
schema.shape({
    name: v.string().required(),
    age: v.number().positive(),
});

schema.isValid({ name: 'kolya', age: 100 }); // true
schema.isValid({ name: '', age: null }); // false
```

### Кастомные правила
- `addValidator(type, name, fn)` - позволяет добавить свой валидатор для общего класса Validator
- `test(name, arg)` - вызывает кастомный валидатор на определенном типе Validator (string, number)
#### Пример
```JavaScript
const v = new Validator();

const fn = (value, start) => value.startsWith(start);
v.addValidator('string', 'startWith', fn);

const schema = v.string().test('startWith', 'H');
schema.isValid('Hexlet'); // true
schema.isValid('exlet'); // false
```

## Run tests
```Bash
make test
```
