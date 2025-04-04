
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. We have received your message.`);
    // Add an API call here to submit the formData to your backend.
  };

  return (
    <Container className="my-5">
      {/* Page Header */}
      <Row className="mb-5 text-center">
        <Col>
          <h1>Contact Us</h1>
          <p className="lead">
            Have any questions or feedback? We would love to hear from you!
          </p>
        </Col>
      </Row>

      {/* Contact Form and Information */}
      <Row>
        {/* Contact Form */}
        <Col md={6} className="mb-4">
          <h2>Get in Touch</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>

        {/* Contact Information and Map */}
        <Col md={6} className="mb-4">
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> 413 E-Commerce Store, Raj Corner, Pal, Surat
          </p>
          <p>
            <strong>Phone:</strong> +91 261 355 9499
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:nikhilyadav5019@gmail.com">nikhilyadav5019@gmail.com</a>
          </p>

          {/* Embedded Google Map */}
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d464.97240134704316!2d72.7728593!3d21.2009281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d275053f069%3A0x94d6c57b9fa1bf01!2sRaj%20Corner!5e0!3m2!1sen!2sin!4v1725005253376!5m2!1sen!2sin"
              width="100%"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
