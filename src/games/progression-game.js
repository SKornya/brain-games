import game from '../index.js';

const progressionGame = () => {
  const rules = 'What number is missing in the progression?';
  const progressions = [];
  const rigthAnswers = [];

  for (let i = 0; i < 3; i += 1) {
    const progressionLength = Math.round(Math.random() * 5 + 5);
    const progressionStart = Math.round(Math.random() * 100 - 50);
    const progressionStep = Math.round(Math.random() * 10 - 5);

    const progression = [progressionStart];

    for (let j = 1; j < progressionLength; j += 1) {
      progression.push(progression[j - 1] + progressionStep);
    }

    const missedNumberIndex = Math.floor(Math.random() * progressionLength);

    rigthAnswers.push(progression[missedNumberIndex].toString());
    progression[missedNumberIndex] = '..';
    progressions.push(progression.join(' '));
  }

  game(progressions, rigthAnswers, rules);
};

export default progressionGame;
