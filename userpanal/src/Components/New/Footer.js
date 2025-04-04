
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container fluid>
        <Row className="align-items-center">
          {/* Company Name with Link */}
          <Col md={4} className="text-start">
            <Link to="/" className="text-light text-decoration-none">
              <h5>TRENDIO</h5>
            </Link>
          </Col>

          {/* Navigation Links */}
          <Col md={4} className="text-center">
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li className="mx-3">
                <Link to="/" className="text-light text-decoration-none">Home</Link>
              </li>
              <li className="mx-3">
                <Link to="/product" className="text-light text-decoration-none">Products</Link>
              </li>
              <li className="mx-3">
                <Link to="/about" className="text-light text-decoration-none">About</Link>
              </li>
              <li className="mx-3">
                <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
              </li>
            </ul>
          </Col>

          {/* Social Media Icons */}
          <Col md={4} className="text-end">
            <Link to='https://facebook.com' className='text-light mx-2'>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </Link>
            <Link to="https://instagram.com" className="text-light mx-2">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
            <Link to="https://twitter.com" className="text-light mx-2">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
