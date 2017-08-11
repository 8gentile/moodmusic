import merge from 'lodash/merge';
import {
  RECEIVE_ITEMS,
  RECEIVE_ITEM,
} from './actions';

const tableReducer = (state = {}, action) => {
  const nextState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ITEMS:
      action.items.forEach((item) => nextState[item.id] = item);
      return nextState
    case RECEIVE_ITEM:
      return merge({}, state, { [action.item.id]: action.item });
    default:
      return state;
  }
};

export default tableReducer;