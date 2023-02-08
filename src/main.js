import TripEventsPresenter from './presenter/trip-events-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';
import PointsModel from './model/points-model.js';
import InformerPresenter from './presenter/informer-presenter.js';
import FilterModel from './model/filter-model.js';
import PointsApiService from './points-api-service.js';
import OffersApiService from './offers-api-service.js';
import DestinationsApiService from './destinations-api-service.js';

const AUTHORIZATION = 'Basic 99b235bd5a5c9de';
const END_POINT = 'https://19.ecmascript.pages.academy/big-trip';

const bodyElement = document.querySelector('.page-body');
const filterElement = bodyElement.querySelector('.trip-controls__filters');
const tripEventsElement = bodyElement.querySelector('.trip-events');
const addBtnElement = bodyElement.querySelector('.trip-main__event-add-btn');
const tripMainElement = bodyElement.querySelector('.trip-main');
const offersModel = new OffersModel({
  offersApiService: new OffersApiService(END_POINT, AUTHORIZATION)
});

const destinationsModel = new DestinationsModel({
  destinationsApiService: new DestinationsApiService(END_POINT, AUTHORIZATION)
}
);
const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const informerPresenter = new InformerPresenter({informerContainer: tripMainElement, pointsModel, offersModel , destinationsModel});
const filterModel = new FilterModel();

function onNewPointDestroy() {
  addBtnElement.disabled = false;
}

const filterPresenter = new FilterPresenter({
  filterContainer: filterElement,
  filterModel,
  pointsModel
});

const pointsObject = {tripEventsElement, pointsModel, offersModel , destinationsModel, filterModel, onNewPointDestroy};
const boardTripsPresenter = new TripEventsPresenter(pointsObject);

informerPresenter.init();
filterPresenter.init();

addBtnElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  boardTripsPresenter.createPoint();
  addBtnElement.disabled = true;
});


boardTripsPresenter.initTrip();
Promise.all([destinationsModel.init(), offersModel.init(), pointsModel.init()]).finally(
  () => {
    boardTripsPresenter.init();
  }
);
