import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todoLists from './todoListReducer';

const rootReducer = combineReducers({
  todoLists,
  routing: routerReducer
});

export default rootReducer;
