import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes';
import { SHOW_ALL } from '../constants/TodoFilters';
import { slowdown } from '../slowdown';

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      slowdown();
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
