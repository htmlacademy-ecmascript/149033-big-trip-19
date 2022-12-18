import FilterView from './view/filter-view.js';
import { render } from './render.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';
import PointsModel from './model/points-model.js';

const bodyElement = document.querySelector('.page-body');
const filterElement = bodyElement.querySelector('.trip-controls__filters');
const tripEventsElement = bodyElement.querySelector('.trip-events');
const pointsModel = new PointsModel();
const boardTripsPresenter = new TripEventsPresenter(tripEventsElement, pointsModel);
render(new FilterView(), filterElement);

boardTripsPresenter.init();
