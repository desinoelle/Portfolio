import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Contact extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }

  handleSubmit(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });

    if (!name.value || !email.value || !message.value) {
      console.log("Error");
    } else {
      event.preventDefault();
        
      axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data: {
          name: name,   
          email: email,  
          messsage: message
        }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm();
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.");
            }
        })
    }
  }

  resetForm() {
    document.getElementById("contact-form").reset();
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
            onSubmit={event => this.handleSubmit(event)}
            id="contact-form"
          >
            <Form.Group controlId="validationName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your name."
              id="name"
            />
            <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter your email address."
              id="email"
            />
            <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="5"
              id="message"
            />
            <Form.Control.Feedback type="invalid">Please enter a messsage.</Form.Control.Feedback>
            </Form.Group>
          
            <Button variant="danger" type="submit">Submit form</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;