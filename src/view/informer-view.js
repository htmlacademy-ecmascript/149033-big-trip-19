import AbstractView from '../framework/view/abstract-view';
import dayjs from 'dayjs';

const MAX_POINTS = 3;
const FIRST_INDEX = 0;

const createTripInfoTemplate = (pointsDetailed) => {
  const pointsCount = pointsDetailed.length;
  const setEllipsis = () => {
    if(pointsCount > MAX_POINTS) {
      return '...&nbsp;&mdash;&nbsp;';
    }
    if(pointsCount === MAX_POINTS) {
      return `${pointsDetailed[MAX_POINTS - 2]?.destination}&nbsp;&mdash;&nbsp;`;
    }
    return '';
  };
  const getTotalPrice = () => pointsDetailed.reduce( (sum, point) => {
    const sumCurrentOffers = point.offers.reduce( (sumOffer, offer ) => sumOffer + offer.price, 0);
    return sum + point.basePrice + sumCurrentOffers;
  }, 0);
  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${pointsDetailed[FIRST_INDEX]?.destination || ''}&nbsp;&mdash;&nbsp;${setEllipsis()}${pointsDetailed[pointsCount - 1]?.destination || ''}</h1>
      <p class="trip-info__dates">${dayjs(pointsDetailed[FIRST_INDEX]?.dateFrom).format('D MMM') || ''}&nbsp;&mdash;&nbsp;${dayjs(pointsDetailed[pointsCount - 1]?.dateTo).format('D MMM') || ''}</p>
    </div>
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${getTotalPrice()}</span>
    </p>
  </section>`;
};

export default class InformerView extends AbstractView {
  #pointsDetailed = [];

  constructor({pointsWithDestinationsOffers}) {
    super();
    this.#pointsDetailed = pointsWithDestinationsOffers;
  }

  get template() {
    return createTripInfoTemplate( this.#pointsDetailed);
  }
}
