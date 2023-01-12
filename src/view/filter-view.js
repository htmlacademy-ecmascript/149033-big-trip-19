import AbstractView from '../framework/view/abstract-view.js';

function createFilterItemTemplate(filterItem) {
  const {name, hasFilterPoint} = filterItem;
  return `
    <div class="trip-filters__filter">
      <input id="filter-${name}" class="trip-filters__filter-input  visually-hidden " type="radio" name="trip-filter" value="${name}" ${hasFilterPoint ? '' : 'disabled'}>
      <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
    </div>
  `;
}


function createFilterTemplate(filterItems) {
  const filterItemTemplate = filterItems.map( (filterItem) => createFilterItemTemplate(filterItem)).join('');
  return `
  <form class="trip-filters" action="#" method="get">
    ${filterItemTemplate}
    <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;
}

export default class FilterView extends AbstractView {
  #filters = null;

  constructor({filters}) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFilterTemplate(this.#filters);
  }
}
