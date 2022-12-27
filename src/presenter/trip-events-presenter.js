import SortView from '../view/sort-view.js';
import ListRouteView from '../view/list-route-view.js';
import Point from '../view/point-view.js';
import EditPoint from '../view/edit-point-view.js';
import { render } from '../render.js';
import { TYPE } from '../const.js';


const LIMIT_POINTS = 5;

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

    this.#renderRoutList();
  }

  #renderPoint(point) {
    const pointComponent = new Point(point);
    const editPointComponent = new EditPoint( {listOffers: this.#offers, listDestinations: this.#destinations, listType: TYPE, point: point}, this.#routeListComponent.element );

    const replacePointElementToEditPointElement = () => {
      this.#routeListComponent.element.replaceChild(editPointComponent.element, pointComponent.element);
    };
    const replaceEditPointElementToPointElement = () => {
      this.#routeListComponent.element.replaceChild(pointComponent.element, editPointComponent.element);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceEditPointElementToPointElement();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener( 'click', () => {
      replacePointElementToEditPointElement();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    editPointComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceEditPointElementToPointElement();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    editPointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', (evt) => {
      evt.preventDefault();
      replaceEditPointElementToPointElement();
      document.removeEventListener('keydown', escKeyDownHandler);
    });
    render( pointComponent, this.#routeListComponent.element );
  }

  #renderRoutList() {
    render(new SortView(), this.#tripEventsContainer);
    render(this.#routeListComponent, this.#tripEventsContainer);
    for (let i = 0; i < LIMIT_POINTS; i++) {
      this.#renderPoint(this.#points[i]);
    }
  }

}
