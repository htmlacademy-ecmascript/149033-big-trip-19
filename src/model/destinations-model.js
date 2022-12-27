import { getDestinations } from '../mock/destination.js';

export default class DestinationsModel {
  #destinations = getDestinations();

  getDestinations() {
    return this.#destinations;
  }

}
