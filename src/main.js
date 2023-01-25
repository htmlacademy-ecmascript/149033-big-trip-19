//import { render } from './framework/render.js';
//import FilterView from './view/filter-view.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import CreateNewPoint from './view/create-new-point-view.js';
//import { generateFilter } from './mock/filter.js';
// const filters = [
//   {type: 'everything', name: 'EVERYTHING', hasPoints: 1,},
//   {type: 'future', name: 'FUTURE',hasPoints: 0, },
//   {type: 'present', name: 'PRESENT', hasPoints: 0, },
//   { type: 'past', name: 'PAST', hasPoints: 1}
// ];
const bodyElement = document.querySelector('.page-body');
const filterElement = bodyElement.querySelector('.trip-controls__filters');
const tripEventsElement = bodyElement.querySelector('.trip-events');
const addBtnElement = bodyElement.querySelector('.trip-main__event-add-btn');
const offersModel = new OffersModel();
const destinationsModel = new DestinationsModel();
const pointsModel = new PointsModel();
const filterModel = new FilterModel();
const boardTripsPresenter = new TripEventsPresenter(tripEventsElement, pointsModel, offersModel, destinationsModel, filterModel, onNewPointDestroy);

//const filters_ = generateFilter(pointsModel.points);

// render(new FilterView({
//   filters,
//   currentFilterType: 'everything',
//   onFilterTypeChange: () => {}
// }), filterElement);
const filterPresenter = new FilterPresenter({
  filterContainer: filterElement,
  filterModel,
  pointsModel
});

// const newPointButtonComponent = new CreateNewPoint({
//   addBtnContainer: addBtnElement,
//   onClick: handleNewPointButtonClick
// });

addBtnElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  boardTripsPresenter.createPoint();
  addBtnElement.disabled = true;
});

function onNewPointDestroy() {
  addBtnElement.disabled = false;
}
// function handleNewPointButtonClick() {
//   boardTripsPresenter.createPoint();
//   addBtnElement.disabled = true;
// }

filterPresenter.init();
boardTripsPresenter.init();
