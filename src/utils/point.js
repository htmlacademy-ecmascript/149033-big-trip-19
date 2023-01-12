import dayjs from 'dayjs';

const DATE_SERVICE_FORMAT = 'YYYY-MM-DD';
const TIME_SERVICE_FORMAT = 'hh:mm';
const DATE_FORMAT = 'DD MMM';
const MINUTS_IN_HOUR = 60;

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
const getDateHumanize = (date) => dayjs(date).format('DD/MM/YY hh:mm');

function isFuturePoint(dueDate) {
  return dueDate && dayjs().isBefore(dueDate, 'D');
}
function isPastPoint(dueDate) {
  return dueDate && dayjs().isAfter(dueDate, 'D');
}

function isPesentPoint(dueDateFrom, dueDateTo) {
  return dueDateFrom && dueDateTo && ( dayjs(dueDateFrom).isSame(dayjs(), 'D') || isPastPoint(dueDateFrom) ) && ( dayjs(dueDateTo).isSame(dayjs(), 'D') || isFuturePoint(dueDateTo) );
}

export { getDateFromStr, getTimeFromStr, getDayMonth, getDiffTime, getDateLocale, getDateHumanize, isFuturePoint, isPesentPoint, isPastPoint};
