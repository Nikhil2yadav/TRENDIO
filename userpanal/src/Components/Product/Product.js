
import React, { useState, useEffect } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInr, faFilter } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/college%20project/mini%20project/api/DisplayProductApi.php"
        );

        console.log("API Response:", response.data); // Debugging API response
        if (Array.isArray(response.data)) {
          setProducts(response.data);
          setFilteredProducts(response.data);
        } else {
          console.error("Invalid data format received:", response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Filter products when gender or price range changes
  useEffect(() => {
    let updatedProducts = [...products];

    if (selectedGender) {
      updatedProducts = updatedProducts.filter(
        (product) => product.Gender === selectedGender
      );
    }

    // Handle price range correctly
    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
      updatedProducts = updatedProducts.filter(
        (product) =>
          parseFloat(product.ProductPrice) >= minPrice &&
          parseFloat(product.ProductPrice) <= maxPrice
      );
    }

    setFilteredProducts(updatedProducts);
  }, [selectedGender, selectedPriceRange, products]);

  return (
    <div className="container-fluid bg-light py-5 d-flex">
      {/* Sidebar Filters */}
      <div className="bg-white shadow-sm p-4 me-4" style={{ width: "250px", minHeight: "100vh" }}>
        <h4>
          <FontAwesomeIcon icon={faFilter} /> Filters
        </h4>
        
        {/* Price Filter */}
        <Form.Group className="mb-3">
          <Form.Label>Price Range</Form.Label>
          <Form.Select
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
          >
            <option value="">All Prices</option>
            <option value="0-500">₹0 - ₹500</option>
            <option value="500-1000">₹500 - ₹1000</option>
            <option value="1000-5000">₹1000 - ₹5000</option>
          </Form.Select>
        </Form.Group>

        {/* Gender Filter */}
        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
          >
            <option value="">All Genders</option>
            <option value="Male">Men</option>
            <option value="Female">Women</option>
          </Form.Select>
        </Form.Group>

        <Button
          variant="secondary"
          onClick={() => {
            setSelectedPriceRange("");
            setSelectedGender("");
          }}
        >
          Reset Filters
        </Button>
      </div>

      {/* Product Grid */}
      <div className="flex-grow-1">
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Col md={3} className="mb-4" key={index}>
                <Link
                  to={`/product/${product.ProductId}`}
                  className="text-decoration-none"
                >
                  <Card className="h-100 shadow-sm border-0 product-card">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: "250px",
                        width: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={`http://localhost:8080/college%20project/mini%20project/api/Images/${product.Image1}`}
                        style={{ height: "100%", width: "80%" }}
                        onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="text-center text-dark">
                        {product.ProductName}
                      </Card.Title>
                      <Card.Text className="text-center text-dark mt-auto">
                        <FontAwesomeIcon icon={faInr} /> {product.ProductPrice}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))
          ) : (
            <p className="text-center w-100">No products found.</p>
          )}
        </Row>
      </div>
    </div>
  );
};

export default Product;
