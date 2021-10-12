import readCookie from './readCookie';

test('test readCookie', () => {
  const cookieStr = 'foo=123; bar=hello;';

  const val1 = readCookie('foo', cookieStr);
  expect(val1).toEqual('123');

  const val2 = readCookie('bar', cookieStr);
  expect(val2).toEqual('hello');
});
