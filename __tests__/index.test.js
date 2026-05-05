import Validator from "../src";

test('should validate strings correctly', () => {
    const v = new Validator();

    const schema = v.string();

    expect(schema.isValid('')).toBeTruthy();
    expect(schema.isValid(null)).toBeTruthy();
    expect(schema.isValid(undefined)).toBeTruthy();

    schema.required();

    expect(schema.isValid('what does the fox say')).toBeTruthy();
    expect(schema.isValid('hexlet')).toBeTruthy();
    expect(schema.isValid(null)).not.toBeTruthy();
    expect(schema.isValid('')).not.toBeTruthy();

    expect(schema.contains('what').isValid('what does the fox say')).toBeTruthy();
    expect(schema.contains('whatthe').isValid('what does the fox say')).not.toBeTruthy();

    expect(schema.isValid('what does the fox say')).not.toBeTruthy();

    // expect(schema.minLength(10).minLength(4).isValid('Hexlet')).toBeTruthy();
});