import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send"
  }

  handleSubmit = (e) => {
    e.preventDefault();
  
    this.setState({
        buttonText: '...sending'
    })
  
    let data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
    }
    
    axios.post('API_URI', data)
    .then( res => {
        this.setState({ sent: true }, this.resetForm())
    })
    .catch( () => {
      console.log('Message not sent')
    })
  }

  resetForm = () => {
    this.setState({
        name: '',
        message: '',
        email: '',
        buttonText: 'Message Sent'
    })
  }

  render() {
    const { validated } = this.state;
    return (
      <div className="container mt-5">
        <div className="jumbotron text-center bg-dark text-white">
          <h1 id="fadetext">Contact Me</h1>
          <p className="lead" id="fadetext">
            Use the form below to send me an email.
          </p>
        </div>

        <div className="jumbotron bg-dark text-white">
          <Form
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
            id="contact-form"
          >
            <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your name."
              onChange = {e => this.setState({ name: e.target.value })}
              value={this.state.name}
            />
            <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter your email address."
              onChange = {e => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
            <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="5"
              onChange = {e => this.setState({ message: e.target.value })}
              value={this.state.message}
            />
            <Form.Control.Feedback type="invalid">Please enter a messsage.</Form.Control.Feedback>
            </Form.Group>
          
            <Button variant="danger" type="submit">{this.state.buttonText}</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;