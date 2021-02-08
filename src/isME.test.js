import isME from './isME';

const testdata = [
  'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
];

test('isME should return a boolean value', () => {
  expect(typeof isME(testdata[0])).toBe('boolean');
});

test('should return true', () => {
  expect(isME(testdata[0])).toBeTruthy();
});
