import Observable from '../framework/observable.js';
import { getRandomPoint } from '../mock/point.js';

const LIMIT_POINT = 20;


export default class PointsModel extends Observable {
  #points = Array.from({length: LIMIT_POINT}, getRandomPoint);

  get points() {
    return this.#points;
  }

  getPointsWithDestinations(destinations, offers) {
    const getOfferByType = (typeCurrent) => offers.find( (item) => item.type === typeCurrent);

    const getPointsAddition = (item) => ({
      ...item,
      destination: destinations.find( (destination) => destination.id === item.destination || destination.name === item.destination).name,
      offers: getOfferByType(item.type).offers.filter( (offer) => item.offers.includes(offer.id) || item.offers.map( (el) => el.id).includes(offer.id)),
    });
    return this.#points.map( getPointsAddition );
  }

  updatePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      update,
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType, update);
  }

  addPoint(updateType, update) {
    this.#points = [
      update,
      ...this.#points,
    ];

    this._notify(updateType, update);
  }

  deletePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType);
  }
}
