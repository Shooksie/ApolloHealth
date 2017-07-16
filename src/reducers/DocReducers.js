import { GETDOC, GETPHARM } from '../actions/types';

const INITIAL_STATE = {
  doclist: [],
  pharmlist: [],
  isLoading: true,
  curDoc: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case GETDOC:
        return { ...state, doclist: action.payload };
      case GETPHARM:
        return { ...state, pharmlist: action.payload, isLoading: false };
      default:
        return state;
  }
};
