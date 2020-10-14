/**
 * 计算两个时间差(包含不同维度)
 * @param {Date} atime - 时间 A
 * @param {Date} [btime] - 时间 B, 可选， 默认值 `new Date()`
 */
function timeSpan(atime, btime) {
  var milliseconds = (btime || new Date()) - atime;
  var seconds = ~~(milliseconds / 1000);
  var minutes = ~~(milliseconds / (1 * 60 * 1000));
  var hours = ~~(milliseconds / (1 * 60 * 60 * 1000));
  var days = ~~(milliseconds / (1 * 24 * 60 * 60 * 1000));
  var years = ~~(days / 365.5);
  return { years, days, hours, minutes, seconds, milliseconds };
}

export default timeSpan;
