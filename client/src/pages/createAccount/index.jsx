import React, { Component, PropTypes } from 'react';
import styles from './styles.css';
import { Users } from '../../../../imports/api/users.js';

 export default class CreateAccount extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName:'',
      surName:'',
      email:'',
      password:'',
      rePassword:''
    };
  }

  handleSubmit = () => {
    const {firstName, lastName, email, password} = this.state;
    Users.insert({
      firstname: firstName,
      surname: lastName,
      email: email,
      password: password,
      createdAt: new Date()
    });
  }

  handleFirstNameChange = (event) => {
    this.setState({firstName: event.target.value});
  }

  handleSurNameChange = (event) => {
    this.setState({surName: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  handleRePasswordChange = (event) => {
    this.setState({rePassword: event.target.value});
  }

  render() {
    return (
      <div className="formWrapper">
        <h1>Create an account</h1>
        <span>Its free and always will be</span>
        <form className="new-task" onSubmit={this.handleSubmit} >
          <input
            type="text"
            placeholder="Type in your firstname"
            className="formTextArea"
            onChange={this.handleFirstNameChange}/>
          <input
            type="text"
            placeholder="Type in your surname"
            className="formTextArea"
            onChange={this.handleSurNameChange}/>
          <input
            type="email"
            placeholder="Type in your email"
            className="formTextArea"
            onChange={this.handleEmailChange}/>
          <input
            type="password"
            placeholder="Type in your password"
            className="formTextArea"
            onChange={this.handlePasswordChange}/>
          <input
            type="password"
            placeholder="Retype password"
            className="formTextArea"
            onChange={this.handleRePasswordChange}/>
          <button type="submit" className="formSubmitButton">Submit!</button>
        </form>
      </div>
    );
  }
}
