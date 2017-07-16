import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import StartupsReducer from './StartupReducer';
import DocReducer from './DocReducers';
import CurDocReducer from './curDocReducer';

export default combineReducers({
  auth: AuthReducer,
  startup: StartupsReducer,
  doc: DocReducer,
  currentDoc: CurDocReducer
});
