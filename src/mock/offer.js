import { getRandomInt, getRandomArrayElement } from '../utils.js';

const idsByType = [
  {
    type: 'taxi',
    offers: [1,2,7],
  },
  {
    type: 'bus',
    offers: [3,4,5,6],
  },
  {
    type: 'ship',
    offers: [4,7,6,2],
  },
  {
    type: 'drive',
    offers: [1,3,5,7,2],
  },
  {
    type: 'flight',
    offers: [5,2,7,4],
  },
  {
    type: 'check-in',
    offers: [2,3,4,7],
  },
  {
    type: 'sightseeing',
    offers: [2,7,4,6],
  },
  {
    type: 'restaurant',
    offers: [2,7,3,4],
  },
];
const LIMIT_PRICE = 500;

const offersAll = [
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
const getRandomOffer = () => getRandomArrayElement(offersAll);
const getRandomIdOffer = () => getRandomArrayElement(offersAll).id;

const getRandomIdsByType = () => idsByType.map( (itemId) => ({
  ...itemId,
  offers: itemId.offers.slice(getRandomInt( itemId.offers.length) ),
}) );

const offersByType = idsByType.map( (itemId) => ({
  ...itemId,
  offers: itemId.offers.map( (item) => offersAll.find( (offer) => offer.id === item))
}) );

const getOfferById = (id) => offersAll[id];
const getOffers = () => offersByType;

export {getRandomOffer, getRandomIdOffer, getOfferById, getOffers, getRandomIdsByType};
