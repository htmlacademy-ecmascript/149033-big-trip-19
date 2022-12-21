import { getRandomPoint } from '../mock/point.js';
import { getOffers } from '../mock/offer.js';
import { getDestinations } from '../mock/destination.js';
const LIMIT_POINT = 8;
const destinationsList = getDestinations();
const offersList = getOffers();
const getPointsAddition = (item) => ({
  ...item,
  destination: destinationsList[item.destination],
  offers: offersList[item.offers],
});

export default class PointsModel {
  constructor() {
    this.points = Array.from({length: LIMIT_POINT}, getRandomPoint);
  }

  getPoints() {
    return this.points.map( getPointsAddition );
  }

  getDestinations() {
    return destinationsList;
  }

  getOffers() {
    return offersList;
  }
}
