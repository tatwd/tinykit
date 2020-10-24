import makeTimer from './makeTimer';
import sleep from './sleep';

test('test create a timer', () => {
  const timer = makeTimer();
  expect(timer).toHaveProperty('state');
  expect(timer).toHaveProperty('elapsed');
  expect(timer).toHaveProperty('stop');
  expect(timer).toHaveProperty('resume');
});

test('test start,stop,resume timer state', () => {
  const timer = makeTimer(() => {}, 2000);
  expect(timer.state).toBe('ready');

  timer.start();
  expect(timer.state).toBe('running');

  timer.stop();
  expect(timer.state).toBe('stopped');

  timer.resume();
  expect(timer.state).toBe('running');
});

test('test start a timer', () => {
  const timer = makeTimer(() => {}, 2000);

  timer.start();

  return sleep(2).then(() => {
    expect(timer.elapsed).toBe(2000);
  });
});
