import {filter} from '../utils/filter.js';

function generateFilter(points) {
  return Object.entries(filter).map(
    ([filterName, tasksFilterFn]) => ({
      name: filterName,
      hasPoints: Boolean(tasksFilterFn(points).length),
    }),
  );
}

export {generateFilter};
