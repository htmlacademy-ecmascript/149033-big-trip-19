import SortView from '../view/sort-view.js';
import ListRouteView from '../view/list-route-view.js';
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
    this.offers = this.pointsModel.getOffers();
    this.destinations = Object.values(this.pointsModel.getDestinations());
    render(new SortView(), this.tripEventsContainer);
    render(new EditPoint({listOffers: this.offers, listDestinations: this.destinations, listType: TYPE}), this.tripEventsContainer);
    render(this.routeListComponent, this.tripEventsContainer);
    for (let i = 0; i < LIMIT_POINTS; i++) {
      if( i === NUM_EDIT_POINT ) {
        render(new EditPoint({listOffers: this.offers, listDestinations: this.destinations, listType: TYPE, point: this.listPoints[i]}), this.routeListComponent.getElement());
      } else {
        render(new PointRoute(this.listPoints[i]), this.routeListComponent.getElement());
      }
    }
  }
}
