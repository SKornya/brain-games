import game from '../index.js';

const calcGame = () => {
  const rules = 'What is the result of the expression?';
  const expressions = [];
  const rigthAnswers = [];
  const operations = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const firstOperand = Math.round(Math.random() * 100);
    const secondOperand = Math.round(Math.random() * 100);
    const operation = operations[Math.floor(Math.random() * 3)];

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
        break;
    }
  }

  game(expressions, rigthAnswers, rules);
};

export default calcGame;
