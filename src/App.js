import React, { Component } from 'react';
import './style.min.css';
import {List} from './list';

class App extends Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
    this.state = {
      tasks: ['task2', 'task3'],
      completedTasks: ['task1']
    };
  }

addTask(newTask) {
  let updatedTasks = this.state.tasks;
  updatedTasks.push(newTask);
  this.setState({
    tasks: updatedTasks
  });
}

markCompleted(task) {
  let updatedTasks = this.state.tasks.map((oneTask, i) => {
      if(oneTask !== task) {
         return oneTask;
      }
  });
  let updateCompleted = this.state.completedTasks;
  updateCompleted.push(task);
  this.setState({
    tasks: updatedTasks,
    completedTasks: updateCompleted
  });
}

  render() {
    return (
      <List
      tasks={this.state.tasks}
      completedTasks={this.state.completedTasks}
      />
    );
  }
}

export default App;
