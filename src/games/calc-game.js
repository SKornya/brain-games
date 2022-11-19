import game from '../index.js';

const calcGame = () => {
  const rules = 'What is the result of the expression?';
  const expressions = [];
  const rigthAnswers = [];
  const operations = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const firstOperand = Math.round(Math.random() * 100);
    const secondOperand = Math.round(Math.random() * 100);
    const operation = operations[Math.round(Math.random() * 3)];

    expressions.push(`${firstOperand} ${operation} ${secondOperand}`);

    for (let j = 0; j < 3; j += 1) {
      switch (operation) {
        case '+':
          rigthAnswers.push(firstOperand + secondOperand);
          break;
        case '-':
          rigthAnswers.push(firstOperand - secondOperand);
          break;
        case '*':
          rigthAnswers.push(firstOperand * secondOperand);
          break;
        default:
          break;
      }
    }
  }
  console.log(expressions, rigthAnswers);
  game(expressions, rigthAnswers, rules);
};

export default calcGame;
