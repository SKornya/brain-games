import readlineSync from 'readline-sync';

const gameStart = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  let rigthAnswersCount = 0;

  while (rigthAnswersCount !== 3) {
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);

    const rigthAnswer = number % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');

    if (rigthAnswer === userAnswer) {
      console.log('Correct!');
      rigthAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'.`);
      break;
    }
  }

  if (rigthAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameStart;
