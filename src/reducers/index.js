import { combineReducers } from 'redux';
import arrWords from './arrWords';
import filterStatus from './filterStatus';

const reducer = combineReducers({
  arrWords,
  filterStatus
});

export default reducer;