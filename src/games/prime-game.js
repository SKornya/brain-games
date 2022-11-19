import game from '../index.js';

const isPrimeNumber = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const PrimeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const numbers = [];
  const rigthAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 100);

    numbers.push(number);
    rigthAnswers.push(isPrimeNumber(number) ? 'yes' : 'no');
  }

  game(numbers, rigthAnswers, rules);
};

export default PrimeGame;
