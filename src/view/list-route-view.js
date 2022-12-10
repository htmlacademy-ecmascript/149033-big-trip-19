import {createElement} from '../render.js';

function createListRouteTemplate() {
  return `
  <ul class="trip-events__list">
  </ul>`;
}

export default class ListRouteView {
  getTemplate() {
    return createListRouteTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
