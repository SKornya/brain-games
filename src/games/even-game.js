import game, { getRandomValueInRange } from '../index.js';

const evenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  const numbers = [];
  const rigthAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomValueInRange(0, 100);

    numbers.push(number);
    rigthAnswers.push(number % 2 === 0 ? 'yes' : 'no');
  }

  game(numbers, rigthAnswers, rules);
};

export default evenGame;
