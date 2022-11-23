import game, {
  getRandomValueInRange,
  numberOfRounds,
  questions as numbers,
  answers as rigthAnswers,
} from '../index.js';

const isEven = (num) => num % 2 === 0;

const evenGameStart = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no"';

  for (let i = 0; i < numberOfRounds; i += 1) {
    const number = getRandomValueInRange();

    numbers.push(number);
    rigthAnswers.push(isEven(number) ? 'yes' : 'no');
  }

  game(numbers, rigthAnswers, rule);
};

export default evenGameStart;
