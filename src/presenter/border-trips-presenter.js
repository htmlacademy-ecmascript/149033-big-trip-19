import SortView from '../view/sort-view.js';
import RouteView from '../view/route-view.js';
import { render } from '../render.js';

export default class BoardTripsPresenter {

  routeListComponent = new RouteView();

  constructor({boardTripsContainer}) {
    this.boardTripsContainer = boardTripsContainer;
  }

  init() {
    render(new SortView(), this.boardTripsContainer);
    render(this.routeListComponent, this.boardTripsContainer);
  }
}
