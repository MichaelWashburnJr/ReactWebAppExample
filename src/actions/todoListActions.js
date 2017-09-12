import {RECEIVE_TODOS} from '../constants/actionTypes';
import fetch from 'isomorphic-fetch';

function receiveTodos(json) {
  return function(dispatch) {
    return dispatch({
      type: RECEIVE_TODOS,
      todos: json
    });
  };
}

export function fetchTodos() {
  return function(dispatch) {
    return fetch('http://localhost:8000/todo_lists')
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json)));
  }
}

export function addTodoList(title) {
  return function(dispatch) {
    // make the POST request with our data
    return fetch('http://localhost:8000/todo_lists', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ 
          title: title,
          items: []
        })
      })
      // after the request finishes, update the todos
      .then(() => {
        return dispatch(fetchTodos());
      });
  };
}

export function addTodoListItem(todoListId, title, description) {
  return function(dispatch) {
    // make the POST request with our data
    return fetch('http://localhost:8000/todo_lists/'+todoListId+'/items',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        title: title,
        description: description
      })
    })
    // after the request finishes, update the todos
    .then(() => {
      return dispatch(fetchTodos());
    });
  };
}