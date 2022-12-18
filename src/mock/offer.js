import { getRandomInt } from '../utils.js';
import { getRandomArrayElement } from '../utils.js';
const LIMIT_PRICE = 500;
const mockOffer = {
  1: {
    title: 'Upgrade to a business class',
    price: getRandomInt(LIMIT_PRICE)
  },
  2: {
    title: 'Do nulla fugiat proident ipsum.',
    price: getRandomInt(LIMIT_PRICE)
  },
  3: {
    title: 'Enim id ipsum cupidatat non non reprehenderit.',
    price: getRandomInt(LIMIT_PRICE)
  },
};

const getRandomOffer = () => getRandomArrayElement(mockOffer);
const getRandomIdOffer = () => getRandomArrayElement(Object.keys(mockOffer));
const getOfferById = (id) => mockOffer[id];

export {getRandomOffer, getRandomIdOffer, getOfferById};
