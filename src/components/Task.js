import React from 'react';
import Delete from './Delete';
import EditForm from './EditForm';

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };

    this.showEditForm = this.showEditForm.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  showEditForm() {
    this.setState({ isEditing: true });
  }

  editTask(value) {
    this.props.updateTask({ id: this.props.number, value: value });
    this.setState({ isEditing: false });
  }

  deleteTask(event) {
    this.props.handleDelete(this.props.number);
    event.stopPropagation();
  }

  render() {
    if (this.state.isEditing) {
      return <EditForm value={this.props.content} submit={this.editTask} />;
    }
    return (
      <div className="d-flex justify-content-between w-100 pl-2">
        <div
          className="text-wrap text-break text-left w-100"
          onClick={this.showEditForm}
        >
          {this.props.content}
        </div>
        <Delete handleDelete={this.deleteTask} />
      </div>
    );
  }
}
