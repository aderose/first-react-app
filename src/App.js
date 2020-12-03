import React from 'react';
import Overview from './components/Overview';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: '',
      number: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  updateTask({ id, value }) {
    const updatedTasks = [...this.state.tasks];
    updatedTasks.find((task) => task.number === id).content = value;
    this.setState({
      tasks: updatedTasks,
    });
  }

  handleDelete(id) {
    this.setState({
      tasks: this.state.tasks.filter(({ number }) => number !== id),
    });
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  handleSubmit(event) {
    const { tasks, task, number } = this.state;
    this.setState({
      tasks: [
        ...tasks,
        {
          number: number + 1,
          content: task,
        },
      ],
      task: '',
      number: number + 1,
    });
    event.preventDefault();
  }

  render() {
    const { tasks, task } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="py-5">
          <div className="form-group">
            <label htmlFor="taskInput" className="text-white">
              Enter task
            </label>
            <input
              type="text"
              id="taskInput"
              value={task}
              onChange={this.handleChange}
              className="form-control"
              autoComplete="off"
            />
          </div>
          <input type="submit" className="btn btn-success" value="Add Task" />
        </form>
        <Overview
          tasks={tasks}
          handleDelete={this.handleDelete}
          updateTask={this.updateTask}
        />
      </div>
    );
  }
}
