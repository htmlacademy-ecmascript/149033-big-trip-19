import { getRandomInt } from '../utils.js';
import { getRandomArrayElement } from '../utils.js';

const LIMIT_PRICE = 500;
const offers = [
  {
    id: 1,
    title: 'Order Uber',
    price: getRandomInt(LIMIT_PRICE)
  },
  {
    id: 2,
    title: 'Add luggage',
    price: getRandomInt(LIMIT_PRICE)
  },
  {
    id: 3,
    title: 'Rent a car',
    price: getRandomInt(LIMIT_PRICE)
  },
  {
    id: 4,
    title: 'Add breakfast',
    price: getRandomInt(LIMIT_PRICE)
  },
  {
    id: 5,
    title: 'Book tickets',
    price: getRandomInt(LIMIT_PRICE)
  },
  {
    id: 6,
    title: 'Lunch in city',
    price: getRandomInt(LIMIT_PRICE)
  },
  {
    id: 7,
    title: 'Switch to comfort',
    price: getRandomInt(LIMIT_PRICE)
  },
];

const getRandomOffer = () => getRandomArrayElement(offers);
const getRandomIdOffer = () => getRandomArrayElement(offers).id;
const getOfferById = (id) => offers[id];
const getOffers = () => offers;

export {getRandomOffer, getRandomIdOffer, getOfferById, getOffers};
