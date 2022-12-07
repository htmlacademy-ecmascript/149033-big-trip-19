import FilterView from './view/filter-view.js';
import { render } from './render.js';

const sitePageElement = document.querySelector('.page-body');
const tripControlsFiltersElement = sitePageElement.querySelector('.trip-controls__filters');

render(new FilterView(), tripControlsFiltersElement);
