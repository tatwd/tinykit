import timeSlice from './timeSlice';

test('test timeSlice', () => {
  const time = new Date('2020/3/4 12:30:56.123');
  const ts = timeSlice(time);
  expect(ts.year).toBe(2020);
  expect(ts.month).toBe(3);
  expect(ts.date).toBe(4);
  expect(ts.hours).toBe(12);
  expect(ts.minutes).toBe(30);
  expect(ts.seconds).toBe(56);
  expect(ts.milliseconds).toBe(123);
  expect(ts.dayOfWeek).toBe(time.getDay());
  expect(ts.timestamp).toBe(time.getTime());
});
