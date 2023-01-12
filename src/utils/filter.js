import { FilterType } from '../const.js';
import { isPastPoint, isFuturePoint, isPesentPoint } from '../utils/point.js';

const filter = {
  [FilterType.EVERYTHING]: (points) => Array.isArray(points) && points.length,
  [FilterType.FUTURE]: (points) => points.find((point) => isFuturePoint(point.dateFrom)),
  [FilterType.PRESENT]: (points) => points.find((point) => isPesentPoint(point.dateFrom, point.dateTo)),
  [FilterType.PAST]: (points) => points.find((point) => isPastPoint(point.dateTo)),
};

export {filter};
