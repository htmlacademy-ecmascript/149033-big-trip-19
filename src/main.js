import FilterView from './view/filter-view.js';
import { render } from './render.js';
import TripEventsPresenter from './presenter/trip-events-presenter.js';

const sitePageElement = document.querySelector('.page-body');
const tripControlsFiltersElement = sitePageElement.querySelector('.trip-controls__filters');
const tripEventsElement = sitePageElement.querySelector('.trip-events');

const boardTripsPresenter = new TripEventsPresenter({boardTripsContainer: tripEventsElement});
render(new FilterView(), tripControlsFiltersElement);

boardTripsPresenter.init();
