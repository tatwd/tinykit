/**
 * 计算时间过去多久(包含不同维度)
 * @param {Date} time 时间
 */
function timeSpan(time) {
  var now = new Date();
  var milliseconds = now - time;
  var days = ~~(milliseconds / (1 * 24 * 60 * 60 * 1000));
  var hours = ~~(milliseconds / (1 * 60 * 60 * 1000));
  var minutes = ~~(milliseconds / (1 * 60 * 1000));
  var seconds = ~~(milliseconds / 1000);
  var years = ~~(milliseconds / 365.5);
  return { years, days, hours, minutes, seconds, milliseconds };
}

export default timeSpan;
