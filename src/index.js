import readlineSync from 'readline-sync';

export const numberOfRounds = 3;
export const questions = [];
export const answers = [];

export const getRandomValueInRange = (min = 0, max = 100) => Math.round(
  Math.random() * (max - min) + min,
);

const game = (gameQuestions, rigthAnswers, rules) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = gameQuestions[i];
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (rigthAnswers[i] === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rigthAnswers[i]}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
