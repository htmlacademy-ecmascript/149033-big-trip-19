import {createElement} from '../render.js';
import { getDateHumanize } from '../utils.js';
import { TYPE } from '../const.js';
import dayjs from 'dayjs';

const createTypesTemplate = (listType) => listType.map((item) =>
  `<div class="event__type-item">
    <input id="event-type-${item}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item}">
    <label class="event__type-label  event__type-label--${item}" for="event-type-${item}-1">${item}</label>
  </div>`
).join('');
const createDestinationListTemplate = (listDestinations) =>
  `<datalist id="destination-list-1">
  ${listDestinations.map((item) => `<option value="Amsterdam">${item.name}</option>`).join('')}
  </datalist>`;

const getlastWord = (str) => str.trim().split(' ').slice(-1);

const isCheckedOffer = (offer, offersCurrent) =>
  offersCurrent.map( (item) => item.id).includes(offer.id) ? 'checked' : '';
const createOffersTemplate = (offersAll, offersCurrent) => offersAll.map( (item) =>
  `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${getlastWord(item.title)}-1" type="checkbox" name="event-offer-${getlastWord(item.title)}" ${isCheckedOffer(item, offersCurrent)}>
    <label class="event__offer-label" for="event-offer-${getlastWord(item.title)}-1">
      <span class="event__offer-title">${item.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${item.price}</span>
    </label>
  </div>`
).join('');

const creatPhotosContainerTemplate = (destination) =>
  `<div class="event__photos-container">
    <div class="event__photos-tape">
      ${destination.pictures.map((item) => `<img class="event__photo" src="${item.src}" alt="Event photo">`).join('')}
    </div>
  </div>`;

const showSectionDestination = (destination) =>
  destination.description !== '' ? `<section class="event__section  event__section--destination">
                            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                            <p class="event__destination-description">${destination.description}</p>
                            ${creatPhotosContainerTemplate(destination)}
                          </section>` : '';
const currentDate = dayjs();
const pointDefault = {
  basePrice: 0,
  dateFrom: currentDate,
  dateTo: currentDate,
  destination: {
    description: '',
    name: '',
    pictures: [{src: ''}],
  },
  isFavorite: false,
  offers:  [{
    id: null,
    title: '',
    price: 0,
  }],
  type: TYPE[0],
};

function createEditPointTemplate({ listOffers, listDestinations, listType, point = pointDefault}) {
  const { basePrice, dateFrom, dateTo, destination, offers, type } = point;
  const { name } = destination;
  return `
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${createTypesTemplate(listType)}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name}" list="destination-list-1">
          ${createDestinationListTemplate(listDestinations)}
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${getDateHumanize(dateFrom)}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${getDateHumanize(dateTo)}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
        ${createOffersTemplate(listOffers, offers)}
        </div>
      </section>
      ${showSectionDestination(destination)}
    </section>
  </form>
`;}

export default class EditPoint {
  constructor(point) {
    this.point = point;
  }

  getTemplate() {
    return createEditPointTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
