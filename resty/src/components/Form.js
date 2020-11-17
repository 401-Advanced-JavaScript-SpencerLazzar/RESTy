import React, { Component } from 'react';

class Form extends Component {
  state = {
    url: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.Form(this.state.url);
    this.setState({ url: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
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
        <button>GET</button>
        <button>POST</button>
        <button>PUT</button>
        <button>DELETE</button>
        <ul className='no-bull'>
          <li>URL: {this.state.url} </li>
        </ul>
      </div>
    );
  }
}

export default Form;

