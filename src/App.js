import React, { Component } from 'react';
import './style.min.css';
import {List} from './list';

class App extends Component {
  constructor(props) {
    super(props);
    // this.markCompleted = this.markCompleted.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
    this.state = {
      tasks: ['Wash Dishes', 'Buy groceries'],
      completedTasks: ['Do laundry']
    };
  }

updateTasks(task) {
//add new task
if(!this.state.tasks.includes(task)) {
  let newTasks = this.state.tasks;
  newTasks.push(task);
  this.setState({
    tasks: newTasks
  });
  return;
}

//mark as completed
if (this.state.tasks.includes(task)) {
let newCompletedTasks = this.state.completedTasks;
let newTasks          = this.state.tasks;
let taskToRemoveIndex = this.state.tasks.indexOf(task);
newTasks.splice(taskToRemoveIndex, 1);
newCompletedTasks.push(task);
this.setState({
  tasks: newTasks,
  completedTasks: newCompletedTasks
});
return;
}

//remove task
if(this.state.completedTasks.includes(task)) {
  let newCompletedTasks = this.state.completedTasks;
  let taskToRemoveIndex = this.state.completedTasks.indexOf(task);
  newCompletedTasks.splice(taskToRemoveIndex, 1);
  this.setState({
    completedTasks: newCompletedTasks
  });
  return;
}


  // console.log("UPDATE TASKS: " + task);
//   let prevTasks = this.state.tasks;
//   let prevCompTasks = this.state.completedTasks;
//   //if task doesnt exist in tasks array - it must be new task
//   if (prevTasks.indexOf(task) === -1) {
//     //add new task to previous array
//     prevTasks.push(task);
//     this.setState({
//       tasks: prevTasks
//     });
// }
// else {
// let taskToComplete = prevTasks.indexOf(task);
// prevTasks.forEach((oneTask, index) => {
//   if(index === taskToComplete) {
//     prevTasks.splice(index,1);
//   }
// });
// prevCompTasks.push(task);
// this.setState({
//   tasks: prevTasks,
//   completedTasks: prevCompTasks
// });
// }
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
