import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import axios from "axios";

function Contact() {
    return (
      <div className="container mt-5">
        <div className="jumbotron text-center bg-dark text-white">
          <h1 id="fadetext">Contact Me</h1>
          <p className="lead" id="fadetext">
            Use the form below to send me an email.
          </p>
        </div>

        <div className="jumbotron bg-dark text-white">
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validate={values => {
              let errors = {};
              if (!values.name) {
                errors.name = 'Required';
              }
              if (!values.message) {
                errors.message = 'Required';
              }
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                let data = {
                  name: values.name,
                  email: values.email,
                  message: values.message
              }
              
              axios.post('http://localhost:5000/send', data)
              .then( res => {
                alert("Message sent!");
                values.name = "";
                values.email = "";
                values.message = "";
                setSubmitting(false);  
              })
              .catch( () => {
                console.log('Message not sent')
              })
              }, 400);
            }}
          >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isInvalid
          }) => (
          <Form
            onSubmit={handleSubmit}
            id="contact-form"
          >
            <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email address."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              isInvalid={!!errors.message}
            />
            <Form.Control.Feedback type="invalid">Please enter a messsage.</Form.Control.Feedback>
            </Form.Group>

            <div class="clearfix">
              <Button variant="danger" type="submit" disabled={isSubmitting}>Send Message</Button>
              <p className="lead float-right">Or email me at: <strong>desinoelle@gmail.com</strong></p>
            </div>
            
          </Form>
          )}
          </Formik>
        </div>

        <div className="jumbotron text-center bg-dark text-white">
          <h3>Follow me on social media!</h3>
          <div className="clearfix d-flex justify-content-center bg-white p-3 mt-3 rounded">
            <div className="mr-5 ml-5">
            <a href="https://www.linkedin.com/in/desiree-howell/" target="_blank" rel="noopener noreferrer">
              <img src="./assets/images/linkedin.png" className="img-fluid float-left" alt="LinkedIn" />
            </a>
            </div>
            <div className="mr-5">
            <a href="https://www.facebook.com/dezzienoelle" target="_blank" rel="noopener noreferrer">
              <img src="./assets/images/facebook.png" className="img-fluid float-left" alt="Facebook" /> 
            </a>
            </div>
            <div className="mr-5">
            <a href="https://www.instagram.com/yuhgirldes/" target="_blank" rel="noopener noreferrer">
              <img src="./assets/images/instagram.jfif" className="img-fluid float-left" alt="Instagram" />  
            </a>
            </div>
            <div className="mr-5">
            <a href="https://github.com/desinoelle" target="_blank" rel="noopener noreferrer">
              <img src="./assets/images/github.png" className="img-fluid float-left" alt="GitHub" />  
            </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;