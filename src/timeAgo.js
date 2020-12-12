import timeSpan from './timeSpan';

/**
 * 判断时间过去多久
 * @param {Date} time 时间
 * @param {string} locales 本地化, 可选, 默认值 `zh`
 */
function timeAgo(time, locales = 'zh') {
  const ts = timeSpan(time);
  if (!i18n[locales]) locales = 'zh';
  if (ts.seconds < 60) return i18n[locales].justNow;
  if (ts.minutes < 60) return ts.minutes + ' ' + i18n[locales].minutesAgo;
  if (ts.hours < 24) return ts.hours + ' ' + i18n[locales].hoursAgo;
  if (ts.days < 30) return ts.days + ' ' + i18n[locales].daysAgo;
  if (ts.years < 1) return ~~(ts.days / 30) + '' + i18n[locales].monthsAgo;
  return ts.years + ' ' + i18n[locales].yearsAgo;
}

const i18n = {
  zh: {
    justNow: '刚刚',
    minutesAgo: '分钟前',
    hoursAgo: '小时前',
    daysAgo: '天前',
    monthsAgo: '个月前',
    yearsAgo: '年前',
  },
  en: {
    justNow: 'just now',
    minutesAgo: 'minutes ago',
    hoursAgo: 'hours ago',
    daysAgo: 'days ago',
    monthsAgo: 'months ago',
    yearsAgo: 'years ago',
  },
};

export default timeAgo;
