/**
 * 判断时间是否是处于黑夜模式
 * @param {Date} [time] 可选的判断时间, 默认值 `new Date()`
 * @param {object} [option] 可选的配置, 用于判断
 * @param {number} [option.sunset] 日落时间(小时部分), 默认值 `18`
 * @param {number} [option.sunrise] 日出时间(小时部分), 默认值 `6`
 */
function isDark(time, option = { sunset: 18, sunrise: 6 }) {
  var h = (time || new Date()).getHours();
  return h < option.sunrise || h >= option.sunset;
}

export default isDark;
