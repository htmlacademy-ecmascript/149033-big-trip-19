import {getRandomPoint} from '../mock/point.js';
import { getOfferById } from '../mock/offer.js';
import { getDestinationById } from '../mock/destination.js';

const POINT_COUNT = 8;

export default class PointsModel {
  points = Array.from({length: POINT_COUNT}, getRandomPoint);

  getPoints() {
    this.points.forEach((item) => {
      item.destination = getDestinationById(item.destination);
      item.offers = getOfferById(item.offers);
    });

    return this.points;
  }
}
