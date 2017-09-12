import objectAssign from 'object-assign';
import initialState from './initialState';
import {RECEIVE_TODOS} from '../constants/actionTypes';

/* 
the reducer is invoked when actions are executed and on initialization. */
export default function todoListReducer(state = initialState.todoLists, action) {
  let newState;

  /* write different cases for different actions, and fall back to the initial state */
  switch (action.type) {

    case RECEIVE_TODOS:
      // always ALWAYS copy your state before modifying it
      // in this case, we're assigning the entire state to a new value, so it would be pointless
      //copy state if modifying it: newState = objectAssign({}, state);
      newState = action.todos;
      break;

    default:
      newState = state;
      
  }
  return newState;
}
