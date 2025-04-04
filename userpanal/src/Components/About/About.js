import React from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      {/* Introduction Section */}
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 className="mb-4">About Us</h1>
          <p className="lead">
            Welcome to <strong>Our E-Commerce Store</strong>, where we prioritize quality and convenience in your shopping experience.
            Explore a wide variety of products curated with care, all while enjoying a seamless and secure shopping experience.
          </p>
        </Col>
      </Row>

      {/* Our Story Section */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image
            src="https://retaildesignblog.net/wp-content/uploads/2018/11/7R9A5223-780x520.jpg"
            rounded
            fluid
            className="mb-3"
          />
        </Col>
        <Col md={6}>
          <h2>Our Story</h2>
          <p>
            Launched in 2024, we began with a vision to make online shopping simple and accessible. Starting from humble beginnings, 
            we’ve now grown into a leading platform, known for customer satisfaction and an ever-expanding catalog of products.
          </p>
        </Col>
      </Row>

      {/* Values Section */}
      <Row className="mb-5 text-center">
        <Col md={12}>
          <h2>Our Core Values</h2>
          <p>We believe in quality, customer service, and innovation. Here's what drives us:</p>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Quality</Card.Title>
              <Card.Text>
                Every product in our store is carefully selected to meet the highest standards.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Customer Service</Card.Title>
              <Card.Text>
                We’re always here to help, providing round-the-clock support for your queries and concerns.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Innovation</Card.Title>
              <Card.Text>
                We continuously work to improve your shopping experience with new features and a smoother platform.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Team Section */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h2>Meet Our Team</h2>
          <p>
            Our team is a diverse group of passionate individuals committed to delivering the best service to our customers. From
            tech experts to customer support specialists, we are driven by a common goal: to make your shopping journey enjoyable.
          </p>
        </Col>
        <Col md={6}>
          <Image
            src="https://www.sana-commerce.com/wp-content/uploads/happy-team-talking-and-laughing.jpg"
            rounded
            fluid
            className="mb-3"
          />
        </Col>
      </Row>

      {/* Contact Section */}
      <Row className="text-center">
        <Col md={12}>
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us at:</p>
          <p><a href="mailto:nikhilyadav@gmail.com">nikhilyadav5019.com</a> or call us at +91 261 355 9499.</p>
          <Button variant="primary" href="mailto:nikhilyadav5019@gmail.com">
            Get in Touch
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

