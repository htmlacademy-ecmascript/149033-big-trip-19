import {render, replace, remove} from '../framework/render.js';
import FilterView from '../view/filter-view.js';
import {filter} from '../utils/filter.js';
import {FilterType, UpdateType} from '../const.js';

export default class FilterPresenter {
  #filterContainer = null;
  #filterModel = null;
  #pointsModel = null;

  #filterComponent = null;

  constructor({filterContainer, filterModel, pointsModel}) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    const points = this.#pointsModel.points;

    return [
      {
        type: FilterType.EVERYTHING,
        name: 'everything',
        hasPoints: filter[FilterType.EVERYTHING](points).length > 0,
      },
      {
        type: FilterType.FUTURE,
        name: 'future',
        hasPoints: filter[FilterType.FUTURE](points).length > 0,
      },
      {
        type: FilterType.PRESENT,
        name: 'present',
        hasPoints: filter[FilterType.PRESENT](points).length > 0,
      },
      {
        type: FilterType.PAST,
        name: 'past',
        hasPoints: filter[FilterType.PAST](points).length > 0,
      },
    ];
  }

  init() {
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new FilterView({
      filters: this.filters,
      currentFilterType: this.#filterModel.filter,
      onFilterTypeChange: this.#handleFilterTypeChange
    });

    if (prevFilterComponent === null) {
      render(this.#filterComponent, this.#filterContainer);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filterModel.filter === filterType) {
      return;
    }

    this.#filterModel.setFilter(UpdateType.MAJOR, filterType);
  };
}
