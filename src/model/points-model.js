import { getRandomPoint } from '../mock/point.js';
import { getOffers } from '../mock/offer.js';
import { getDestinations } from '../mock/destination.js';
const LIMIT_POINT = 4;
const destinationsList = getDestinations();
const offersList = getOffers();
export default class PointsModel {
  constructor() {
    this.points = Array.from({length: LIMIT_POINT}, getRandomPoint);

  }

  getPoints() {
    this.points.forEach( (item) => {
      item.destination = destinationsList[item.destination];
      item.offers = offersList[item.offers];
    });
    console.log(this.points);
    return this.points;
  }

}
