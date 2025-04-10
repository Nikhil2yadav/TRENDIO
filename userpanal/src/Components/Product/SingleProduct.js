import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Carousel,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInr } from "@fortawesome/free-solid-svg-icons";
import { FaStar } from "react-icons/fa";

const SingleProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [totalamount, setTotalamount] = useState(0);
  const [sizeError, setSizeError] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [reviews, setReviews] = useState([]);
  const [hover, setHover] = useState(null);
  useEffect(() => {
    // fetchProductDetails();
    fetchProductReviews();
  }, [productId]);
  const navigate = useNavigate();
  const buyerID = localStorage.getItem("buyerId");
  const fetchProductReviews = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/college%20project/mini%20project/api/GetProductReviews.php?productId=${productId}`
      );
      setReviews(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  const handleAddReview = async () => {
    const formData = new FormData();
    formData.append("ProductId", productId);
    formData.append("BuyerId", buyerID);
    formData.append("rating", rating);
    formData.append("comment", feedback);

    try {
      await axios.post(
        "http://localhost:8080/college%20project/mini%20project/api/InsertFeedback.php",
        formData
      );
      alert("Review added successfully!");
      setFeedback("");
      setRating(0);
      fetchProductReviews(); // Fetch updated reviews after adding
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/college%20project/mini%20project/api/Getsingleproductapi.php?ProductId=${productId}`
        );
        if (response.data) {
          setProduct(response.data);
          setTotalamount(response.data.ProductPrice);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    setSizeError("");
  };

  // const handleQuantityChange = (amount) => {
  //   const newQuantity = quantity + amount;
  //   if (newQuantity >= 1) {
  //     setQuantity(newQuantity);
  //     setTotalamount(newQuantity * product?.ProductPrice || 0);
  //   }
  // };
  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
      setTotalamount(newQuantity * product?.ProductPrice || 0);
    }
  };
  const handleAddToCart = async () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (!selectedSize) {
      setSizeError("Please select a size");
      return;
    }

    const formData = new FormData();
    formData.append("productid", productId);
    formData.append("buyerId", buyerID);
    formData.append("price", product.ProductPrice);
    formData.append("quantity", quantity);
    formData.append("amount", totalamount);
    formData.append("size", selectedSize);

    try {
      const response = await axios.post(
        "http://localhost:8080/college%20project/mini%20project/api/AddtocartApi.php",
        formData
      );
      console.log(response.data);
      navigate("/addtocart");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <Container className="py-5">
      {product ? (
        <Row>
          <Col md={6}>
            <Carousel>
              {product?.Image1 && (
                <Carousel.Item>
                  <img
                    src={`http://localhost:8080/college%20project/mini%20project/api/Images/${product.Image1}`}
                    alt="Product"
                    className="img-fluid d-block mx-auto"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              )}
              {product?.image2 && (
                <Carousel.Item>
                  <img
                    src={`http://localhost:8080/college%20project/mini%20project/api/Images/${product.image2}`}
                    alt="Product"
                    className="img-fluid d-block mx-auto"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              )}
              {product?.image3 && (
                <Carousel.Item>
                  <img
                    src={`http://localhost:8080/college%20project/mini%20project/api/Images/${product.image3}`}
                    alt="Product"
                    className="img-fluid d-block mx-auto"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              )}
              {product?.image4 && (
                <Carousel.Item>
                  <img
                    src={`http://localhost:8080/college%20project/mini%20project/api/Images/${product.image4}`}
                    alt="Product"
                    className="img-fluid d-block mx-auto"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              )}
            </Carousel>
          </Col>

          <Col md={6}>
            <h2>{product?.ProductName}</h2>
            <h4 className="text-success">
              <FontAwesomeIcon
                icon={faInr}
                className="m-1"
                style={{ maxHeight: "15px" }}
              />
              {product?.ProductPrice}
            </h4>

            {product?.Size && product?.Size.length > 0 ? (
              <Form.Group>
                <Form.Label>Select Size</Form.Label>
                <div>
                  {product.Size.split(",").map((size) => (
                    <Form.Check
                      inline
                      key={size}
                      label={size}
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={handleSizeChange}
                    />
                  ))}
                </div>
                {sizeError && <p className="text-danger">{sizeError}</p>}
              </Form.Group>
            ) : (
              <p>No sizes available</p>
            )}
            

            <Form.Group className="mt-3">
              <Form.Label>Quantity</Form.Label>
              <InputGroup className="quantity-selector">
                <Button
                  variant="outline-secondary"
                  onClick={() => handleQuantityChange(-1)}
                  style={{ maxWidth: "50px" }}
                >
                  -
                </Button>
                <Form.Control
                  type="number"
                  value={quantity}
                  readOnly
                  className="text-center form-control-sm m-2"
                  style={{ maxWidth: "50px" }}
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => handleQuantityChange(1)}
                  style={{ maxWidth: "50px" }}
                >
                  +
                </Button>
              </InputGroup>
            </Form.Group>
            <b>Description:</b>
            <p>{product?.ProductDescription}</p>
            <Button
              className="mt-3"
              onClick={handleAddToCart}
              variant="primary"
              size="sm"
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
      ) : (
        <p>Loading product details...</p>
      )}

      <Form.Group className="mt-3">
        <Form.Label>Rating</Form.Label>
        <div>
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;

            return (
              <label key={index}>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => handleRating(currentRating)}
                  style={{ display: "none" }}
                />
                <FaStar
                  className="star"
                  size={30}
                  color={
                    currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Feedback</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </Form.Group>

      <Button
        className="mt-3"
        onClick={handleAddReview}
        variant="primary"
        size="sm"
      >
        Submit Review
      </Button>

      <hr />

      <h4>Product Reviews:</h4>
      {reviews.map((review, index) => (
        <div key={index} className="mb-3">
          <strong>{review.Name}</strong> | ⭐ {review.rating} / 5
          <p>{review.comment}</p>
          <hr />
        </div>
      ))}
    </Container>
  );
};

export default SingleProduct;
