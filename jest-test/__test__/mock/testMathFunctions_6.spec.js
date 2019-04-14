beforeEach(() => {
  jest.resetModules();
});

test('first test', () => {
  const testMathFunctions = require('../../testMathFunctions').default;
  expect(testMathFunctions(1, 2)).toBe(30);

  jest.mock('../../mathFunctions', () => ({
    Add: () => 10,
    Subtract: () => 20,
    Multiply: () => 30,
  }));
});

test('second test', () => {
  const testMathFunctions = require('../../testMathFunctions').default;
  expect(testMathFunctions(1, 2)).toBe(300);

  jest.mock('../../mathFunctions', () => ({
    Add: () => 100,
    Subtract: () => 200,
    Multiply: () => 300,
  }));
});

