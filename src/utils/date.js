/**
 * 日期初始化
 */
const dateInit = () => {
  const DATE = new Date();
  // 今年
  const year = DATE.getFullYear();
  // 今月
  const month = DATE.getMonth() + 1;
  // 今日
  const today = getToDay();
  // 当月所有日
  const days = getEveryDay();
  // 星期
  const week = getWeek();

  return {
    year,
    month,
    today,
    days,
    week,
  };
};

/**
 * 获取今天 - today
 * @returns today
 */
const getToDay = () => {
  const DATE = new Date();
  return DATE.getDate();
};

/**
 * 获取当月1号的星期 - week
 * @returns week
 */
const getWeek = () => {
  const DATE = new Date();
  DATE.setDate(1);
  const thisWeek = DATE.getDay();
  if (thisWeek === 0) {
    return 7;
  } else {
    return thisWeek;
  }
};

/**
 * 获取当月每日,输出为数组
 */
const getEveryDay = () => {
  const DATE = new Date();
  const year = DATE.getFullYear();
  const month = DATE.getMonth() + 1;
  //设置月份
  const dayArry = [];
  //获取月份的最后一天
  const day = new Date(year, month, 0).getDate();

  for (let i = 1; i <= day; i++) {
    dayArry.push(i);
  }

  return dayArry;
};

/**
 * 更新日期
 * @param {Number} year 今年年份
 * @param {Number} newMonth 需要更新的月份
 */
const dateUpdate = (year, newMonth) => {
  // 更新年月
  // 如果更新后的月份大于12,代表是新的一年,则年份加一,月份重置为1月
  if (newMonth > 12) {
    // 重置月份
    newMonth = 1;
    // 重置年份
    year += 1;
  } else if (newMonth < 1) {
    // 月份小于1,代表是前一年,则年份-1,月份重置为12月
    newMonth = 12;
    year -= 1;
  }
  // 获取最后一天
  const day = new Date(year, newMonth, 0).getDate();
  const dayArry = [];

  for (let i = 1; i <= day; i++) {
    dayArry.push(i);
  }
  // 更新起始星期
  // js Date 月份从0开始, 需要减1
  const newWeek = new Date(year, newMonth - 1, 1).getDay();
  let week;
  if (newWeek === 0) {
    week = 7;
  } else {
    week = newWeek;
  }

  return {
    year,
    month: newMonth,
    days: dayArry,
    week,
  };
};

/**
 * 星期几?
 * @param {Number} year
 * @param {Number} month
 * @param {Number} day
 */
const whatWeek = (year, month, day) => {
  const date = `${year}-${month}-${day}`;
  const week = new Date(date).getDay();
  if (week === 0) return 7;
  else return week;
};

export { dateInit, getToDay, getWeek, getEveryDay, dateUpdate, whatWeek };
