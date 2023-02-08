import InformerView from '../view/informer-view.js';
import { remove, render, RenderPosition } from '../framework/render';
import { sortPointUp } from '../utils/point.js';

export default class InformerPresenter {
  #informerContainer = null;
  #informerComponent = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;
  #points = [];
  #offers = [];
  #destinations = [];
  #pointsWithDestinationsOffers = [];

  constructor({informerContainer, pointsModel, offersModel , destinationsModel}) {
    this.#informerContainer = informerContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;

    this.#points = this.#pointsModel.points;
    this.#offers = this.#offersModel.offers;
    this.#destinations = this.#destinationsModel.destinations;

    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  init() {
    this.#points = this.#points.sort(sortPointUp);
    this.#pointsWithDestinationsOffers = this.#pointsModel.getPointsWithDestinations({offers: this.#offers, destinations: this.#destinations});
    this.#informerComponent = new InformerView({pointsWithDestinationsOffers: this.#pointsWithDestinationsOffers});

    render(this.#informerComponent, this.#informerContainer, RenderPosition.AFTERBEGIN);
  }

  #handleModelEvent = () => {
    remove(this.#informerComponent);

    this.#points = this.#pointsModel.points;
    this.#offers = this.#offersModel.offers;
    this.#destinations = this.#destinationsModel.destinations;

    this.init();
  };
}
