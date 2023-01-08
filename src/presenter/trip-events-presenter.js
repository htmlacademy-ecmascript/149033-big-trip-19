import {render} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import EventsListView from '../view/events-list-view.js';
import Point from '../view/point-view.js';
import EditPoint from '../view/edit-point-view.js';
import { TYPE } from '../const.js';
import ListEmptyView from '../view/list-empty-view.js';


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
  #listEmptyComponent = null;

  constructor(tripEventsElement, pointsModel, offersModel, destinationsModel) {
    this.#tripEventsContainer = tripEventsElement;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  init() {
    this.#listEmptyComponent = new ListEmptyView();
    this.#offers = this.#offersModel.getOffers();
    this.#destinations = this.#destinationsModel.getDestinations();
    this.#points = [...this.#pointsModel.getPointsWithDestinations(this.#destinations, this.#offers)];
    if( this.#points.length === 0 ){
      render( this.#listEmptyComponent, this.#tripEventsContainer);
    } else {
      this.#renderEventsList();
    }

  }

  #renderPoint(point) {
    const pointComponent = new Point(point);
    const editPointComponent = new EditPoint( {listOffers: this.#offers, listDestinations: this.#destinations, listType: TYPE, point: point}, this.#routeListComponent.element );

    const replacePointToEditPoint = () => {
      this.#routeListComponent.element.replaceChild(editPointComponent.element, pointComponent.element);
    };
    const replaceEditPointToPoint = () => {
      this.#routeListComponent.element.replaceChild(pointComponent.element, editPointComponent.element);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceEditPointToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener( 'click', () => {
      replacePointToEditPoint();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    editPointComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceEditPointToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    editPointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', (evt) => {
      evt.preventDefault();
      replaceEditPointToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    });
    render( pointComponent, this.#routeListComponent.element );
  }

  #renderEventsList() {
    render(new SortView(), this.#tripEventsContainer);
    render(this.#routeListComponent, this.#tripEventsContainer);
    for (let i = 0; i < LIMIT_POINTS; i++) {
      this.#renderPoint(this.#points[i]);
    }
  }

}
