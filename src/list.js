import React, { Component } from 'react';

export class List extends Component {
  render() {
    return (
      <div>
      <div className="row input">
      Enter new task <input />
      // <button onClick={this.addTask('3')}> Add </button>
      </div>

      <div className="row">
      Tasks To Do
      <ul className="active">
      {this.props.tasks.map((oneTask, index) => (
        <li key={index}>
        <hr />
         {oneTask}
        <hr />
        </li>
      ))
      }
      </ul>
      </div>

      <div className="row">
      Completed tasks
      <ul className="completed">
      <hr />
      <li></li>
      <hr />
      </ul>
      </div>
      </div>
    )
  }
}
