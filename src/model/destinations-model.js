import Observable from '../framework/observable.js';
import { getDestinations } from '../mock/destination.js';

export default class DestinationsModel extends Observable {
  #destinations = getDestinations();

  get destinations() {
    return this.#destinations;
  }

}
