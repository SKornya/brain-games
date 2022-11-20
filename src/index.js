import readlineSync from 'readline-sync';

export const getRandomValueInRange = (min, max) => Math.round(Math.random() * (max - min) + min);

const game = (gameQuestions, rigthAnswers, rules) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  let rigthAnswersCount = 0;

  for (let i = 0; i < 3; i += 1) {
    const question = gameQuestions[i];
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (rigthAnswers[i] === userAnswer) {
      console.log('Correct!');
      rigthAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rigthAnswers[i]}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (rigthAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default game;
