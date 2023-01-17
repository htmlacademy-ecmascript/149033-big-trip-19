import {replace, render, remove} from '../framework/render.js';
import Point from '../view/point-view.js';
import EditPoint from '../view/edit-point-view.js';
import { TYPE } from '../const.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #offers = null;
  #destinations = null;
  #pointListContainer = null;
  #point = null;
  #pointComponent = null;
  #pointEditComponent = null;

  #handleModeChange = null;
  #handleDataChange = null;
  #mode = Mode.DEFAULT;

  constructor({pointListContainer, onDataChange, onModeChange, offers, destinations}) {
    this.#offers = offers;
    this.#destinations = destinations;
    this.#pointListContainer = pointListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;

    this.#pointComponent = new Point({
      point: this.#point,
      onEditClick: this.#handlePointClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointEditComponent = new EditPoint( {
      listOffers: this.#offers,
      listDestinations: this.#destinations,
      listType: TYPE,
      point: this.#point,
      onFormSubmit: this.#handleFormSubmit,
      onEditClick: this.#handleEditPointClick,

    } );

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceEditPointToPoint();
    }
  }

  #replacePointToEditPoint() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#handleEscKeyDown);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceEditPointToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#handleEscKeyDown);
    this.#mode = Mode.DEFAULT;
  }

  #handlePointClick = () => {
    this.#replacePointToEditPoint();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(point);
    this.#replaceEditPointToPoint();
  };

  #handleEditPointClick = () => {
    this.#replaceEditPointToPoint();
  };

  #handleEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceEditPointToPoint();
    }
  };
}
