import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    submittedData: []
  }

  handleNameChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    let formInput = {firstName: this.state.firstName, lastName: this.state.lastName}
    this.setState(prev => ({
      submittedData: [
        ...prev.submittedData,
        formInput
      ]
    }))
    
  }

  listOfSubmitssion = () => {
    return this.state.submittedData.map(data =>{
      return <div><span>{data.firstName}</span></div>
    })
  }
  
  

  render() {
    console.log(this.state)
    return (
      <div>
      <form onSubmit={event => {this.handleSubmit(event)}}>
        <input type="text" name="firstName" onChange={event => this.handleNameChange(event)} value={this.state.firstName} placeholder="FirstName" />
        <input type="text" name="lastName" onChange={event => this.handleNameChange(event)} value={this.state.lastName} placeholder="LastName" />
        <input type="submit" />
      </form>
        {this.listOfSubmitssion()}
      </div>
    )
  }
}

export default Form;