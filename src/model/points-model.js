import Observable from '../framework/observable.js';
import { getRandomPoint } from '../mock/point.js';

const LIMIT_POINT = 20;


export default class PointsModel extends Observable {
  #pointsApiService = null;

  #points = Array.from({length: LIMIT_POINT}, getRandomPoint);

  constructor({pointsApiService}) {
    super();
    this.#pointsApiService = pointsApiService;

    this.#pointsApiService.points.then((points) => {
      console.log(points.map(this.#adaptToClient));

    });
  }

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

  #adaptToClient(point) {
    const adaptedPoint = {...point,
      dateFrom: point['date_from'] !== null ? new Date(point['date_from']) : point['date_from'],
      dateTo: point['date_to'] !== null ? new Date(point['date_to']) : point['date_to'],
      basePrice: point['base_price'],
      isFavorite: point['is_favorite'],
    };

    delete adaptedPoint['date_from'];
    delete adaptedPoint['date_to'];
    delete adaptedPoint['base_price'];
    delete adaptedPoint['is_favorite'];

    return adaptedPoint;
  }
}
