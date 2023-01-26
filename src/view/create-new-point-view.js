export default class CreateNewPoint {
  #handleClick = null;
  #addBtnContainer = null;
  #element = null;
  constructor({addBtnContainer, onClick}) {
    this.#addBtnContainer = addBtnContainer;
    this.#handleClick = onClick;
    this.#addBtnContainer.addEventListener('click', this.#clickHandler);
  }

  get element() {
    return this.#element;
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };
}

