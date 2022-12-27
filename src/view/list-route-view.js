import {createElement} from '../render.js';

function createListRouteTemplate() {
  return `
  <ul class="trip-events__list">
  </ul>`;
}

export default class ListRouteView {
  #element = null;
  get template() {
    return createListRouteTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
