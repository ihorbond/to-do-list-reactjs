import React, { Component } from 'react';
import './style.min.css';
import {List} from './list';

class App extends Component {
  constructor(props) {
    super(props);
    this.addTask       = this.addTask.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
    this.removeTask    = this.removeTask.bind(this);
    this.state = {
      tasks: ['Wash dishes', 'Buy tooth paste', 'Clean room'],
      completedTasks: ['Do laundry']
    };
  }

  //add new task
  addTask (task) {
    console.log("add task " + task);
    let newTasks = this.state.tasks;
    newTasks.push(task);
    this.setState({
      tasks: newTasks
    });
  }

  //remove task
  removeTask(task) {
    console.log("remove task " + task);
    let newCompletedTasks = this.state.completedTasks;
    let taskToRemoveIndex = this.state.completedTasks.indexOf(task);
    newCompletedTasks.splice(taskToRemoveIndex, 1);
    this.setState({
      completedTasks: newCompletedTasks
    });
  }

//mark as completed
markCompleted(task) {
console.log("mark completed " + task);
let newCompletedTasks = this.state.completedTasks;
let newTasks          = this.state.tasks;
let taskToCompleteIndex = this.state.tasks.indexOf(task);
newTasks.splice(taskToCompleteIndex, 1);
newCompletedTasks.push(task);
this.setState({
  tasks: newTasks,
  completedTasks: newCompletedTasks
});
}



  render() {
    return (
      <List
      tasks={this.state.tasks}
      completedTasks={this.state.completedTasks}
      addTask={this.addTask}
      markCompleted={this.markCompleted}
      removeTask={this.removeTask}
      />
    );
  }
}

export default App;
