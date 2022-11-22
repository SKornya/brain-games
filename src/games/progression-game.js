import game, { getRandomValueInRange, numberOfRounds } from '../index.js';

const getProgression = (start, length, step) => {
  const progression = [start];

  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
};

const progressionGameStart = () => {
  const rule = 'What number is missing in the progression?';
  const progressions = [];
  const rigthAnswers = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const progressionLength = getRandomValueInRange(5, 10);
    const progressionStart = getRandomValueInRange(-50, 50);
    const progressionStep = getRandomValueInRange(-5, 5);

    const progression = getProgression(progressionStart, progressionLength, progressionStep);

    const missedNumberIndex = getRandomValueInRange(0, progressionLength - 1);

    rigthAnswers.push(progression[missedNumberIndex].toString());
    progression[missedNumberIndex] = '..';
    progressions.push(progression.join(' '));
  }

  game(progressions, rigthAnswers, rule);
};

export default progressionGameStart;
