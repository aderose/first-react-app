import React from 'react';

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state.value);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="w-100 d-flex justify-content-space-between pl-1"
      >
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="w-100 edit-form"
          autoComplete="off"
        />
        <button type="submit" className="edit-button text-success">
          <i className="fas fa-check-circle"></i>
        </button>
      </form>
    );
  }
}
