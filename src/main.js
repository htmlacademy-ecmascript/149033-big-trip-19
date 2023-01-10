import { render } from './framework/render.js';
import FilterView from './view/filter-view.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';
import PointsModel from './model/points-model.js';

const bodyElement = document.querySelector('.page-body');
const filterElement = bodyElement.querySelector('.trip-controls__filters');
const tripEventsElement = bodyElement.querySelector('.trip-events');
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();
const pointsModel = new PointsModel();
const boardTripsPresenter = new TripEventsPresenter(tripEventsElement, pointsModel, offersModel, destinationsModel);
render(new FilterView(), filterElement);

boardTripsPresenter.init();
