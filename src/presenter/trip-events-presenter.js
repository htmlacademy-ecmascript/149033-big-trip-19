import SortView from '../view/sort-view.js';
import ListRouteView from '../view/list-route-view.js';
import FormCreationTrip from '../view/form-creation-trip-view.js';
import PointRoute from '../view/point-route.js';
import FormEditTrip from '../view/form-edit-trip-view.js';
import { render } from '../render.js';

export default class TripEventsPresenter {
  routeListComponent = new ListRouteView();

  constructor(tripEventsElement) {
    this.tripEventsContainer = tripEventsElement;
  }

  init() {
    render(new SortView(), this.tripEventsContainer);
    render(new FormCreationTrip(), this.tripEventsContainer);
    render(this.routeListComponent, this.tripEventsContainer);
    for (let i = 0; i < 3; i++) {
      render(new PointRoute(), this.routeListComponent.getElement());
      if( i === 0 ) {
        render(new FormEditTrip(), this.routeListComponent.getElement());
      }
    }
  }
}
