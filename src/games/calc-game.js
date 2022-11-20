import game, { getRandomValueInRange } from '../index.js';

const getRandomOperation = (operations) => operations[Math.floor(Math.random() * 3)];

const calcGame = () => {
  const rules = 'What is the result of the expression?';
  const expressions = [];
  const rigthAnswers = [];
  const operations = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const firstOperand = getRandomOperation(0, 100);
    const secondOperand = getRandomOperation(0, 100);
    const operation = getRandomOperation(operations);

    expressions.push(`${firstOperand} ${operation} ${secondOperand}`);

    switch (operation) {
      case '+':
        rigthAnswers.push(`${firstOperand + secondOperand}`);
        break;
      case '-':
        rigthAnswers.push(`${firstOperand - secondOperand}`);
        break;
      case '*':
        rigthAnswers.push(`${firstOperand * secondOperand}`);
        break;
      default:
        console.log('Error! Unknown operation!');
        break;
    }
  }

  game(expressions, rigthAnswers, rules);
};

export default calcGame;
