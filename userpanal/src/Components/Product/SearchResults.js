
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInr } from "@fortawesome/free-solid-svg-icons";

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("query");
  const navigate = useNavigate();

  // Fetch products based on search query
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/SearchProductApi.php?query=${query}`
        );
        setProducts(Array.isArray(response.data) ? response.data : []); // Ensure products is always an array
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  const handleAddToCart = () => {
    const userLoginOrNot = localStorage.getItem("isLoggedIn");
    if (!userLoginOrNot) {
      navigate('/login');
    } else {
      navigate('/addtocart');
    }
  };

  return (
    <Container fluid className="py-5">
      <h2 className="display-4 font-weight-bold mb-4">Search Results for "{query}"</h2>
      <Row>
        {products.length > 0 ? (
          products.map((product, index) => (
            <Col md={3} className="mb-4 d-flex align-items-stretch" key={index}>
              <Link 
                to={`/product/${product.ProductId}`} 
                className="text-decoration-none" // Remove underline with Bootstrap class
                style={{ textDecoration: 'none', color: 'inherit' }} // Inline styling as a fallback
              >
                <Card className="w-200 h-100 d-flex flex-column">
                  <Card.Img
                    variant="top"
                    src={`http://localhost:8000/api/Images/${product.Image1}`}
                    style={{ height: '300px' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-center text-dark">{product.ProductName}</Card.Title>
                    <Card.Text className="text-center text-dark mt-auto">
                      <FontAwesomeIcon icon={faInr} /> {product.ProductPrice}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <p>No products found for your search.</p>
        )}
      </Row>
    </Container>
  );
};

export default SearchResults;
