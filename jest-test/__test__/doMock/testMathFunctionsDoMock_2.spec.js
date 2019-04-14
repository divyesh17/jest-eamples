beforeEach(() => {
  jest.resetModules();
});

jest.doMock('../../mathFunctions', () => ({
  Add: () => 1,
  Subtract: () => 2,
  Multiply: () => 3,
}));

describe('first block', () => {
  /* Put this line inside test to pass the test */
  const testMathFunctions = require('../../testMathFunctions').default;
  test('test inside first block', () => {
    expect(testMathFunctions(1, 2)).toBe(30);
  });

  jest.doMock('../../mathFunctions', () => ({
    Add: () => 10,
    Subtract: () => 20,
    Multiply: () => 30,
  }));
});
