/**
 * 分割时间获取各部分值
 * @param {Date} time 时间
 */
function timeSlice(time) {
  return {
    /** 当前实例 */
    value: time,
    year: time.getFullYear(),
    month: time.getMonth() + 1,
    date: time.getDate(),
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
    milliseconds: time.getMilliseconds(),
    /** 星期 */
    dayOfWeek: time.getDay(),
    /** 时间戳 */
    timestamp: time.getTime(),
  };
}

export default timeSlice;
