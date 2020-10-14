import timeSpan from './timeSpan';

test('test timeSpan return value', () => {
  var span = timeSpan(new Date('2020-10-14 12:00'));
  expect(span).toHaveProperty('years');
  expect(span).toHaveProperty('days');
  expect(span).toHaveProperty('hours');
  expect(span).toHaveProperty('minutes');
  expect(span).toHaveProperty('seconds');
  expect(span).toHaveProperty('milliseconds');
});

test('test timeSpan two date time', () => {
  var span = timeSpan(
    new Date('2020-01-01 12:00'),
    new Date('2020-10-01 12:00')
  );
  expect(span).toStrictEqual({
    years: 0,
    days: 274,
    hours: 6576,
    minutes: 394560,
    seconds: 23673600,
    milliseconds: 23673600000,
  });
});
