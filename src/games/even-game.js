// import readlineSync from 'readline-sync';
import game from '../index.js';

const evenGame = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  const numbers = [];
  const rigthAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    numbers.push(Math.round(Math.random() * 100));
  }
  for (let i = 0; i < 3; i += 1) {
    rigthAnswers.push(numbers[i] % 2 === 0 ? 'yes' : 'no');
  }

  game(numbers, rigthAnswers, rules);
};

export default evenGame;
