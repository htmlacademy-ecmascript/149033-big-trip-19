import {replace, render} from '../framework/render.js';
import Point from '../view/point-view.js';
import EditPoint from '../view/edit-point-view.js';
import { TYPE } from '../const.js';


export default class PointPresenter {
  #offers = null;
  #destinations = null;
  #pointListContainer = null;
  #point = null;
  #pointComponent = null;
  #editPointComponent = null;

  constructor({pointListContainer, offers, destinations}) {
    this.#offers = offers;
    this.#destinations = destinations;
    this.#pointListContainer = pointListContainer;
  }

  init(point) {
    this.#point = point;

    this.#pointComponent = new Point({
      point: this.#point,
      onEditClick: this.#handlePointClick,
    });

    this.#editPointComponent = new EditPoint( {
      listOffers: this.#offers,
      listDestinations: this.#destinations,
      listType: TYPE,
      point: this.#point,
      onFormSubmit: this.#handleFormSubmit,
      onEditClick: this.#handleEditPointClick,

    } );


    render( this.#pointComponent, this.#pointListContainer );
  }

  #replacePointToEditPoint() {
    replace(this.#editPointComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceEditPointToPoint() {
    replace(this.#pointComponent, this.#editPointComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handlePointClick = () => {
    this.#replacePointToEditPoint();
  };

  #handleFormSubmit = () => {
    this.#replaceEditPointToPoint();
    //document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleEditPointClick = () => {
    this.#replaceEditPointToPoint();
    //document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceEditPointToPoint();
      //document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };
}
