const MIN_RANDOM_INT = 1;
const MAX_RANDOM_INT = 20;

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];


const getRandomInt = (max = MAX_RANDOM_INT, min = MIN_RANDOM_INT) => Math.floor(Math.random() * (Math.abs(max - min) + 1)) + min;

const getRandomBoolean = () => Math.floor(Math.random() * 2) === 0;

export {getRandomArrayElement, getRandomInt, getRandomBoolean};
