import { getRandomArrayElement } from '../utils.js';

const mockDestination = {
  1: {
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Chamonix parliament building'
      }
    ]
  },
  2: {
    description: 'Lyon, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Lyon',
    pictures: [
      {
        src: 'https://picsum.photos/200/300?random=1',
        description: 'Lyon parliament building'
      }
    ]
  },
  3: {
    description: 'Strasbourg, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Strasbourg',
    pictures: [
      {
        src: 'https://picsum.photos/200/300?random=2',
        description: 'Strasbourg parliament building'
      }
    ]
  }
};


const getRandomDestination = () => getRandomArrayElement(mockDestination);
const getRandomIdDestination = () => getRandomArrayElement(Object.keys(mockDestination));
const getDestinationById = (id) => mockDestination[id];

export {getRandomDestination, getRandomIdDestination, getDestinationById};
