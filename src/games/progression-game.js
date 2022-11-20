import game, { getRandomValueInRange } from '../index.js';

const getMissedNumberIndex = (length) => Math.floor(Math.random() * length);

const progressionGame = () => {
  const rules = 'What number is missing in the progression?';
  const progressions = [];
  const rigthAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const progressionLength = getRandomValueInRange(5, 10);
    const progressionStart = getRandomValueInRange(-50, 50);
    const progressionStep = getRandomValueInRange(-5, 5);

    const progression = [progressionStart];

    for (let j = 1; j < progressionLength; j += 1) {
      progression.push(progression[j - 1] + progressionStep);
    }

    const missedNumberIndex = getMissedNumberIndex(progressionLength);

    rigthAnswers.push(progression[missedNumberIndex].toString());
    progression[missedNumberIndex] = '..';
    progressions.push(progression.join(' '));
  }

  game(progressions, rigthAnswers, rules);
};

export default progressionGame;
