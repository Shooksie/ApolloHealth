import { SETDOC, SCHEDFETCH, SETPHARM } from '../actions/types';

const INITIAL_STATE = {
  curDoc: {},
  curPharm: {},
  sched: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case SETDOC:
        console.log(action.payload);
        return { ...state, curDoc: action.payload };
      case SCHEDFETCH:
        console.log(action.payload);
        return { ...state, sched: action.payload };
      case SETPHARM:
        return { ...state, curPharm: action.payload };
      default:
        return state;
  }
};
