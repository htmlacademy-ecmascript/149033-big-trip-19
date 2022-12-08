import SortView from '../view/sort-view.js';
import ListRouteView from '../view/list-route-view.js';
import FormCreationTrip from '../view/form-creation-trip-view.js';
import PointRoute from '../view/point-route.js';
import FormEditTrip from '../view/form-edit-trip-view.js';
import { render } from '../render.js';

export default class BoardTripsPresenter {
  routeListComponent = new ListRouteView();

  constructor({boardTripsContainer}) {
    this.boardTripsContainer = boardTripsContainer;
  }

  init() {
    render(new SortView(), this.boardTripsContainer);
    render(new FormCreationTrip(), this.boardTripsContainer);
    render(this.routeListComponent, this.boardTripsContainer);
    for (let i = 0; i < 3; i++) {
      render(new PointRoute(), this.routeListComponent.getElement());
      if( i === 0 ) {
        render(new FormEditTrip(), this.routeListComponent.getElement());
      }
    }
  }
}
