import { getDestinations } from '../mock/destination.js';

export default class DestinationsModel {
  constructor() {
    this.destinations = getDestinations();
  }

  getDestinations() {
    return this.destinations;
  }

}
