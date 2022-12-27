import SortView from '../view/sort-view.js';
import ListRouteView from '../view/list-route-view.js';
import PointRoute from '../view/point-route-view.js';
import EditPoint from '../view/edit-point-view.js';
import { render } from '../render.js';
import { TYPE } from '../const.js';

const NUM_EDIT_POINT = 0;
const LIMIT_POINTS = 20;

export default class TripEventsPresenter {
  #routeListComponent = new ListRouteView();
  #tripEventsContainer = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;
  #offers = null;
  #destinations = null;
  #points = [];

  constructor(tripEventsElement, pointsModel, offersModel, destinationsModel) {
    this.#tripEventsContainer = tripEventsElement;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  init() {

    this.#offers = this.#offersModel.getOffers();
    this.#destinations = this.#destinationsModel.getDestinations();
    this.#points = [...this.#pointsModel.getPointsWithDestinations(this.#destinations, this.#offers)];

    render(new SortView(), this.#tripEventsContainer);
    render(new EditPoint({listOffers: this.#offers, listDestinations: this.#destinations, listType: TYPE}), this.#tripEventsContainer);
    render(this.#routeListComponent, this.#tripEventsContainer);
    for (let i = 0; i < LIMIT_POINTS; i++) {
      if( i === NUM_EDIT_POINT ) {
        render(new EditPoint({listOffers: this.#offers, listDestinations: this.#destinations, listType: TYPE, point: this.#points[i]}), this.#routeListComponent.getElement());
      } else {
        render(new PointRoute(this.#points[i]), this.#routeListComponent.getElement());
      }
    }
  }
}
