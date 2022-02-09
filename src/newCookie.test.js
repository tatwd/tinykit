import newCookie from './newCookie';

test('test newCookie', () => {
  var str1 = newCookie('foo');
  expect(str1).toBeNull();

  var str2 = newCookie('foo', 123);
  expect(str2).toMatch(
    /foo=123; expires=[A-Z]{1}[a-z]{2}, \d{2} [A-Z]{1}[a-z]{2} \d{4} \d{2}:\d{2}:\d{2} GMT; path=\//
  );

  var str3 = newCookie('bar', 'hello', 1, 'bar.test.com', '/bar');
  expect(str3).toMatch(
    /bar=hello; expires=[A-Z]{1}[a-z]{2}, \d{2} [A-Z]{1}[a-z]{2} \d{4} \d{2}:\d{2}:\d{2} GMT; path=\/bar; domain=bar\.test\.com/
  );
});
