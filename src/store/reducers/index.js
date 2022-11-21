import { combineReducers } from 'redux';
import issuesReducer from './issuesReducer';
import formReducer from './formReducer';

export default combineReducers({
  issuesReducer,
  formReducer
})