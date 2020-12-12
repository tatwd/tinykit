import timeSlice from './timeSlice';

/**
 * 时间格式化
 * @param {Date} time 时间
 */
function timeFormat(time) {
  const ts = timeSlice(time);
  const dateString = `${ts.year}-${zerolize(ts.month)}-${zerolize(ts.date)}`;
  const timeString = `${zerolize(ts.hours)}:${zerolize(ts.minutes)}:${zerolize(
    ts.seconds
  )}`;
  const value = `${dateString} ${timeString}`;
  return {
    value,
    dateValue: dateString,
    timeVlaue: timeString,
    toString() {
      return value;
    },
  };
}

function zerolize(val) {
  return val >= 10 ? val : '0' + val;
}

export default timeFormat;
