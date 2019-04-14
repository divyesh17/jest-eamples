import testMathFunctions from '../../testMathFunctions';

beforeEach(() => {
  jest.resetModules();
});

jest.mock('../../mathFunctions', () => ({
  Add: () => 1,
  Subtract: () => 2,
  Multiply: () => 3,
}));

test('test testMathFunctions', () => {
  expect(testMathFunctions(1, 2)).toBe(3);
});