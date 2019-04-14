beforeEach(() => {
  jest.resetModules();
});

jest.doMock('../../mathFunctions', () => ({
  Add: () => 1,
  Subtract: () => 2,
  Multiply: () => 3,
}));

describe('first block', () => {
  jest.doMock('../../mathFunctions', () => ({
    Add: () => 10,
    Subtract: () => 20,
    Multiply: () => 30,
  }));

  test('test inside first block', () => {
    const testMathFunctions = require('../../testMathFunctions').default;
    expect(testMathFunctions(1, 2)).toBe(30);
  });
});

describe('second block', () => {
  test('test inside second block', () => {
    const testMathFunctions = require('../../testMathFunctions').default;
    /* Can't determine why is this failing, have to discuss */
    expect(testMathFunctions(1, 2)).toBe(3);
  });
});