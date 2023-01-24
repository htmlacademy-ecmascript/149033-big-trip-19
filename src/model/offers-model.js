import Observable from '../framework/observable.js';
import {getOffers} from '../mock/offer.js';

export default class OffersModel extends Observable{
  #offers = getOffers();

  getOffers() {
    return this.#offers;
  }

}
