import game, {
  getRandomValueInRange,
  numberOfRounds,
  questions as numbers,
  answers as rigthAnswers,
} from '../index.js';

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

const primeGameStart = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  for (let i = 0; i < numberOfRounds; i += 1) {
    const number = getRandomValueInRange(0, 100);

    numbers.push(number);
    rigthAnswers.push(isPrimeNumber(number) ? 'yes' : 'no');
  }

  game(numbers, rigthAnswers, rule);
};

export default primeGameStart;
