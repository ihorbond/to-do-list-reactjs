import React, { Component } from 'react';
import './style.min.css';
import {List} from './list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state.task = '';
    this.state.tasks = [];
    this.state.completed = [];
    this.addTask = this.addTask.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
  }

addTask(newTask) {
  this.props.tasks.push(newTask);
}

markCompleted(task) {
  this.state.completed.push(task);
  const taskToComplete = this.props.tasks.indexOf(task);
  if (taskToComplete > -1) {
    this.props.tasks.splice(taskToComplete, 1);
  }
}

  render() {
    return (
      <List />
    );
  }
}

export default App;
