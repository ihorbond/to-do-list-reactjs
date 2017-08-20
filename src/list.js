import React, { Component } from 'react';

export class List extends Component {
  constructor (props) {
    super(props);
    this.addTask = this.addTask.bind(this);
    this.markCompleted = this.markCompleted.bind(this);
  }

  addTask(e) {
   let newTask = this.newTask.value;
   alert(`${newTask} added!`);
  }

  markCompleted(e) {
   alert(`${this.completed} completed!`)
   console.log(this.getElementById);
  }

  render() {
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
      {this.props.tasks.map((oneTask, index) => (
        <li key={index}>
        <hr />
         <span id={index}>{oneTask}</span>
         <button onClick={this.markCompleted}>Mark Completed</button>
        <hr />
        </li>

      ))
      }
      </ul>
      </div>

      <div className="row">
      Completed tasks
      <ul className="completed">
      {this.props.completedTasks.map((oneTask, index) => (
        <li key={index}>
        <hr />
         {oneTask}
        <hr />
        </li>
      ))
      }
      </ul>
      </div>
      </div>
    )
  }
}
