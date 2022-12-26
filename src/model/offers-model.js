
import {getOffers} from '../mock/offer.js';

export default class OffersModel {
  constructor() {
    this.offers = getOffers();
  }

  getOffers() {
    return this.offers;
  }

}
