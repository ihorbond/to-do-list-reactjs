import React, { Component } from 'react';

export class List extends Component {
  constructor (props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(e) {
   let newTask = this.newTask.value;
   this.props.onChange(newTask);
  //  alert(`${newTask} added!`);
  }

  markCompleted(e) {
    let completedTask = e.target.id;
    this.props.onChange(completedTask);
  }

  removeTask(e) {
    let taskToRemove = e.target.id;
    this.props.onChange(taskToRemove);
  }

  render() {
    // console.log(this.props.tasks);
    const currentTasks = this.props.tasks.map((oneTask, index) => {
      return (
        <div key={index} className="wrapper">
        <div className="col-md-9">

      <li>

      {oneTask}

      </li>
      </div>
      <div className="col-md-3">
      <button className="btn btn-success" id={oneTask} onClick={this.markCompleted}>
      <i className="glyphicon glyphicon-ok" />
      </button>
      </div>
      </div>
    )});

    // console.log("CompletedTasks: " + this.props.completedTasks);
  const completedTasks = this.props.completedTasks.map((oneTask, index) => {
    return (

      <div key={index} className="wrapper">
      <div className="col-md-9">
    <li>

    {oneTask}

    </li>
    </div>
    <div className="col-md-3">
    <button className="btn btn-danger" id={oneTask} onClick={this.removeTask}>
    <i className="glyphicon glyphicon-remove" />
    </button>
    </div>
    </div>

    )});

    return (
      <div>
      <div className="row input">
       <br />
      <input
          type="text"
          placeholder="task description i.e. wash dishes"
          maxLength="32"
          ref={ (input) => this.newTask = input }
           />
      <br />
      <button className="btn btn-warning" onClick={this.addTask}>Add</button>
      </div>

      <div className="tasks">
      <div className="row to-do">
      <h2> To-Do </h2>
      <ol className="active">
      {currentTasks}
      </ol>
      </div>

      <div className="row completed">
      <h2> Completed </h2>
      <ul>
      {completedTasks}
      </ul>
      </div>
      </div>
      </div>
    )
  }
}
