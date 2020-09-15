import React from 'react';
import axios from 'axios';

class CreateDog extends React.Component {

  state = {
    firstName: '',
    lastName: ''

  };

//the handleChange takes what you type into the textbox, passes it into the state
//above and then uses that state to submit when you click submit
  handleFirstNameChange = event => {
      this.setState({ firstName: event.target.value});
  }

  handleLastNameChange = event => {
      this.setState({ lastName: event.target.value});
  }


//preventDefault stops browser from reloading
//handleSubmit is a method to do a post which gets called in the form at the bottom
  handleSubmit = event => {
    event.preventDefault();

    const newDog = {
       firstname: this.state.firstName,
       lastname: this.state.lastName
    };


  axios.post('http://localhost:5000/newdog', {newDog})

    .then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
        Dog First Name:
        <input type="text" name="firstName" onChange ={this.handleFirstNameChange}/>
        </label>
        <label>
        Dog Last Name:
        <input type="text" name="lastName" onChange ={this.handleLastNameChange} />
        </label>
        <button type= "submit"> Add </button>
      </form>


          )
     }
}



export default CreateDog;
