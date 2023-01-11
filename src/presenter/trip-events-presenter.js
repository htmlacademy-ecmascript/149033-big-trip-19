import {render, replace} from '../framework/render.js';
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
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceEditPointToPoint.call(this);
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new Point({
      point,
      onEditClick: () => {
        replacePointToEditPoint.call(this);
        document.addEventListener('keydown', escKeyDownHandler);
      }});
    const editPointComponent = new EditPoint( {
      listOffers: this.#offers,
      listDestinations: this.#destinations,
      listType: TYPE,
      point,
      onFormSubmit: () => {
        replaceEditPointToPoint.call(this);
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onEditClick: () => {
        replaceEditPointToPoint.call(this);
        document.removeEventListener('keydown', escKeyDownHandler);
      },

    } );

    function replacePointToEditPoint() {
      replace(editPointComponent, pointComponent);
    }
    function replaceEditPointToPoint() {
      replace(pointComponent, editPointComponent);
    }
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
