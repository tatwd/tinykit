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
