import { getRandomArrayElement, getRandomInt, getRandomBoolean } from '../utils.js';
import { getRandomIdDestination } from './destination.js';
import { getRandomIdOffer } from './offer.js';
import { TYPE } from '../const.js';

const LIMIT_PRICE = 3000;

const mockPoints = [
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2019-07-18T10:30:56.845Z',
    dateTo: '2019-07-18T11:00:13.375Z',
    destination: 1,
    isFavorite: getRandomBoolean(),
    offers: 2,
    type: getRandomArrayElement(TYPE),
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2019-07-18T12:25:56.845Z',
    dateTo: '2019-07-18T13:35:13.375Z',
    destination: 3,
    isFavorite: getRandomBoolean(),
    offers: 2,
    type: getRandomArrayElement(TYPE),
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2019-07-18T14:30:56.845Z',
    dateTo: '2019-07-18T16:05:13.375Z',
    destination: 1,
    isFavorite: getRandomBoolean(),
    offers: 2,
    type: getRandomArrayElement(TYPE),
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2019-07-18T16:20:56.845Z',
    dateTo: '2019-07-18T17:00:13.375Z',
    destination: 3,
    isFavorite: getRandomBoolean(),
    offers: 2,
    type: getRandomArrayElement(TYPE),
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2019-07-19T01:14:20.375Z',
    dateTo: '2019-07-19T13:00:56.845Z',
    destination: 3,
    isFavorite: getRandomBoolean(),
    offers: 1,
    type: getRandomArrayElement(TYPE),
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2019-07-19T16:00:56.845Z',
    dateTo: '2019-07-19T17:00:13.375Z',
    destination: 2,
    isFavorite: getRandomBoolean(),
    offers: 3,
    type: getRandomArrayElement(TYPE),
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2019-07-19T18:00:56.845Z',
    dateTo: '2019-07-19T19:00:13.375Z',
    destination: 1,
    isFavorite: getRandomBoolean(),
    offers: 2,
    type: getRandomArrayElement(TYPE),
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2019-07-20T08:25:56.845Z',
    dateTo: '2019-07-20T09:25:13.375Z',
    destination: getRandomIdDestination(),
    isFavorite: getRandomBoolean(),
    offers: getRandomIdOffer(),
    type: getRandomArrayElement(TYPE),
  },
  {
    basePrice: getRandomInt(LIMIT_PRICE),
    dateFrom: '2019-07-20T11:15:56.845Z',
    dateTo: '2019-07-20T12:15:13.375Z',
    destination: getRandomIdDestination(),
    isFavorite: getRandomBoolean(),
    offers: getRandomIdOffer(),
    type: getRandomArrayElement(TYPE),
  },

];

const getRandomPoint = () => getRandomArrayElement(mockPoints);

const getMockPoints = () => mockPoints;

export {getRandomPoint, getMockPoints};
