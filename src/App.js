import React, { Component } from 'react';
import './style.min.css';
import {List} from './list';

class App extends Component {
  constructor(props) {
    super(props);
    // this.markCompleted = this.markCompleted.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
    this.state = {
      tasks: ['task2', 'task3'],
      completedTasks: ['task1']
    };
  }

updateTasks(task) {
  // console.log("UPDATE TASKS: " + task);
  let prevTasks = this.state.tasks;
  let prevCompTasks = this.state.completedTasks;
  //if task doesnt exist in tasks array - it must be new task
  if (this.state.tasks.indexOf(task) === -1) {
    //add new task to previous array
    prevTasks.push(task);
    this.setState({
      tasks: prevTasks
    });
} else {
let taskToComplete = prevTasks.indexOf(task);
prevTasks.forEach((oneTask, index) => {
  if(index === taskToComplete) {
    prevTasks.splice(index,1);
  }
});
prevCompTasks.push(task);
this.setState({
  tasks: prevTasks,
  completedTasks: prevCompTasks
});
}
}


  render() {
    return (
      <List
      tasks={this.state.tasks}
      completedTasks={this.state.completedTasks}
      onChange={this.updateTasks}
      />
    );
  }
}

export default App;
