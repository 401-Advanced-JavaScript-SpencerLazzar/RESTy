import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
      method: ''
    }
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleClick = (e) => {
    e.preventDefault();
    const method = e.target.value;
    this.props.Form(this.state.url);
    this.setState({ method });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url">URL: </label>
          <input
            type="text"
            name="url"
            value={this.state.url}
            onChange={this.onChange}
          />

          <input
            type="submit"
            value="Submit" />

        </form>
        <br />
        <p>Method: {this.state.method}</p>
        <button onClick={this.handleClick} value="GET">GET</button>
        <button onClick={this.handleClick} value="POST">POST</button>
        <button onClick={this.handleClick} value="PUT">PUT</button>
        <button onClick={this.handleClick} value="DELETE">DELETE</button>
        <ul className='no-bull'>
          <li>URL: {this.state.url.value} </li>
        </ul>
      </div>
    );
  }
}

export default Form;

