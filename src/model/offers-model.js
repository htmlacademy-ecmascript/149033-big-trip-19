import Observable from '../framework/observable.js';
import {getOffers} from '../mock/offer.js';
import {UpdateType} from '../const.js';

export default class OffersModel extends Observable{
  #offers = getOffers();
  #offersApiService = null;
  // #offers = [];

  constructor({offersApiService}) {
    super();
    this.#offersApiService = offersApiService;

  }

  get offers() {
    return this.#offers;
  }

  // async init() {
  //   try {
  //     this.#offers_ = await this.#offersApiService.offers;

  //   } catch(err) {
  //     this.#offers = [];
  //   }
  //   return this.#offers;
  // }

  // init() {
  //   this.#offers = getOffers();
  // }
}
