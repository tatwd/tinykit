import timeSpan from './timeSpan';

test('timeSpan test', () => {
  var span = timeSpan(new Date('2020-10-14 12:00'));
  expect(span).toHaveProperty('years');
  expect(span).toHaveProperty('days');
  expect(span).toHaveProperty('hours');
  expect(span).toHaveProperty('minutes');
  expect(span).toHaveProperty('seconds');
  expect(span).toHaveProperty('milliseconds');
});
