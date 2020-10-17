import makeTimer from './makeTimer';

test('test create a timer', () => {
  const timer = makeTimer();
  expect(timer).toHaveProperty('state');
  expect(timer).toHaveProperty('elapsed');
  expect(timer).toHaveProperty('stop');
  expect(timer).toHaveProperty('resume');
});
