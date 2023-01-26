import TripEventsPresenter from './presenter/trip-events-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';

const bodyElement = document.querySelector('.page-body');
const filterElement = bodyElement.querySelector('.trip-controls__filters');
const tripEventsElement = bodyElement.querySelector('.trip-events');
const addBtnElement = bodyElement.querySelector('.trip-main__event-add-btn');
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();
const pointsModel = new PointsModel();
const filterModel = new FilterModel();
const boardTripsPresenter = new TripEventsPresenter(tripEventsElement, pointsModel, offersModel, destinationsModel, filterModel, onNewPointDestroy);

const filterPresenter = new FilterPresenter({
  filterContainer: filterElement,
  filterModel,
  pointsModel
});

addBtnElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  boardTripsPresenter.createPoint();
  addBtnElement.disabled = true;
});

function onNewPointDestroy() {
  addBtnElement.disabled = false;
}

filterPresenter.init();
boardTripsPresenter.init();
