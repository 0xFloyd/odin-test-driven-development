const capitalize = require('./modules/capitalize');
const reverseString = require('./modules/reverse-string');
const Calculator = require('./modules/calculator');
const caesar = require('./modules/caesar-cipher');

//  jest working
it('Works', () => {
    expect(1).toBe(1)
})

// capitalize function tests
it('Capitalize -- no input', () => {
    expect(capitalize(1)).toBe('no string provided')
})

it('Capitalize works', () => {
    expect(capitalize('meow')).toBe('Meow')
})

// reverseString function tests
it('reverse string -- no input', () => {
    expect(reverseString(1)).toBe('Please provide a string to reverse')
})

it('String reversed', () => {
    expect(reverseString('meow')).toBe('woem')
})

//  calculator function test 
let calculator = new Calculator();

it('Calculator adding 2 + 5 = 7', () => {
    expect(calculator.add(2, 5)).toBe(7)
})

it('Calculator subtracting 5 - 2 = 3', () => {
    expect(calculator.subtract(5, 2)).toBe(3)
})
it('Calculator mutiply 2 * 5 = 10', () => {
    expect(calculator.multiply(2, 5)).toBe(10)
})
it('Calculator dividing 10 / 5 = 2', () => {
    expect(calculator.divide(10, 5)).toBe(2)
})

//  Caesar Cipher function test 
test("Caesar cipher returns Caesar of meowz 'woygj' on 10 shift and correctly wraps after z", () => {
    expect(caesar('meowz', 10)).toBe('woygj')
})

test("Caesar cipher is case sensitive on 10 shift", () => {
    expect(caesar('MeoW', 10)).toBe('WoyG')
})

test("Caesar cipher works with punctuation", () => {
    expect(caesar('meow!', 10)).toBe('woygE')
})