import SortView from '../view/sort-view.js';
import ListRouteView from '../view/list-route-view.js';
import CreateNewPoint from '../view/create-new-point-view.js';
import PointRoute from '../view/point-route.js';
import EditPoint from '../view/edit-point-view.js';
import { render } from '../render.js';
const LENGTH_LIST_POINT = 3;
const NUM_EDIT_POINT = 0;

export default class TripEventsPresenter {
  routeListComponent = new ListRouteView();

  constructor(tripEventsElement) {
    this.tripEventsContainer = tripEventsElement;
  }

  init() {
    render(new SortView(), this.tripEventsContainer);
    render(new CreateNewPoint(), this.tripEventsContainer);
    render(this.routeListComponent, this.tripEventsContainer);
    for (let i = 0; i < LENGTH_LIST_POINT; i++) {
      if( i === NUM_EDIT_POINT ) {
        render(new EditPoint(), this.routeListComponent.getElement());
      } else {
        render(new PointRoute(), this.routeListComponent.getElement());
      }
    }
  }
}
