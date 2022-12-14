import { getRandomArrayElement, getRandomInt } from '../utils/common.js';

const LIMIT_PICTURES_LENGTH = 20;
const descriptionPictures = [
  'Chamonix parliament building',
  'Lyon parliament building',
  'Strasbourg parliament building',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus',
];
const getRandomPictures = () =>
  Array.from({ length: getRandomInt(LIMIT_PICTURES_LENGTH) }, () => ({
    src: `https://picsum.photos/200/300?random=${getRandomInt()}`,
    description: getRandomArrayElement(descriptionPictures),
  }));

const mockDestination = [
  {
    id: 1,
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: getRandomPictures(),
  },
  {
    id: 2,
    description: 'Lyon, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Lyon',
    pictures: getRandomPictures(),
  },
  {
    id: 3,
    description: 'Strasbourg, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Strasbourg',
    pictures: getRandomPictures(),
  },
];

const getRandomDestination = () => getRandomArrayElement(mockDestination);
const getRandomIdDestination = () =>
  getRandomArrayElement(
    Object.keys(mockDestination).map((item) => Number(item))
  );
const getDestinationById = (idInput) => mockDestination.find( (item) => item.id === idInput);
const getDestinations = () => mockDestination;

export {
  getRandomDestination,
  getRandomIdDestination,
  getDestinationById,
  getDestinations,
};
