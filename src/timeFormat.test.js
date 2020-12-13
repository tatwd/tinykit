import timeFormat from './timeFormat';

test('test timeFormat', () => {
  const str = timeFormat(new Date('2020/3/4 12:30:56.123'));
  expect(str.value).toBe('2020-03-04 12:30:56');
  expect(str.dateValue).toBe('2020-03-04');
  expect(str.timeValue).toBe('12:30:56');
  expect(str.toString()).toBe('2020-03-04 12:30:56');
});
