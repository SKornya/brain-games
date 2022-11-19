import game from '../index.js';

const getGCD = (num1, num2) => {
  let result = 0;

  for (let div = 1; div < Math.min(num1, num2) / 2; div += 1) {
    if (num1 % div === 0 && num2 % div === 0) {
      result = div;
    }
  }
  return result;
};

const gcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const expressions = [];
  const rigthAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const firstOperand = Math.round(Math.random() * 100);
    const secondOperand = Math.round(Math.random() * 100);

    expressions.push(`${firstOperand} ${secondOperand}`);
    rigthAnswers.push(`${getGCD(firstOperand, secondOperand)}`);
  }

  game(expressions, rigthAnswers, rules);
};

export default gcdGame;
