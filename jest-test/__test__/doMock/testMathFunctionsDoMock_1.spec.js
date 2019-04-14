import testMathFunctions from '../../testMathFunctions';

beforeEach(() => {
  jest.resetModules();
});

jest.doMock('../../mathFunctions', () => ({
  Add: () => 100,
  Subtract: () => 200,
  Multiply: () => 300,
}));
/* uncomment the line to pass the test */
// const testMathFunctions = require('../../testMathFunctions').default;

test('test testMathFunctions', () => {
  expect(testMathFunctions(1, 2)).toBe(300);
});