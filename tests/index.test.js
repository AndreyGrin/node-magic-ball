const askMagicBall = require('../index').askMagicBall;

test('askMagicBall function exists', () => {
  expect(askMagicBall).toBeDefined();
});

test('askMagicBall returns a non-empty string when asked a question', () => {
  const question = "Will I become a successful programmer?";
  const answer = askMagicBall(question);
  expect(answer).toBeTruthy();
  expect(typeof answer).toBe('string');
});