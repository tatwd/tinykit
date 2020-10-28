import makeAjax from './makeAjax';

test('test init a ajax instance by makeAjax', () => {
  var navtiveAjax = makeAjax();
  expect(navtiveAjax).toHaveProperty('xhr');
  expect(navtiveAjax).toHaveProperty('send');
});
