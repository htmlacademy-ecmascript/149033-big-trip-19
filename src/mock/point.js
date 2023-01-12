import { getRandomArrayElement, getRandomInt, getRandomBoolean } from '../utils/common.js';

const LIMIT_PRICE = 3000;

const mockPoints = [
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2023-01-11T10:30:56.845Z',
    dateTo: '2023-01-13T11:00:13.375Z',
    destination: 1,
    isFavorite: getRandomBoolean(),
    offers:  [1,7],
    type: 'taxi',
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2023-01-18T12:25:56.845Z',
    dateTo: '2023-01-18T13:35:13.375Z',
    destination: 3,
    isFavorite: getRandomBoolean(),
    offers:  [3,5],
    type: 'bus',
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2023-01-18T14:30:56.845Z',
    dateTo: '2023-01-18T16:05:13.375Z',
    destination: 1,
    isFavorite: getRandomBoolean(),
    offers:  [7,6,2],
    type: 'ship',
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2023-01-18T16:20:56.845Z',
    dateTo: '2023-01-18T17:00:13.375Z',
    destination: 3,
    isFavorite: getRandomBoolean(),
    offers:  [1,5,7,2],
    type: 'drive',
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2023-01-19T01:14:20.375Z',
    dateTo: '2023-01-19T13:00:56.845Z',
    destination: 3,
    isFavorite: getRandomBoolean(),
    offers:  [5,2,7,4],
    type: 'flight',
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2023-01-19T16:00:56.845Z',
    dateTo: '2023-01-19T17:00:13.375Z',
    destination: 2,
    isFavorite: getRandomBoolean(),
    offers:  [2,3,4],
    type: 'check-in',
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2023-01-19T18:00:56.845Z',
    dateTo: '2023-01-19T19:00:13.375Z',
    destination: 1,
    isFavorite: getRandomBoolean(),
    offers:  [2,7,4,6],
    type: 'sightseeing',
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2023-01-20T08:25:56.845Z',
    dateTo: '2023-01-20T09:25:13.375Z',
    destination: 3,
    isFavorite: getRandomBoolean(),
    offers:  [7,3,4],
    type: 'restaurant',
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2023-01-20T11:15:56.845Z',
    dateTo: '2023-01-20T12:15:13.375Z',
    destination: 2,
    isFavorite: getRandomBoolean(),
    offers:  [1,3,7,2],
    type: 'drive',
  },

];

const getRandomPoint = () => getRandomArrayElement(mockPoints);

const getMockPoints = () => mockPoints;

export {getRandomPoint, getMockPoints};
