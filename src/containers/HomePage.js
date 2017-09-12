import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ToDoList from '../components/ToDoList';
import {bindActionCreators} from 'redux';
import objectAssign from 'object-assign';

import * as actions from '../actions/todoListActions';

class HomePage extends React.Component {

  constructor(props) {
    // initializes the base class
    super(props);

    this.state = {
      // used in the add todo list form
      list_title: "",
      // used in the add todo list item form
      list_id: "",
      item_title: "",
      item_desc: "",
    };

    // binds the handleChange function to this instance of 'this'
    this.handleChange = this.handleChange.bind(this);
    this.addList = this.addList.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchTodos();
  }

  handleChange(event) {
    let newState = objectAssign({}, this.state);
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  /*
  Adds a todo list using the todo list title input. */
  addList() {
    console.log(this.state);
    // if the input isn't empty
    if(this.state.list_title !== "") {
      // make the call to our action to add the list
      this.props.actions.addTodoList(this.state.list_title)
        // after that call completes, do the following
        .then(() => {
          // reload the todo lists from the API
          this.props.actions.fetchTodos();
        });
    }
  }

  /*
  Adds a todo list using the todo list title input. */
  addItem() {
    // if the required inputs are filled out
    if(this.state.list_id && this.state.item_title !== "") {
      // call the action with all our input data
      this.props.actions.addTodoListItem(
        this.state.list_id,
        this.state.item_title,
        this.state.item_desc
      )
      // then re-fetch the todo list data from the API
      .then(() => {
        this.props.actions.fetchTodos();
      });
    }
  }
 
  render() {
    // first create HTML for each todo list
    const todoLists = this.props.todoLists.map((todoList) => {
      return <ToDoList key={todoList.id} todoList={todoList} />;
    });

    const todoListOptions = this.props.todoLists.map((list) => {
      return <option key={list.id} value={list.id}>{list.title}</option>
    });

    return (
      <div>
        <h1>My Todo Lists</h1>
        {todoLists}


        <h1>Add A Todo List</h1>
        <input name="list_title" type="text" onChange={this.handleChange}/>
        <button onClick={this.addList}>Add</button>


        <h1>Add A Todo List Item</h1>

        <label>ToDo List: </label>
        <select name="list_id" onChange={this.handleChange}>
          {todoListOptions}
        </select>
        <br/>

        <label>Title: </label>
        <input name="item_title" type="text" onChange={this.handleChange}/>
        <br/>

        <label>Description: </label>
        <input name="item_desc" type="text" onChange={this.handleChange}/>
        <br/>
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }

}

HomePage.propTypes = {
  todoLists: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    todoLists: state.todoLists
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
