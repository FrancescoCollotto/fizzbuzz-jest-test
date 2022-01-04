const fizzBuzz = require('./fizzBuzz')

describe('fizzbuzz', () => {
  it("return 'Fizz' if number is divisible by 3", () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  })

  it("return 'Buzz' if the number is divisible by 5", () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  })

  it("return 'FizzBuzz' if the number is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  })

  it("return the number if not divisible by 3 and/or 5", () => {
    expect(fizzBuzz(7)).toBe(7);
  })
})