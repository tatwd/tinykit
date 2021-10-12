import newCookieString from './newCookieString';

test('test newCookieString', () => {
  var str1 = newCookieString('foo');
  expect(str1).toBeNull();

  var str2 = newCookieString('foo', 123);
  expect(str2).toMatch(
    /foo=123; expires=[A-Z]{1}[a-z]{2}, \d{2} [A-Z]{1}[a-z]{2} \d{4} \d{2}:\d{2}:\d{2} GMT; path=\//
  );

  var str3 = newCookieString('bar', 'hello', 1, 'bar.test.com', '/bar');
  expect(str3).toMatch(
    /bar=hello; expires=[A-Z]{1}[a-z]{2}, \d{2} [A-Z]{1}[a-z]{2} \d{4} \d{2}:\d{2}:\d{2} GMT; path=\/bar; domain=bar\.test\.com/
  );
});
