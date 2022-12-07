import FilterView from './view/filter-view.js';
import { render } from './render.js';
import BoardTripsPresenter from './presenter/border-trips-presenter.js';

const sitePageElement = document.querySelector('.page-body');
const tripControlsFiltersElement = sitePageElement.querySelector('.trip-controls__filters');
const tripEventsElement = sitePageElement.querySelector('.trip-events');

const boardTripsPresenter = new BoardTripsPresenter({boardTripsContainer: tripEventsElement});
render(new FilterView(), tripControlsFiltersElement);

boardTripsPresenter.init();
