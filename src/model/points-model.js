import { getRandomPoint } from '../mock/point.js';

const LIMIT_POINT = 8;


export default class PointsModel {
  constructor() {
    this.points = Array.from({length: LIMIT_POINT}, getRandomPoint);
  }

  getPoints() {
    return this.points;
  }

  getPointsWithDestinations(destinations, offers) {

    const getOfferByType = (typeCurrent) => offers.find( (item) => item.type === typeCurrent);

    const getPointsAddition = (item) => ({
      ...item,
      destination: destinations.find( (destination) => destination.id === item.destination).name,
      offers: getOfferByType(item.type).offers.filter( (offer) => item.offers.includes(offer.id)),
    });

    return this.points.map( getPointsAddition );
  }

}
