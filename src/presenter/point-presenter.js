import { replace, render, remove } from '../framework/render.js';
import PointView from '../view/point-view.js';
import EditPoint from '../view/edit-point-view.js';
import { TYPE, UserAction, UpdateType } from '../const.js';

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

  constructor({
    pointListContainer,
    onDataChange,
    onModeChange,
    offers,
    destinations,
  }) {
    this.#offers = offers;
    this.#destinations = destinations;
    this.#pointListContainer = pointListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init({point, offers, destinations}) {
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;
    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;
    this.#pointComponent = new PointView({
      point: this.#point,
      onEditClick: this.#handlePointClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });
    this.#pointEditComponent = new EditPoint({
      listOffers: this.#offers,
      listDestinations: this.#destinations,
      listType: TYPE,
      point: this.#point,
      onFormSubmit: this.#handleFormSubmit,
      onEditClick: this.#handleEditPointClick,
      onDeleteClick: this.#handleDeleteClick,
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointComponent, prevPointEditComponent);
      this.#mode = Mode.DEFAULT;
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
      this.#pointEditComponent.reset(this.#point);
      this.#replaceEditFormToPoint();
    }
  }

  setSaving() {
    if (this.#mode === Mode.EDITING) {
      this.#pointEditComponent.updateElement({
        isDisabled: true,
        isSaving: true,
      });
    }
  }

  setDeleting() {
    if (this.#mode === Mode.EDITING) {
      this.#pointEditComponent.updateElement({
        isDisabled: true,
        isDeleting: true,
      });
    }
  }

  setAborting() {
    if (this.#mode === Mode.DEFAULT) {
      this.#pointComponent.shake();
      return;
    }

    const resetFormState = () => {
      this.#pointEditComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#pointEditComponent.shake(resetFormState);
  }

  #replacePointToEditForm() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#handleEscKeyDown);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceEditFormToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#handleEscKeyDown);
    this.#mode = Mode.DEFAULT;
  }

  #handlePointClick = () => {
    this.#replacePointToEditForm();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange(UserAction.UPDATE_POINT, UpdateType.MINOR, {
      ...this.#point,
      isFavorite: !this.#point.isFavorite,
    });
  };

  #handleFormSubmit = (update) => {
    const isMinorUpdate =
      this.#point.dateFrom !== update.dateFrom ||
      this.#point.dateTo !== update.dateTo ||
      this.#point.basePrice !== update.basePrice;

    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      isMinorUpdate ? UpdateType.MINOR : UpdateType.PATCH,
      update
    );

  };

  #handleDeleteClick = (point) => {
    this.#handleDataChange(UserAction.DELETE_POINT, UpdateType.MINOR, point);
  };

  #handleEditPointClick = () => {
    this.#pointEditComponent.reset(this.#point);
    this.#replaceEditFormToPoint();
  };

  #handleEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#pointEditComponent.reset(this.#point);
      this.#replaceEditFormToPoint();
    }
  };
}
