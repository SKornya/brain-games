import game, {
  getRandomValueInRange,
  numberOfRounds,
  questions,
  answers as rigthAnswers,
} from '../index.js';

const getGCD = (num1, num2) => {
  const minFromNums = Math.min(num1, num2);
  const maxFromNums = Math.max(num1, num2);

  const isMinNumGCD = maxFromNums % minFromNums === 0;
  if (isMinNumGCD) {
    return Math.min(num1, num2);
  }

  if (num1 === 0 || num2 === 0) {
    return num1 === 0 ? num2 : num1;
  }

  let result = 1;

  for (let div = 2; div <= Math.min(num1, num2) / 2; div += 1) {
    const divIsCommonDivisor = num1 % div === 0 && num2 % div === 0;
    if (divIsCommonDivisor) {
      result = div;
    }
  }
  return result;
};

const gcdGameStart = () => {
  const rule = 'Find the greatest common divisor of given numbers.';

  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstOperand = getRandomValueInRange();
    const secondOperand = getRandomValueInRange();

    questions.push(`${firstOperand} ${secondOperand}`);
    rigthAnswers.push(`${getGCD(firstOperand, secondOperand)}`);
  }

  game(questions, rigthAnswers, rule);
};

export default gcdGameStart;
