import AbstractView from '../framework/view/abstract-view.js';
import { getDateFromStr, getTimeFromStr, getDayMonth, getDiffTime, getDateLocale } from '../utils/point.js';


const createItemOfferTemplate = (offers) =>
  offers.map( (item) =>
    `<li class="event__offer">
      <span class="event__offer-title">${item.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${item.price}</span>
    </li>`).join('');

function createPointRouteTemplate(point) {
  const { basePrice, dateFrom, dateTo, destination, isFavorite, type } = point;

  const favoriteClassName = isFavorite ? 'event__favorite-btn--active' : '';
  return `
  <li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime=${getDateFromStr(dateFrom)}>${getDayMonth(dateFrom)}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} ${destination}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime=${getDateLocale(dateFrom)}>${getTimeFromStr(dateFrom)}</time>
        &mdash;
        <time class="event__end-time" datetime=${getDateLocale(dateTo)}>${getTimeFromStr(dateTo)}</time>
      </p>
      <p class="event__duration">${getDiffTime(dateFrom, dateTo)}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
    ${createItemOfferTemplate(point.offers)}
    </ul>
    <button class="event__favorite-btn ${favoriteClassName}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>
`;}

export default class PointView extends AbstractView{
  #point = null;
  #handleEditClick = null;
  #handleFavoriteClick = null;

  constructor({point, onEditClick, onFavoriteClick }) {
    super();
    this.#point = point;
    this.#handleEditClick = onEditClick;
    this.#handleFavoriteClick = onFavoriteClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createPointRouteTemplate(this.#point);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };
}

