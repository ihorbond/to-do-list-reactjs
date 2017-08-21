import React, { Component } from 'react';

export class List extends Component {
  constructor (props) {
    super(props);
    this.addTask       = this.addTask.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
    this.removeTask    = this.removeTask.bind(this);
  }

  addTask(e) {
   let newTask = this.newTask.value;
   this.props.addTask(newTask.toString());
  }

  markCompleted(e) {
    let target = e.target || e.srcElement;
    let completedTask = target.id;
    console.log("list mark completed: " + completedTask);
    this.props.markCompleted(completedTask.toString());
  }

  removeTask(e) {
    let target = e.target || e.srcElement;
    let taskToRemove = target.id;
    this.props.removeTask(taskToRemove.toString());
  }

  render() {
    let todo, completed;
     if (this.props.tasks.length !== 0) todo = "To-do";
     if (this.props.completedTasks.length !== 0) completed = "Completed";
    // console.log(this.props.tasks);
    const currentTasks = this.props.tasks.map((oneTask, index) => {
      return (

        <div key={index} className="wrapper">
        <div className="col-xs-9">
      <li>
      {oneTask}
      </li>
      </div>
      <div className="col-xs-3">
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
    <div className="col-xs-9">
    <li>
    {oneTask}
    </li>
    </div>
    <div className="col-xs-3">
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
          placeholder="task description e.g. wash dishes"
          maxLength="32"
          ref={ (input) => this.newTask = input }
           />

      <button className="btn btn-warning" onClick={this.addTask}>
      <i className="glyphicon glyphicon-plus" />
      </button>
      </div>

      <div className="tasks">
      <div className="row to-do">
      <h2> {todo} </h2>
      <ol className="active">
      {currentTasks}
      </ol>
      </div>

      <div className="row completed">
      <h2> {completed} </h2>
      <ul>
      {completedTasks}
      </ul>
      </div>
      </div>
      </div>
    )
  }
}
