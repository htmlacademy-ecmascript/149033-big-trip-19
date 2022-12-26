import { getRandomInt} from '../utils.js';
const LIMIT_PRICE = 500;
const offers = [
  {
    type: 'taxi',
    offers: [
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
        id: 7,
        title: 'Switch to comfort',
        price: getRandomInt(LIMIT_PRICE)
      }
    ],
  },
  {
    type: 'bus',
    offers: [
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
      }
    ],
  },
  {
    type: 'ship',
    offers: [
      {
        id: 4,
        title: 'Add breakfast',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 7,
        title: 'Switch to comfort',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 6,
        title: 'Lunch in city',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 2,
        title: 'Add luggage',
        price: getRandomInt(LIMIT_PRICE)
      }
    ],
  },
  {
    type: 'drive',
    offers: [
      {
        id: 1,
        title: 'Order Uber',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 3,
        title: 'Rent a car',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 5,
        title: 'Book tickets',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 7,
        title: 'Switch to comfort',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 2,
        title: 'Add luggage',
        price: getRandomInt(LIMIT_PRICE)
      }
    ],
  },
  {
    type: 'flight',
    offers: [
      {
        id: 5,
        title: 'Book tickets',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 2,
        title: 'Add luggage',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 7,
        title: 'Switch to comfort',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 4,
        title: 'Add breakfast',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 6,
        title: 'Lunch in city',
        price: getRandomInt(LIMIT_PRICE)
      }
    ],
  },
  {
    type: 'check-in',
    offers: [
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
        id: 7,
        title: 'Switch to comfort',
        price: getRandomInt(LIMIT_PRICE)
      },
    ],
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: 2,
        title: 'Add luggage',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 7,
        title: 'Switch to comfort',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 4,
        title: 'Add breakfast',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 6,
        title: 'Lunch in city',
        price: getRandomInt(LIMIT_PRICE)
      },
    ],
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 2,
        title: 'Add luggage',
        price: getRandomInt(LIMIT_PRICE)
      },
      {
        id: 7,
        title: 'Switch to comfort',
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
      }
    ],
  },
];

const getOffers = () => offers;

export {getOffers};
