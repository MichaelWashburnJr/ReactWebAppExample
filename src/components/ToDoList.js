/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';

class ToDoList extends React.Component {

  render() {
    // first, create some HTML for each todo list item
    const todoListItems = this.props.todoList.items.map((todoListItem) => {
      const uniqueKey = todoListItem.todo_list_id + '-' + todoListItem.id;
      return (
        <li key={uniqueKey}>
          <strong>{todoListItem.title}:&nbsp;</strong>
          <span>{todoListItem.description}&nbsp;</span>
          <button>Delete</button>
        </li>
      );
    });

    // Then, include the todo list items in the HTML for this todo list.
    return (
      <div key={this.props.todoList.id}>
        <h1>{this.props.todoList.title} <button>Delete</button></h1>
        <ul>
          {todoListItems}
        </ul>
      </div>
    );
  }
}

ToDoList.propTypes = {
  todoList: PropTypes.object.isRequired
};

export default ToDoList;
