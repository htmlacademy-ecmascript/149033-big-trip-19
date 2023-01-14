import {render, replace, RenderPosition} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import EventsListView from '../view/events-list-view.js';
// import Point from '../view/point-view.js';
// import EditPoint from '../view/edit-point-view.js';
// import { TYPE } from '../const.js';
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
    // const escKeyDownHandler = (evt) => {
    //   if (evt.key === 'Escape' || evt.key === 'Esc') {
    //     evt.preventDefault();
    //     replaceEditPointToPoint.call(this);
    //     document.removeEventListener('keydown', escKeyDownHandler);
    //   }
    // };

    // const pointComponent = new Point({
    //   point,
    //   onEditClick: () => {
    //     replacePointToEditPoint.call(this);
    //     document.addEventListener('keydown', escKeyDownHandler);
    //   }});
    // const editPointComponent = new EditPoint( {
    //   listOffers: this.#offers,
    //   listDestinations: this.#destinations,
    //   listType: TYPE,
    //   point,
    //   onFormSubmit: () => {
    //     replaceEditPointToPoint.call(this);
    //     document.removeEventListener('keydown', escKeyDownHandler);
    //   },
    //   onEditClick: () => {
    //     replaceEditPointToPoint.call(this);
    //     document.removeEventListener('keydown', escKeyDownHandler);
    //   },

    // } );

    // function replacePointToEditPoint() {
    //   replace(editPointComponent, pointComponent);
    // }
    // function replaceEditPointToPoint() {
    //   replace(pointComponent, editPointComponent);
    // }
    // render( pointComponent, this.#routeListComponent.element );
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
