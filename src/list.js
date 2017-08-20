import React, { Component } from 'react';

export class List extends Component {
  constructor (props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
  }

  addTask(e) {
   let newTask = this.newTask.value;
   this.props.onChange(newTask);
   alert(`${newTask} added!`);
  }

  markCompleted(e) {
    let completedTask = e.target.id;
      //  console.log(e.target.id);
    this.props.onChange(completedTask);
  }

  render() {
    console.log(this.props.tasks);
    const currentTasks = this.props.tasks.map((oneTask, index) => {
      return (
      <li key={index}>
      <hr />
      {oneTask}
        <button id={oneTask} onClick={this.markCompleted}>Complete</button>
      <hr />
      </li>
    )});

    console.log("CompletedTasks: " + this.props.completedTasks);
  const completedTasks = this.props.completedTasks.map((oneTask, index) => {
    return (
      <li key={index}>
      <hr />
       {oneTask}
      <hr />
      </li>
    )});

    return (
      <div>
      <div className="row input">
      Enter new task
      <input type="text" ref={ (input) => this.newTask = input }/>
      <button onClick={this.addTask}>Add</button>
      </div>

      <div className="row">
      Tasks To Do
      <ul className="active">
      {currentTasks}
      </ul>
      </div>

      <div className="row">
      Completed tasks
      <ul className="completed">
      {completedTasks}
      </ul>
      </div>
      </div>
    )
  }
}
