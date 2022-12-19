import dayjs from 'dayjs';

const DATE_SERVICE_FORMAT = 'YYYY-MM-DD';
const TIME_SERVICE_FORMAT = 'hh:mm';
const DATE_FORMAT = 'DD MMM';
const MINUTS_IN_HOUR = 60;
const MIN_RANDOM_INT = 1;
const MAX_RANDOM_INT = 20;

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getDayMonth = (strDate) => strDate ? dayjs(strDate).format(DATE_FORMAT) : '';
const getDateFromStr = (strDate) => strDate ? dayjs(strDate).format(DATE_SERVICE_FORMAT) : '';
const getTimeFromStr = (strDate) => strDate ? dayjs(strDate).format(TIME_SERVICE_FORMAT) : '';
const getDiffTime = (dateFrom, dateTo) => {
  const diff = dayjs(dateTo).diff(dayjs(dateFrom), 'minutes');

  const hour = Math.trunc( diff / MINUTS_IN_HOUR );
  const strHour = hour !== 0 ? hour.toString().padStart(2, '0').concat('H') : '';

  const minute = diff % MINUTS_IN_HOUR ;
  const strMinute = minute !== 0 ? minute.toString().padStart(2, '0').concat('M') : '';

  return `${strHour} ${strMinute}`;
};
const getDateLocale = (date) => dayjs(date).format('YYYY-MM-DDThh:mm');

const getRandomInt = (max = MAX_RANDOM_INT, min = MIN_RANDOM_INT) => Math.floor(Math.random() * (Math.abs(max - min) + 1)) + min;

const getRandomBoolean = () => Math.floor(Math.random() * 2) === 0;

export {getRandomArrayElement, getRandomInt, getRandomBoolean, getDateFromStr, getTimeFromStr, getDayMonth, getDiffTime, getDateLocale};
