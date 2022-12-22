import SortView from '../view/sort-view.js';
import ListRouteView from '../view/list-route-view.js';
import CreateNewPoint from '../view/create-new-point-view.js';
import PointRoute from '../view/point-route.js';
import EditPoint from '../view/edit-point-view.js';
import { render } from '../render.js';
import { TYPE } from '../const.js';
const NUM_EDIT_POINT = 0;
const LIMIT_POINTS = 3;

export default class TripEventsPresenter {
  routeListComponent = new ListRouteView();

  constructor(tripEventsElement, pointsModel) {
    this.tripEventsContainer = tripEventsElement;
    this.pointsModel = pointsModel;
  }

  init() {
    this.listPoints = [...this.pointsModel.getPoints()];
    this.listOffers = this.pointsModel.getOffers();
    this.listDestinations = Object.values(this.pointsModel.getDestinations());
    //console.log(this.listOffers);
    render(new SortView(), this.tripEventsContainer);
    //render(new CreateNewPoint(), this.tripEventsContainer);
    render(this.routeListComponent, this.tripEventsContainer);
    for (let i = 0; i < LIMIT_POINTS; i++) {
      if( i === NUM_EDIT_POINT ) {
        render(new EditPoint({point: this.listPoints[i], listOffers: this.listOffers, listDestinations: this.listDestinations, listType: TYPE}), this.routeListComponent.getElement());
      } else {
        render(new PointRoute(this.listPoints[i]), this.routeListComponent.getElement());
      }
    }
  }
}
