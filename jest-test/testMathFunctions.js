import { Add, Subtract, Multiply } from './mathFunctions';

const testMathFunctions = (a, b) => {
  return Multiply(Add(a,b), Subtract(a, b));
};

export default testMathFunctions;