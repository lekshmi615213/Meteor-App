import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Users } from '../api/users.js';

// import Task from './Task.jsx';

// App component - represents the whole app
class App extends Component {
  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    const firstname = ReactDOM.findDOMNode(this.refs.firstname).value.trim();
    const surname = ReactDOM.findDOMNode(this.refs.surname).value.trim();
    const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    const password = ReactDOM.findDOMNode(this.refs.password).value.trim();
 
    Users.insert({
      firstname:firstname,
      surname:surname,
      email:email,
      password:password,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.firstname).value = '';
    ReactDOM.findDOMNode(this.refs.surname).value = '';
    ReactDOM.findDOMNode(this.refs.email).value = '';
    ReactDOM.findDOMNode(this.refs.password).value = '';
  }
  // renderTasks() {
  //   return this.props.tasks.map((task) => (
  //     <Task key={task._id} task={task} />
  //   ));
  // }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Create an account</h1>
          <span>Its free and always will be</span>
          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input type="text" ref="firstname" placeholder="Type in your firstname "/>
            <input type="text" ref="surname" placeholder="Type in your surname "/>
            <input type="email" ref="email" placeholder="Type in your email "/>
            <input type="password" ref="password" placeholder="Type in your password "/>
            <button type="submit">Create an account</button>
          </form>
        </header>

        
      </div>
    );
  }
}

// App.propTypes = {
//   tasks: PropTypes.array.isRequired,
// };

export default createContainer(() => {
  return {
   // tasks: Tasks.find({}).fetch(),
  };
}, App);