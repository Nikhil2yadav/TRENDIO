
// import React, { useState, useEffect } from "react";
// import { Navbar, Nav, Container, Button, Form, FormControl } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faShoppingCart, faSignInAlt, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
// import { Link, useNavigate } from "react-router-dom";

// const CustomNavbar = () => {
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName,setUserName]=useState('');
//   const navigate = useNavigate();

//   // Check login status from localStorage
//   useEffect(() => {
//     const loginStatus = localStorage.getItem("isLoggedIn") === "true";
//     setIsLoggedIn(loginStatus); // Set the login status based on localStorage
//     const name = localStorage.getItem("userDetails_name") || ""; // Get user name or default to empty string
//      setUserName(name);
//   }, []);

//   // Watch for changes in localStorage for login status
//   useEffect(() => {
//     const handleStorageChange = () => {
//       const loginStatus = localStorage.getItem("isLoggedIn") === "true";
//       setIsLoggedIn(loginStatus); 
//       const name = localStorage.getItem("userDetails_name") || "sign in "; // Get user name or default to empty string
//       setUserName(name);

//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   const toggleSearch = () => setSearchVisible(!searchVisible);

//   const handleLoginLogout = () => {
//     if (isLoggedIn) {
//       // Perform logout
//       localStorage.setItem("isLoggedIn", "false");
//       setIsLoggedIn(false);
//       navigate("/login"); // Redirect to login page after logout
//     } else {
//       // Perform login (for testing purpose)
//       localStorage.setItem("isLoggedIn", "true");
//       setIsLoggedIn(true);
//       navigate("/"); // Redirect to home page after login
//     }
//   };
//   const handleAddToCart = () => {
//     const userLoginOrNot = localStorage.getItem("isLoggedIn");
//     if (!userLoginOrNot) {
//       navigate('/login');
//     } else {
//       navigate('/addtocart');
//     }
//   };
//   // Handle search form submission
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/search?query=${searchQuery}`);
//       setSearchQuery(""); // Clear the search field after submission
//     }
//   };

//   return (
//     <Navbar bg="dark" expand="lg">
//       <Container fluid>
//         {/* Company Name */}
//         <Link to="/" className="navbar-brand text-light">
//           TRENDIO
//         </Link>

//         {/* Centered Links */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
//           <Nav>
//             <Link to="/" className="nav-link text-light">Home</Link>
//             <Link to="/product" className="nav-link text-light">Products</Link>
//             <Link to="/about" className="nav-link text-light">About</Link>
//             <Link to="/contact" className="nav-link text-light">Contact</Link>
//             {/* <Link to="/orderproduct" className="nav-link text-light">Order</Link> */}
//           </Nav>
//         </Navbar.Collapse>

//         {/* Icons (Search, Cart, Login/Logout) */}
//         <div className="d-flex align-items-center">
//           {/* Search Icon */}
//           <Button variant="light" style={{maxWidth:"50px"}} onClick={toggleSearch} className="me-2">
//             <FontAwesomeIcon icon={faSearch} />
//           </Button>

//           {searchVisible && (
//             <Form onSubmit={handleSearchSubmit} className="d-flex">
//               <FormControl
//                 type="text"
//                 placeholder="Search"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="mr-sm-2"
//               />
//               <Button type="submit" style={{maxWidth:"50px"}} variant="primary" className="ms-2">Go</Button>
//             </Form>
//           )}

//           {/* Cart Icon */}
//           <Button variant="light" style={{maxWidth:"50px"}}onClick={handleAddToCart} className="me-2">
//             <FontAwesomeIcon icon={faShoppingCart} />
//           </Button>

//           {/* Login/Logout Button */}
//           {isLoggedIn ? (
//             <a href="/logout">
//             <Button variant="light" style={{maxWidth:"50px"}} onClick={handleLoginLogout}>
//               <FontAwesomeIcon icon={faSignOutAlt} />
//             </Button>
//             </a>
            
//           ) : (
//             <Link to="/login">
//               <Button variant="light" style={{maxWidth:"50px"}}>
//                 <FontAwesomeIcon icon={faSignInAlt} />
//               </Button>
//             </Link>
//           )}
//         </div>
//          <span className="text-light me-2"> {userName}
//          <FontAwesomeIcon icon={faUser} className="nav-icon courser-pointer" />
//          </span>

//       </Container>
//     </Navbar>
//   );
// };

// export default CustomNavbar;
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faSignInAlt, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const CustomNavbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  // Check login status from localStorage
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus); 
    const name = localStorage.getItem("userDetails_name") || "";
    setUserName(name);
  }, []);

  // Watch for changes in localStorage for login status
  useEffect(() => {
    const handleStorageChange = () => {
      const loginStatus = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loginStatus); 
      const name = localStorage.getItem("userDetails_name") || "sign in";
      setUserName(name);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const toggleSearch = () => setSearchVisible(!searchVisible);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "false");
      setIsLoggedIn(false);
      navigate("/login");
    } else {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/");
    }
  };

  const handleAddToCart = () => {
    const userLoginOrNot = localStorage.getItem("isLoggedIn");
    if (!userLoginOrNot) {
      navigate('/login');
    } else {
      navigate('/addtocart');
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Link to="/" className="navbar-brand text-light">TRENDIO</Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Link to="/" className="nav-link text-light">Home</Link>
            <Link to="/product" className="nav-link text-light">Products</Link>
            <Link to="/about" className="nav-link text-light">About</Link>
            <Link to="/contact" className="nav-link text-light">Contact</Link>
            <Link to="/orderproduct" className="nav-link text-light">Orders</Link>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex align-items-center">
          <Button variant="light" style={{ maxWidth: "50px" }} onClick={toggleSearch} className="me-2">
            <FontAwesomeIcon icon={faSearch} />
          </Button>

          {searchVisible && (
            <Form onSubmit={handleSearchSubmit} className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mr-sm-2"
              />
              <Button type="submit" style={{ maxWidth: "50px" }} variant="primary" className="ms-2">Go</Button>
            </Form>
          )}

          <Button variant="light" style={{ maxWidth: "50px" }} onClick={handleAddToCart} className="me-2">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Button>

          {isLoggedIn ? (
            <a href="/logout">
              <Button variant="light" style={{ maxWidth: "50px" }} onClick={handleLoginLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </Button>
            </a>
          ) : (
            <Link to="/login">
              <Button variant="light" style={{ maxWidth: "50px" }}>
                <FontAwesomeIcon icon={faSignInAlt} />
              </Button>
            </Link>
          )}
        </div>

        {isLoggedIn && (
          <span className="text-light me-2">
            {/* {userName} */}
            <Link to='/BuyerProfile'>
            <FontAwesomeIcon icon={faUser} className=" ms-1" />

            </Link>
          </span>
        )}
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;