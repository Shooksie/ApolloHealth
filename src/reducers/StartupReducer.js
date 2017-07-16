import {
  OPEN,
} from '../actions/types';

const INITIAL_STATE = {
  expanded: false,
};


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case OPEN:
        if (state.expanded) {
        return { ...state, expanded: false, };
      } else {
          return { ...state, expanded: true, };
      }
      default:
        return state;
  }
};
