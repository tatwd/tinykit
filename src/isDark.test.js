import isDark from './isDark';

test('isDark should return a boolean value', () => {
  expect(typeof isDark()).toBe('boolean');
});

test('should return true', () => {
  var isNight = isDark(new Date('2020-10-12 21:00'), {
    sunrise: 7,
    sunset: 17,
  });
  expect(isNight).toBeTruthy();
});
