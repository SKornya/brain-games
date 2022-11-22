import game, {
  getRandomValueInRange,
  numberOfRounds,
  questions,
  answers as rigthAnswers,
} from '../index.js';

const getGCD = (num1, num2) => {
  const isMinNumGCD = Math.max(num1, num2) % Math.min(num1, num2) === 0;
  if (isMinNumGCD) {
    return Math.min(num1, num2);
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
    const firstOperand = getRandomValueInRange(0, 100);
    const secondOperand = getRandomValueInRange(0, 100);

    questions.push(`${firstOperand} ${secondOperand}`);
    rigthAnswers.push(`${getGCD(firstOperand, secondOperand)}`);
  }

  game(questions, rigthAnswers, rule);
};

export default gcdGameStart;
