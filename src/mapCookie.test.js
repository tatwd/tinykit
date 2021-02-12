import mapCookie from './mapCookie';

test('test mapCookie', () => {
  const cookieStr = 'foo=123; bar=hello;';
  var map = mapCookie(cookieStr);
  expect(map['foo']).toEqual('123');
  expect(map['bar']).toEqual('hello');
});
