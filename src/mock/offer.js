import { getRandomInt } from '../utils.js';
import { getRandomArrayElement } from '../utils.js';
const LIMIT_PRICE = 500;
const mockOffer = {
  1: {
    title: 'Order Uber',
    price: getRandomInt(LIMIT_PRICE)
  },
  2: {
    title: 'Add luggage',
    price: getRandomInt(LIMIT_PRICE)
  },
  3: {
    title: 'Rent a car',
    price: getRandomInt(LIMIT_PRICE)
  },
  4: {
    title: 'Add breakfast',
    price: getRandomInt(LIMIT_PRICE)
  },
  5: {
    title: 'Book tickets',
    price: getRandomInt(LIMIT_PRICE)
  },
  6: {
    title: 'Lunch in city',
    price: getRandomInt(LIMIT_PRICE)
  },
  7: {
    title: 'Add luggage',
    price: getRandomInt(LIMIT_PRICE)
  },
  8: {
    title: 'Switch to comfort',
    price: getRandomInt(LIMIT_PRICE)
  },
};

const getRandomOffer = () => getRandomArrayElement(mockOffer);
const getRandomIdOffer = () => Number(getRandomArrayElement(Object.keys(mockOffer)));
const getOfferById = (id) => mockOffer[id];
const getOffers = () => mockOffer;

export {getRandomOffer, getRandomIdOffer, getOfferById, getOffers};
