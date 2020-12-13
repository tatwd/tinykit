import timeAgo from './timeAgo';

test('test timeAgo return `1 分钟前`', () => {
  var now = new Date();
  var sec = now.getSeconds();
  var ago = timeAgo(new Date(now.setSeconds(sec - 60)));
  expect(ago).toBe('1 分钟前');
});

test('test timeAgo return `1 minutes ago`', () => {
  var now = new Date();
  var sec = now.getSeconds();
  var ago = timeAgo(new Date(now.setSeconds(sec - 60)), 'en');
  expect(ago).toBe('1 minutes ago');
});

test('test timeAgo return `刚刚`', () => {
  var now = new Date();
  var sec = now.getSeconds();
  var ago = timeAgo(new Date(now.setSeconds(sec - 30)));
  expect(ago).toBe('刚刚');
});

test('test timeAgo return `3 天前`', () => {
  var timestamp = Date.now() - 3 * 24 * 3600 * 1000;
  var ago = timeAgo(new Date(timestamp));
  expect(ago).toBe('3 天前');
});

test('test timeAgo return `2 周前`', () => {
  var timestamp = Date.now() - 15 * 24 * 3600 * 1000;
  var ago = timeAgo(new Date(timestamp));
  expect(ago).toBe('2 周前');
});

test('test timeAgo return `1 个月前`', () => {
  var timestamp = Date.now() - 31 * 24 * 3600 * 1000;
  var ago = timeAgo(new Date(timestamp));
  expect(ago).toBe('1 个月前');
});

test('test timeAgo return `1 年前`', () => {
  var timestamp = Date.now() - 366 * 24 * 3600 * 1000;
  var ago = timeAgo(new Date(timestamp));
  expect(ago).toBe('1 年前');
});
