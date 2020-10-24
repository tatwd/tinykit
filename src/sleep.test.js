import sleep from './sleep';

test('test sleep function', () => {
  const start = Date.now();
  return sleep(1).then(() => {
    const ms = Date.now() - start;
    expect(parseInt(ms / 1000)).toBe(1);
  });
});
