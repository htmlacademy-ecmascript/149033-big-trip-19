import { getRandomPoint, getMockPoints } from '../mock/point.js';
import { getOffers } from '../mock/offer.js';
import { getDestinations } from '../mock/destination.js';

export default class PointsModel {

  constructor() {
    this.destinationsList = getDestinations();
    this.offersList = getOffers();
    this.points = Array.from({length: getMockPoints().length}, getRandomPoint);
  }

  getPoints() {
    this.points.forEach( (item) => {
      item.destination = this.destinationsList[item.destination];
      item.offers = this.offersList[item.offers];
    });

    return this.points;
  }

}
