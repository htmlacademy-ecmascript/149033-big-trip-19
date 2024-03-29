import Observable from '../framework/observable.js';

export default class DestinationsModel extends Observable {
  #destinations = [];
  #destinationsApiService = null;

  constructor({destinationsApiService}) {
    super();
    this.#destinationsApiService = destinationsApiService;

  }

  get destinations() {
    return this.#destinations;
  }

  async init() {
    try {
      this.#destinations = await this.#destinationsApiService.destinations;

    } catch(err) {
      this.#destinations = [];
    }
    return this.#destinations;
  }
}
