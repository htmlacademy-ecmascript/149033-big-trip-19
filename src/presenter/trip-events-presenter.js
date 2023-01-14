import {render, RenderPosition} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import EventsListView from '../view/events-list-view.js';
import ListEmptyView from '../view/list-empty-view.js';
import PointPresenter from './point-presenter.js';

const LIMIT_POINTS = 5;

export default class TripEventsPresenter {
  #routeListComponent = new EventsListView();
  #tripEventsContainer = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;
  #offers = null;
  #destinations = null;
  #points = [];
  #listEmptyComponent = new ListEmptyView();
  #sortView = new SortView();

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
    this.#renderTrip();
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#routeListComponent.element,
      offers: this.#offers,
      destinations: this.#destinations,
    });
    pointPresenter.init(point);
  }

  #renderSort() {
    render(this.#sortView, this.#tripEventsContainer);
  }

  #renderEventsList() {
    render(this.#routeListComponent, this.#tripEventsContainer);
    for (let i = 0; i < LIMIT_POINTS; i++) {
      this.#renderPoint(this.#points[i]);
    }
  }

  #renderNoPoints() {
    render( this.#listEmptyComponent, this.#tripEventsContainer, RenderPosition.AFTERBEGIN);
  }

  #renderTrip() {
    if( this.#points.length === 0 ){
      this.#renderNoPoints();
      return;
    }
    this.#renderSort();
    this.#renderEventsList();
  }
}
