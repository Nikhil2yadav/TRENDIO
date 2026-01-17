import Image1 from "./Images/priscilla-du-preez-dlxLGIy-2VU-unsplash.jpg";
import Img3 from "./Images/clark-street-mercantile-qnKhZJPKFD8-unsplash(1).jpg";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInr } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/DisplayProductApi.php"
        );
        setProducts(response.data); // Assuming the API returns an array of products
        console.log(response.data);
        console.log(response.data.ProductId);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
 
  // Get the last four products
  const lastFourProducts = products.slice(-4);

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="text-white text-center py-5">
        <Container fluid>
          <Carousel interval={20000}>
            <Carousel.Item>
              <div
                className="d-block w-100"
                style={{
                  backgroundImage:
                    "url('https://media.istockphoto.com/id/894656760/photo/brand-new-interior-of-cloth-store.jpg?s=1024x1024&w=is&k=20&c=dd-JPi8LwlT5ILKQK8lNiLoFi9OjSfNdKJ3FCDBMWB8=')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "80vh",
                }}
              >
                <Carousel.Caption>
                  <h1 className="display-4 font-weight-bold mb-4">
                    Discover the Latest Trends
                  </h1>
                  <p className="lead mb-4">
                    Elevate your style with our curated collection.
                  </p>
                  <Link to="/product">
                    <Button variant="primary" size="lg">
                      Shop Now
                    </Button>
                  </Link>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="d-block w-100"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "80vh",
                }}
              >
                <Carousel.Caption>
                  <h1 className="display-4 font-weight-bold mb-4">
                    Explore Our Collection
                  </h1>
                  <p className="lead mb-4">
                    Find your perfect style among our new arrivals.
                  </p>
                  <Link to="/product">
                    <Button variant="primary" size="lg">
                      Shop Now
                    </Button>
                  </Link>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="d-block w-100"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "80vh",
                }}
              >
                <Carousel.Caption>
                  <h1 className="display-4 font-weight-bold mb-4">
                    Elevate Your Style
                  </h1>
                  <p className="lead mb-4">
                    Explore our latest collections and trends.
                  </p>
                  <Link to="/product">
                    <Button variant="primary" size="lg">
                      Shop Now
                    </Button>
                  </Link>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="d-block w-100"
                style={{
                  backgroundImage: `url('https://plus.unsplash.com/premium_photo-1664202526075-2e9d73947434?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "80vh",
                }}
              >
                <Carousel.Caption>
                  <h1 className="display-4 font-weight-bold mb-4">
                    Find Your Perfect Fit
                  </h1>
                  <p className="lead mb-4">
                    Discover the latest fashion trends now.
                  </p>
                  <Link to="/product">
                    <Button variant="primary" size="lg">
                      Shop Now
                    </Button>
                  </Link>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="d-block w-100"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1617405872665-c6aa7ab50895?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "80vh",
                }}
              >
                <Carousel.Caption>
                  <h1 className="display-4 font-weight-bold mb-4">
                    Shop the Latest Trends
                  </h1>
                  <p className="lead mb-4">
                    Update your wardrobe with our new arrivals.
                  </p>
                  <Link to="/product">
                    <Button variant="primary" size="lg">
                      Shop Now
                    </Button>
                  </Link>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* Popular Categories Section */}
      <section className="py-5">
        <Container fluid>
          <h2 className="display-4 font-weight-bold mb-4">
            Popular Categories
          </h2>
          <Row>
            <Col md={3} className="mb-4">
              <Card style={{ width: "100%", height: "350px" }}>
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={Image1}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
                <Card.Body>
                <Link to='/product' className="text-dark text-decoration-none">
                <Card.Title>Dresses</Card.Title>
                <Card.Text>Explore our latest dress collection.</Card.Text>
                </Link>
                 
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card style={{ width: "100%", height: "350px" }}>
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={Img3}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
                <Card.Body>
                <Link to='/product' className="text-dark text-decoration-none">
                <Card.Title>T-shirt Shirt</Card.Title>
                <Card.Text>Find the perfect top for any occasion.</Card.Text>
                </Link>
                 
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card style={{ width: "100%", height: "350px" }}>
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src="https://t3.ftcdn.net/jpg/08/18/68/30/240_F_818683070_GIjXGm3F2tzvvLNvJZJAgc7eq3SpW0os.jpg"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
                <Card.Body>
                <Link to='/product' className="text-dark text-decoration-none">
                <Card.Title>jeans </Card.Title>
                  <Card.Text>
                    Discover our selection of stylish bottoms.
                  </Card.Text>
                </Link>

                  
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card style={{ width: "100%", height: "350px" }}>
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iTNKVg3IPP9ouIVzPCqeN4PvKXnp7Z6yEw&s"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
                <Card.Body>
                <Link to='/product' className="text-dark text-decoration-none">
                <Card.Title>Shoes</Card.Title>
                <Card.Text>Elevate your look with our Shoes.</Card.Text>
                </Link>

                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* New Arrivals Section */}
      <section className="bg-light py-5">
        <Container fluid>
          <h2 className="display-4 font-weight-bold mb-4">New Arrivals</h2>
          <Row>
            {lastFourProducts.map((product, index) => (
              <Col md={3} className="mb-4" key={index}>
                <Link
                  to={`/product/${product.ProductId}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Card>
                    <div
                      style={{
                        height: "250px",
                        width: "200px",
                        overflow: "hidden",
                        margin: "auto",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={`http://localhost:8000/api/Images/${product.Image1}`}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{product.ProductName}</Card.Title>
                      <Card.Text>
                        <FontAwesomeIcon
                          icon={faInr}
                          className=""
                          style={{ maxHeight: "15px" }}
                        />
                        {product.ProductPrice}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
