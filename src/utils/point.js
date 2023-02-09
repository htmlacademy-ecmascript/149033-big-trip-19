import dayjs from 'dayjs';

const DATE_SERVICE_FORMAT = 'YYYY-MM-DD';
const TIME_SERVICE_FORMAT = 'hh:mm';
const DATE_FORMAT = 'DD MMM';
const MINUTES_IN_HOUR = 60;

const getDayMonth = (strDate) => strDate ? dayjs(strDate).format(DATE_FORMAT) : '';
const getDateFromStr = (strDate) => strDate ? dayjs(strDate).format(DATE_SERVICE_FORMAT) : '';
const getTimeFromStr = (strDate) => strDate ? dayjs(strDate).format(TIME_SERVICE_FORMAT) : '';
const getDiffTime = (dateFrom, dateTo) => {
  const diff = dayjs(dateTo).diff(dayjs(dateFrom), 'minutes');

  const hour = Math.trunc( diff / MINUTES_IN_HOUR );
  const strHour = hour !== 0 ? hour.toString().padStart(2, '0').concat('H') : '';

  const minute = diff % MINUTES_IN_HOUR ;
  const strMinute = minute !== 0 ? minute.toString().padStart(2, '0').concat('M') : '';

  return `${strHour} ${strMinute}`;
};
const getDateLocale = (date) => dayjs(date).format('YYYY-MM-DDThh:mm');
const getDateHumanize = (date) => dayjs(date).format('DD/MM/YY hh:mm');

function isFuturePoint(dueDate) {
  return dueDate && dayjs().isBefore(dueDate, 'D');
}
function isPastPoint(dueDate) {
  return dueDate && dayjs().isAfter(dueDate, 'D');
}

function isPresentPoint(dueDateFrom, dueDateTo) {
  return dueDateFrom && dueDateTo && ( dayjs(dueDateFrom).isSame(dayjs(), 'D') || isPastPoint(dueDateFrom) ) && ( dayjs(dueDateTo).isSame(dayjs(), 'D') || isFuturePoint(dueDateTo) );
}

function getWeightForNullDate(dateA, dateB) {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
}

function sortPointUp(pointA, pointB) {
  const weight = getWeightForNullDate(pointA.dateFrom, pointB.dateFrom);

  return weight ?? dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom));
}

function sortPointDownPrice(pointA, pointB) {
  return pointB.basePrice - pointA.basePrice;
}

function sortPointDownTime(pointA, pointB) {
  return dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom)) - dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
}

export { getDateFromStr, getTimeFromStr, getDayMonth, getDiffTime, getDateLocale, getDateHumanize, isFuturePoint, isPresentPoint, isPastPoint, sortPointUp, sortPointDownPrice, sortPointDownTime};
