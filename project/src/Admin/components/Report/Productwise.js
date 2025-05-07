// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import axios from "axios";
// // // // // // // import {
// // // // // // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
// // // // // // //   CartesianGrid, ResponsiveContainer
// // // // // // // } from "recharts";
// // // // // // // import { Table, Form, Button } from "react-bootstrap";
// // // // // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // // // // import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
// // // // // // // import { Link } from "react-router-dom";

// // // // // // // const Productwise = () => {
// // // // // // //   const [orderData, setOrderData] = useState([]);
// // // // // // //   const [month, setMonth] = useState("");
// // // // // // //   const [year, setYear] = useState("");
// // // // // // //   const [sellerId, setSellerId] = useState("");

// // // // // // //   useEffect(() => {
// // // // // // //     fetchOrderData();
// // // // // // //   }, []);

// // // // // // //   const fetchOrderData = async () => {
// // // // // // //     try {
// // // // // // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // // // // // //         params: { month, year, sellerId }
// // // // // // //       });
// // // // // // //       setOrderData(response.data);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error fetching order report:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="content-wrapper">
// // // // // // //       <div className="container">
// // // // // // //         <div className="content-header">
// // // // // // //           <div className="container-fluid">
// // // // // // //             <div className="row mb-2">
// // // // // // //               <div className="col-sm-6">
// // // // // // //                 <h1 className="m-0 text-dark">Reports</h1>
// // // // // // //               </div>
// // // // // // //               <div className="col-sm-6">
// // // // // // //                 <ol className="breadcrumb float-sm-right">
// // // // // // //                   <li className="breadcrumb-item">
// // // // // // //                     <Link to="/admin/Dashboard">
// // // // // // //                       <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
// // // // // // //                       Home
// // // // // // //                     </Link>
// // // // // // //                   </li>
// // // // // // //                   <li className="breadcrumb-item active">📊 Seller Order Report</li>
// // // // // // //                 </ol>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Filters */}
// // // // // // //         <Form className="mb-3 d-flex gap-2">
// // // // // // //           <Form.Control as="select" value={month} onChange={(e) => setMonth(e.target.value)}>
// // // // // // //             <option value="">Select Month</option>
// // // // // // //             {Array.from({ length: 12 }, (_, i) => (
// // // // // // //               <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString("en", { month: "long" })}</option>
// // // // // // //             ))}
// // // // // // //           </Form.Control>

// // // // // // //           <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
// // // // // // //             <option value="">Select Year</option>
// // // // // // //             {Array.from({ length: 5 }, (_, i) => {
// // // // // // //               const currentYear = new Date().getFullYear();
// // // // // // //               return <option key={i} value={currentYear - i}>{currentYear - i}</option>;
// // // // // // //             })}
// // // // // // //           </Form.Control>

// // // // // // //           <Form.Control type="number" placeholder="Seller ID" value={sellerId} onChange={(e) => setSellerId(e.target.value)} />

// // // // // // //           <Button variant="primary" onClick={fetchOrderData}>Filter</Button>
// // // // // // //         </Form>

// // // // // // //         {/* Bar Chart */}
// // // // // // //         <ResponsiveContainer width="100%" height={300}>
// // // // // // //           <BarChart data={orderData}>
// // // // // // //             <CartesianGrid strokeDasharray="3 3" />
// // // // // // //             <XAxis dataKey="productName" />
// // // // // // //             <YAxis />
// // // // // // //             <Tooltip />
// // // // // // //             <Legend />
// // // // // // //             <Bar dataKey="totalOrders" fill="#28a745" />
// // // // // // //           </BarChart>
// // // // // // //         </ResponsiveContainer>

// // // // // // //         {/* Table for Detailed View */}
// // // // // // //         <h4 className="mt-4 text-center">📄 Seller Order Details</h4>
// // // // // // //         <Table striped bordered hover className="mt-3">
// // // // // // //           <thead className="table-dark">
// // // // // // //             <tr>
// // // // // // //               <th>Seller ID</th>
// // // // // // //               <th>Seller Name</th>
// // // // // // //               <th>Product Name</th>
// // // // // // //               <th>Product Type</th>
// // // // // // //               <th>Total Orders</th>
// // // // // // //             </tr>
// // // // // // //           </thead>
// // // // // // //           <tbody>
// // // // // // //             {orderData.length > 0 ? (
// // // // // // //               orderData.map((order) => (
// // // // // // //                 <tr key={order.sellerId + order.productName}>
// // // // // // //                   <td>{order.sellerId}</td>
// // // // // // //                   <td>{order.Name}</td>
// // // // // // //                   <td>{order.productName}</td>
// // // // // // //                   <td>{order.productType}</td>
// // // // // // //                   <td>{order.totalOrders}</td>
// // // // // // //                 </tr>
// // // // // // //               ))
// // // // // // //             ) : (
// // // // // // //               <tr>
// // // // // // //                 <td colSpan="5" className="text-center">No data available</td>
// // // // // // //               </tr>
// // // // // // //             )}
// // // // // // //           </tbody>
// // // // // // //         </Table>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Productwise;
// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import axios from "axios";
// // // // // // import {
// // // // // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
// // // // // //   CartesianGrid, ResponsiveContainer
// // // // // // } from "recharts";
// // // // // // import { Table, Form, Button } from "react-bootstrap";
// // // // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // // // import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
// // // // // // import { Link } from "react-router-dom";

// // // // // // const Productwise = () => {
// // // // // //   const [orderData, setOrderData] = useState([]);
// // // // // //   const [month, setMonth] = useState("");
// // // // // //   const [year, setYear] = useState("");
// // // // // //   const [productType, setProductType] = useState(""); // Replacing sellerId with productType

// // // // // //   useEffect(() => {
// // // // // //     fetchOrderData();
// // // // // //   }, []);

// // // // // //   const fetchOrderData = async () => {
// // // // // //     try {
// // // // // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // // // // //         params: { month, year, productType } // Using productType instead of sellerId
// // // // // //       });
// // // // // //       setOrderData(response.data);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error fetching order report:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="content-wrapper">
// // // // // //       <div className="container">
// // // // // //         <div className="content-header">
// // // // // //           <div className="container-fluid">
// // // // // //             <div className="row mb-2">
// // // // // //               <div className="col-sm-6">
// // // // // //                 <h1 className="m-0 text-dark">Reports</h1>
// // // // // //               </div>
// // // // // //               <div className="col-sm-6">
// // // // // //                 <ol className="breadcrumb float-sm-right">
// // // // // //                   <li className="breadcrumb-item">
// // // // // //                     <Link to="/admin/Dashboard">
// // // // // //                       <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
// // // // // //                       Home
// // // // // //                     </Link>
// // // // // //                   </li>
// // // // // //                   <li className="breadcrumb-item active">📊 Seller Order Report</li>
// // // // // //                 </ol>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Filters */}
// // // // // //         <Form className="mb-3 d-flex gap-2">
// // // // // //           <Form.Control as="select" value={month} onChange={(e) => setMonth(e.target.value)}>
// // // // // //             <option value="">Select Month</option>
// // // // // //             {Array.from({ length: 12 }, (_, i) => (
// // // // // //               <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString("en", { month: "long" })}</option>
// // // // // //             ))}
// // // // // //           </Form.Control>

// // // // // //           <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
// // // // // //             <option value="">Select Year</option>
// // // // // //             {Array.from({ length: 5 }, (_, i) => {
// // // // // //               const currentYear = new Date().getFullYear();
// // // // // //               return <option key={i} value={currentYear - i}>{currentYear - i}</option>;
// // // // // //             })}
// // // // // //           </Form.Control>

// // // // // //           {/* Product Type Filter */}
// // // // // //           <Form.Control as="select" value={productType} onChange={(e) => setProductType(e.target.value)}>
// // // // // //             <option value="">Select Product Type</option>
// // // // // //             <option value="Electronics">Electronics</option>
// // // // // //             <option value="Clothing">Clothing</option>
// // // // // //             <option value="Food">Food</option>
// // // // // //             {/* Add more product types here */}
// // // // // //           </Form.Control>

// // // // // //           <Button variant="primary" onClick={fetchOrderData}>Filter</Button>
// // // // // //         </Form>

// // // // // //         {/* Bar Chart */}
// // // // // //         <ResponsiveContainer width="100%" height={300}>
// // // // // //           <BarChart data={orderData}>
// // // // // //             <CartesianGrid strokeDasharray="3 3" />
// // // // // //             <XAxis dataKey="productName" />
// // // // // //             <YAxis />
// // // // // //             <Tooltip />
// // // // // //             <Legend />
// // // // // //             <Bar dataKey="totalOrders" fill="#28a745" />
// // // // // //           </BarChart>
// // // // // //         </ResponsiveContainer>

// // // // // //         {/* Table for Detailed View */}
// // // // // //         <h4 className="mt-4 text-center">📄 Seller Order Details</h4>
// // // // // //         <Table striped bordered hover className="mt-3">
// // // // // //           <thead className="table-dark">
// // // // // //             <tr>
// // // // // //               <th>Seller ID</th>
// // // // // //               <th>Seller Name</th>
// // // // // //               <th>Product Name</th>
// // // // // //               <th>Product Type</th>
// // // // // //               <th>Total Orders</th>
// // // // // //             </tr>
// // // // // //           </thead>
// // // // // //           <tbody>
// // // // // //             {orderData.length > 0 ? (
// // // // // //               orderData.map((order) => (
// // // // // //                 <tr key={order.sellerId + order.productName}>
// // // // // //                   <td>{order.sellerId}</td>
// // // // // //                   <td>{order.Name}</td>
// // // // // //                   <td>{order.productName}</td>
// // // // // //                   <td>{order.productType}</td>
// // // // // //                   <td>{order.totalOrders}</td>
// // // // // //                 </tr>
// // // // // //               ))
// // // // // //             ) : (
// // // // // //               <tr>
// // // // // //                 <td colSpan="5" className="text-center">No data available</td>
// // // // // //               </tr>
// // // // // //             )}
// // // // // //           </tbody>
// // // // // //         </Table>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Productwise;
// // // // // import React, { useState, useEffect } from "react";
// // // // // import axios from "axios";
// // // // // import {
// // // // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
// // // // //   CartesianGrid, ResponsiveContainer
// // // // // } from "recharts";
// // // // // import { Table, Form, Button } from "react-bootstrap";
// // // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // // import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
// // // // // import { Link } from "react-router-dom";

// // // // // const Productwise = () => {
// // // // //   const [orderData, setOrderData] = useState([]);
// // // // //   const [month, setMonth] = useState("");
// // // // //   const [year, setYear] = useState("");
// // // // //   const [productType, setProductType] = useState("");
// // // // //   const [sellerId, setSellerId] = useState("");
// // // // //   const [availableYears, setAvailableYears] = useState([]);

// // // // //   useEffect(() => {
// // // // //     fetchAvailableYears(); // Fetch the available years on component mount
// // // // //     fetchOrderData(); // Fetch order data
// // // // //   }, []);

// // // // //   const fetchAvailableYears = async () => {
// // // // //     try {
// // // // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // // // //         params: { getYears: true }
// // // // //       });
// // // // //       setAvailableYears(response.data); // Set the available years for the dropdown
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching available years:", error);
// // // // //     }
// // // // //   };

// // // // //   const fetchOrderData = async () => {
// // // // //     try {
// // // // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // // // //         params: { month, year, productType, sellerId }
// // // // //       });
// // // // //       setOrderData(response.data);
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching order report:", error);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="content-wrapper">
// // // // //       <div className="container">
// // // // //         <div className="content-header">
// // // // //           <div className="container-fluid">
// // // // //             <div className="row mb-2">
// // // // //               <div className="col-sm-6">
// // // // //                 <h1 className="m-0 text-dark">Reports</h1>
// // // // //               </div>
// // // // //               <div className="col-sm-6">
// // // // //                 <ol className="breadcrumb float-sm-right">
// // // // //                   <li className="breadcrumb-item">
// // // // //                     <Link to="/admin/Dashboard">
// // // // //                       <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
// // // // //                       Home
// // // // //                     </Link>
// // // // //                   </li>
// // // // //                   <li className="breadcrumb-item active">📊 Seller Order Report</li>
// // // // //                 </ol>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Filters */}
// // // // //         <Form className="mb-3 d-flex gap-2">
// // // // //           <Form.Control as="select" value={month} onChange={(e) => setMonth(e.target.value)}>
// // // // //             <option value="">Select Month</option>
// // // // //             {Array.from({ length: 12 }, (_, i) => (
// // // // //               <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString("en", { month: "long" })}</option>
// // // // //             ))}
// // // // //           </Form.Control>

// // // // //           {/* Dynamic Year Dropdown */}
// // // // //           <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
// // // // //             <option value="">Select Year</option>
// // // // //             {availableYears.length > 0 ? (
// // // // //               availableYears.map((yearItem, index) => (
// // // // //                 <option key={index} value={yearItem}>{yearItem}</option>
// // // // //               ))
// // // // //             ) : (
// // // // //               <option value="">No years available</option>
// // // // //             )}
// // // // //           </Form.Control>

// // // // //           {/* Product Type Filter */}
// // // // //           <Form.Control as="select" value={productType} onChange={(e) => setProductType(e.target.value)}>
// // // // //             <option value="">Select Product Type</option>
// // // // //             <option value="Electronics">Electronics</option>
// // // // //             <option value="Clothing">Clothing</option>
// // // // //             <option value="Food">Food</option>
// // // // //             {/* Add more product types here */}
// // // // //           </Form.Control>

// // // // //           {/* Seller ID Filter */}
// // // // //           <Form.Control type="number" placeholder="Seller ID" value={sellerId} onChange={(e) => setSellerId(e.target.value)} />

// // // // //           <Button variant="primary" onClick={fetchOrderData}>Filter</Button>
// // // // //         </Form>

// // // // //         {/* Bar Chart */}
// // // // //         <ResponsiveContainer width="100%" height={300}>
// // // // //           <BarChart data={orderData}>
// // // // //             <CartesianGrid strokeDasharray="3 3" />
// // // // //             <XAxis dataKey="Name" />
// // // // //             <YAxis />
// // // // //             <Tooltip />
// // // // //             <Legend />
// // // // //             <Bar dataKey="totalProductsSold" fill="#28a745" />
// // // // //           </BarChart>
// // // // //         </ResponsiveContainer>

// // // // //         {/* Table for Detailed View */}
// // // // //         <h4 className="mt-4 text-center">📄 Seller Order Details</h4>
// // // // //         <Table striped bordered hover className="mt-3">
// // // // //           <thead className="table-dark">
// // // // //             <tr>
// // // // //               <th>Seller ID</th>
// // // // //               <th>Seller Name</th>
// // // // //               <th>Total Products Sold</th>
// // // // //               <th>Total Orders</th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody>
// // // // //             {orderData.length > 0 ? (
// // // // //               orderData.map((order) => (
// // // // //                 <tr key={order.sellerId}>
// // // // //                   <td>{order.sellerId}</td>
// // // // //                   <td>{order.Name}</td>
// // // // //                   <td>{order.totalProductsSold}</td>
// // // // //                   <td>{order.totalOrders}</td>
// // // // //                 </tr>
// // // // //               ))
// // // // //             ) : (
// // // // //               <tr>
// // // // //                 <td colSpan="4" className="text-center">No data available</td>
// // // // //               </tr>
// // // // //             )}
// // // // //           </tbody>
// // // // //         </Table>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Productwise;
// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "axios";
// // // // import {
// // // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
// // // //   CartesianGrid, ResponsiveContainer
// // // // } from "recharts";
// // // // import { Table, Form, Button } from "react-bootstrap";
// // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
// // // // import { Link } from "react-router-dom";

// // // // const Productwise = () => {
// // // //   const [orderData, setOrderData] = useState([]);
// // // //   const [month, setMonth] = useState("");
// // // //   const [year, setYear] = useState("");
// // // //   const [productType, setProductType] = useState("");
// // // //   const [sellerId, setSellerId] = useState("");
// // // //   const [availableYears, setAvailableYears] = useState([]);
// // // //   const [availableProductTypes, setAvailableProductTypes] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchAvailableYears(); // Fetch available years on mount
// // // //     fetchAvailableProductTypes(); // Fetch product types on mount
// // // //     fetchOrderData(); // Fetch initial data
// // // //   }, []);

// // // //   // Fetch available product types from backend
// // // //   const fetchAvailableProductTypes = async () => {
// // // //     try {
// // // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // // //         params: { getProductTypes: true }
// // // //       });
// // // //       setAvailableProductTypes(response.data); // Set available product types
// // // //     } catch (error) {
// // // //       console.error("Error fetching product types:", error);
// // // //     }
// // // //   };

// // // //   // Fetch available years from backend
// // // //   const fetchAvailableYears = async () => {
// // // //     try {
// // // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // // //         params: { getYears: true }
// // // //       });
// // // //       setAvailableYears(response.data); // Set available years
// // // //     } catch (error) {
// // // //       console.error("Error fetching available years:", error);
// // // //     }
// // // //   };

// // // //   // Fetch order data based on filters
// // // //   const fetchOrderData = async () => {
// // // //     try {
// // // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // // //         params: { month, year, productType, sellerId }
// // // //       });
// // // //       setOrderData(response.data); // Set order data for display
// // // //     } catch (error) {
// // // //       console.error("Error fetching order report:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="content-wrapper">
// // // //       <div className="container">
// // // //         <div className="content-header">
// // // //           <div className="container-fluid">
// // // //             <div className="row mb-2">
// // // //               <div className="col-sm-6">
// // // //                 <h1 className="m-0 text-dark">Reports</h1>
// // // //               </div>
// // // //               <div className="col-sm-6">
// // // //                 <ol className="breadcrumb float-sm-right">
// // // //                   <li className="breadcrumb-item">
// // // //                     <Link to="/admin/Dashboard">
// // // //                       <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
// // // //                       Home
// // // //                     </Link>
// // // //                   </li>
// // // //                   <li className="breadcrumb-item active">📊 Seller Order Report</li>
// // // //                 </ol>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Filters */}
// // // //         <Form className="mb-3 d-flex gap-2">
// // // //           <Form.Control as="select" value={month} onChange={(e) => setMonth(e.target.value)}>
// // // //             <option value="">Select Month</option>
// // // //             {Array.from({ length: 12 }, (_, i) => (
// // // //               <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString("en", { month: "long" })}</option>
// // // //             ))}
// // // //           </Form.Control>

// // // //           {/* Dynamic Year Dropdown */}
// // // //           <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
// // // //             <option value="">Select Year</option>
// // // //             {availableYears.length > 0 ? (
// // // //               availableYears.map((yearItem, index) => (
// // // //                 <option key={index} value={yearItem}>{yearItem}</option>
// // // //               ))
// // // //             ) : (
// // // //               <option value="">No years available</option>
// // // //             )}
// // // //           </Form.Control>

// // // //           {/* Dynamic Product Type Dropdown */}
// // // //           <Form.Control as="select" value={productType} onChange={(e) => setProductType(e.target.value)}>
// // // //             <option value="">Select Product Type</option>
// // // //             {availableProductTypes.length > 0 ? (
// // // //               availableProductTypes.map((productType, index) => (
// // // //                 <option key={index} value={productType}>{productType}</option>
// // // //               ))
// // // //             ) : (
// // // //               <option value="">No product types available</option>
// // // //             )}
// // // //           </Form.Control>

// // // //           {/* Seller ID Filter */}
// // // //           <Form.Control type="number" placeholder="Seller ID" value={sellerId} onChange={(e) => setSellerId(e.target.value)} />

// // // //           <Button variant="primary" onClick={fetchOrderData}>Filter</Button>
// // // //         </Form>

// // // //         {/* Bar Chart */}
// // // //         <ResponsiveContainer width="100%" height={300}>
// // // //           <BarChart data={orderData}>
// // // //             <CartesianGrid strokeDasharray="3 3" />
// // // //             <XAxis dataKey="Name" />
// // // //             <YAxis />
// // // //             <Tooltip />
// // // //             <Legend />
// // // //             <Bar dataKey="totalProductsSold" fill="#28a745" />
// // // //           </BarChart>
// // // //         </ResponsiveContainer>

// // // //         {/* Table for Detailed View */}
// // // //         <h4 className="mt-4 text-center">📄 Seller Order Details</h4>
// // // //         <Table striped bordered hover className="mt-3">
// // // //           <thead className="table-dark">
// // // //             <tr>
// // // //               <th>Seller ID</th>
// // // //               <th>Seller Name</th>
// // // //               <th>Total Products Sold</th>
// // // //               <th>Total Orders</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {orderData.length > 0 ? (
// // // //               orderData.map((order) => (
// // // //                 <tr key={order.sellerId}>
// // // //                   <td>{order.sellerId}</td>
// // // //                   <td>{order.Name}</td>
// // // //                   <td>{order.totalProductsSold}</td>
// // // //                   <td>{order.totalOrders}</td>
// // // //                 </tr>
// // // //               ))
// // // //             ) : (
// // // //               <tr>
// // // //                 <td colSpan="4" className="text-center">No data available</td>
// // // //               </tr>
// // // //             )}
// // // //           </tbody>
// // // //         </Table>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Productwise;
// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "axios";
// // // // import {
// // // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
// // // //   CartesianGrid, ResponsiveContainer
// // // // } from "recharts";
// // // // import { Table, Form, Button } from "react-bootstrap";
// // // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // // import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
// // // // import { Link } from "react-router-dom";

// // // // const Productwise = () => {
// // // //   const [orderData, setOrderData] = useState([]);
// // // //   const [month, setMonth] = useState("");
// // // //   const [year, setYear] = useState("");
// // // //   const [productType, setProductType] = useState("");
// // // //   const [sellerId, setSellerId] = useState("");
// // // //   const [availableYears, setAvailableYears] = useState([]);
// // // //   const [availableProductTypes, setAvailableProductTypes] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchAvailableYears(); // Fetch available years on mount
// // // //     fetchAvailableProductTypes(); // Fetch product types on mount
// // // //     fetchOrderData(); // Fetch initial data
// // // //   }, []);

// // // //   // Fetch available product types from backend
// // // //   const fetchAvailableProductTypes = async () => {
// // // //     try {
// // // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // // //         params: { getProductTypes: true }
// // // //       });
// // // //       setAvailableProductTypes(response.data); // Set available product types
// // // //       // console.log(response.data)
// // // //     } catch (error) {
// // // //       console.error("Error fetching product types:", error);
// // // //     }
// // // //   };

// // // //   // Fetch available years from backend
// // // //   const fetchAvailableYears = async () => {
// // // //     try {
// // // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // // //         params: { getYears: true }
// // // //       });
// // // //       setAvailableYears(response.data); // Set available years
// // // //     } catch (error) {
// // // //       console.error("Error fetching available years:", error);
// // // //     }
// // // //   };

// // // //   // Fetch order data based on filters
// // // //   // const fetchOrderData = async () => {
// // // //   //   try {
// // // //   //     const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // // //   //       params: { month, year, productType, sellerId }
// // // //   //     });
// // // //   //     setOrderData(response.data); // Set order data for display
// // // //   //     console.log(orderData)
// // // //   //   } catch (error) {
// // // //   //     console.error("Error fetching order report:", error);
// // // //   //   }
// // // //   // };
// // // //   const fetchOrderData = async () => {
// // // //     try {
// // // //         const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // // //             params: { month, year, productType, sellerId }
// // // //         });
// // // //         setOrderData(response.data);
// // // //         console.log('API Response:', response.data);  // Log the response for debugging
// // // //         if (response.data.length === 0) {
// // // //             console.log('No data found for the given parameters');
// // // //             setOrderData([]);  // Set empty array if no data is returned
// // // //         } else {
// // // //             setOrderData(response.data);  // Set order data if data is available
// // // //         }
// // // //     } catch (error) {
// // // //         console.error("Error fetching order report:", error);
// // // //     }
// // // // };

// // // //   return (
// // // //     <div className="content-wrapper">
// // // //       <div className="container">
// // // //         <div className="content-header">
// // // //           <div className="container-fluid">
// // // //             <div className="row mb-2">
// // // //               <div className="col-sm-6">
// // // //                 <h1 className="m-0 text-dark">Reports</h1>
// // // //               </div>
// // // //               <div className="col-sm-6">
// // // //                 <ol className="breadcrumb float-sm-right">
// // // //                   <li className="breadcrumb-item">
// // // //                     <Link to="/admin/Dashboard">
// // // //                       <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
// // // //                       Home
// // // //                     </Link>
// // // //                   </li>
// // // //                   <li className="breadcrumb-item active">📊 Seller Order Report</li>
// // // //                 </ol>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Filters */}
// // // //         <Form className="mb-3 d-flex gap-2">
// // // //           <Form.Control as="select" value={month} onChange={(e) => setMonth(e.target.value)}>
// // // //             <option value="">Select Month</option>
// // // //             {Array.from({ length: 12 }, (_, i) => (
// // // //               <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString("en", { month: "long" })}</option>
// // // //             ))}
// // // //           </Form.Control>

// // // //           {/* Dynamic Year Dropdown */}
// // // //           <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
// // // //             <option value="">Select Year</option>
// // // //             {availableYears.length > 0 ? (
// // // //               availableYears.map((yearItem, index) => (
// // // //                 <option key={index} value={yearItem}>{yearItem}</option>
// // // //               ))
// // // //             ) : (
// // // //               <option value="">No years available</option>
// // // //             )}
// // // //           </Form.Control>

// // // //           {/* Dynamic Product Type Dropdown */}
// // // //           <Form.Control as="select" value={productType} onChange={(e) => setProductType(e.target.value)}>
// // // //             <option value="">Select Product Type</option>
// // // //             {availableProductTypes.length > 0 ? (
// // // //               availableProductTypes.map((productType, index) => (
// // // //                 <option key={index} value={productType}>{productType}</option>
// // // //               ))
// // // //             ) : (
// // // //               <option value="">No product types available</option>
// // // //             )}
// // // //           </Form.Control>

// // // //           {/* Seller ID Filter */}
// // // //           <Form.Control type="number" placeholder="Seller ID" value={sellerId} onChange={(e) => setSellerId(e.target.value)} />

// // // //           <Button variant="primary" onClick={fetchOrderData}>Filter</Button>
// // // //         </Form>

// // // //         {/* Bar Chart */}
// // // //         <ResponsiveContainer width="100%" height={300}>
// // // //           <BarChart data={orderData}>
// // // //             <CartesianGrid strokeDasharray="3 3" />
// // // //             <XAxis dataKey="Name" />
// // // //             <YAxis />
// // // //             <Tooltip />
// // // //             <Legend />
// // // //             <Bar dataKey="totalProductsSold" fill="#28a745" />
// // // //           </BarChart>
// // // //         </ResponsiveContainer>

// // // //         {/* Table for Detailed View */}
// // // //         <h4 className="mt-4 text-center">📄 Seller Order Details</h4>
// // // //         <Table striped bordered hover className="mt-3">
// // // //           <thead className="table-dark">
// // // //             <tr>
// // // //               <th>Seller ID</th>
// // // //               <th>Seller Name</th>
// // // //               <th>Total Products Sold</th>
// // // //               <th>Total Orders</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {orderData.length > 0 ? (
// // // //               orderData.map((order) => (
// // // //                 <tr key={order.sellerId}>
// // // //                   {/* Ensure that these fields are valid primitives */}
// // // //                   <td>{order.sellerId ?? 'N/A'}</td>  {/* Use 'N/A' if sellerId is undefined */}
// // // //                   <td>{order.Name ?? 'Unknown'}</td>   {/* Use 'Unknown' if Name is undefined */}
// // // //                   <td>{order.totalProductsSold ?? 0}</td>  {/* Use 0 if totalProductsSold is undefined */}
// // // //                   <td>{order.totalOrders ?? 0}</td>   {/* Use 0 if totalOrders is undefined */}
// // // //                 </tr>
// // // //               ))
// // // //             ) : (
// // // //               <tr>
// // // //                 <td colSpan="4" className="text-center">No data available</td>
// // // //               </tr>
// // // //             )}
// // // //           </tbody>
// // // //         </Table>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Productwise;
// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import {
// // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
// // //   CartesianGrid, ResponsiveContainer
// // // } from "recharts";
// // // import { Table, Form, Button } from "react-bootstrap";
// // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
// // // import { Link } from "react-router-dom";

// // // const Productwise = () => {
// // //   const [orderData, setOrderData] = useState([]);
// // //   const [month, setMonth] = useState("");
// // //   const [year, setYear] = useState("");
// // //   const [productType, setProductType] = useState("");
// // //   const [sellerId, setSellerId] = useState("");
// // //   const [availableYears, setAvailableYears] = useState([]);
// // //   const [availableProductTypes, setAvailableProductTypes] = useState([]);

// // //   useEffect(() => {
// // //     fetchAvailableYears(); // Fetch available years on mount
// // //     fetchAvailableProductTypes(); // Fetch product types on mount
// // //     fetchOrderData(); // Fetch initial data
// // //   }, []);

// // //   // Fetch available product types from backend
// // //   const fetchAvailableProductTypes = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // //         params: { getProductTypes: true }
// // //       });
// // //       setAvailableProductTypes(response.data); // Set available product types
// // //     } catch (error) {
// // //       console.error("Error fetching product types:", error);
// // //     }
// // //   };

// // //   // Fetch available years from backend
// // //   const fetchAvailableYears = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // //         params: { getYears: true }
// // //       });
// // //       setAvailableYears(response.data); // Set available years
// // //     } catch (error) {
// // //       console.error("Error fetching available years:", error);
// // //     }
// // //   };

// // //   // Fetch order data based on filters
// // //   const fetchOrderData = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // //         params: { month, year, productType, sellerId }
// // //       });
// // //       console.log('API Response:', response.data); // Log the response for debugging
// // //       if (response.data.length === 0) {
// // //         console.log('No data found for the given parameters');
// // //         setOrderData([]); // Set empty array if no data is returned
// // //       } else {
// // //         setOrderData(response.data); // Set order data if data is available
// // //       }
// // //     } catch (error) {
// // //       console.error("Error fetching order report:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="content-wrapper">
// // //       <div className="container">
// // //         <div className="content-header">
// // //           <div className="container-fluid">
// // //             <div className="row mb-2">
// // //               <div className="col-sm-6">
// // //                 <h1 className="m-0 text-dark">Reports</h1>
// // //               </div>
// // //               <div className="col-sm-6">
// // //                 <ol className="breadcrumb float-sm-right">
// // //                   <li className="breadcrumb-item">
// // //                     <Link to="/admin/Dashboard">
// // //                       <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
// // //                       Home
// // //                     </Link>
// // //                   </li>
// // //                   <li className="breadcrumb-item active">📊 Seller Order Report</li>
// // //                 </ol>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Filters */}
// // //         <Form className="mb-3 d-flex gap-2">
// // //           <Form.Control as="select" value={month} onChange={(e) => setMonth(e.target.value)}>
// // //             <option value="">Select Month</option>
// // //             {Array.from({ length: 12 }, (_, i) => (
// // //               <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString("en", { month: "long" })}</option>
// // //             ))}
// // //           </Form.Control>

// // //           {/* Dynamic Year Dropdown */}
// // //           <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
// // //             <option value="">Select Year</option>
// // //             {availableYears.length > 0 ? (
// // //               availableYears.map((yearItem, index) => (
// // //                 <option key={index} value={yearItem}>{yearItem}</option>
// // //               ))
// // //             ) : (
// // //               <option value="">No years available</option>
// // //             )}
// // //           </Form.Control>

// // //           {/* Dynamic Product Type Dropdown */}
// // //           <Form.Control as="select" value={productType} onChange={(e) => setProductType(e.target.value)}>
// // //             <option value="">Select Product Type</option>
// // //             {availableProductTypes.length > 0 ? (
// // //               availableProductTypes.map((productType, index) => (
// // //                 <option key={index} value={productType}>{productType}</option>
// // //               ))
// // //             ) : (
// // //               <option value="">No product types available</option>
// // //             )}
// // //           </Form.Control>

// // //           {/* Seller ID Filter */}
// // //           <Form.Control type="number" placeholder="Seller ID" value={sellerId} onChange={(e) => setSellerId(e.target.value)} />

// // //           <Button variant="primary" onClick={fetchOrderData}>Filter</Button>
// // //         </Form>

// // //         {/* Bar Chart */}
// // //         <ResponsiveContainer width="100%" height={300}>
// // //           <BarChart data={orderData}>
// // //             <CartesianGrid strokeDasharray="3 3" />
// // //             <XAxis dataKey="Name" />
// // //             <YAxis />
// // //             <Tooltip />
// // //             <Legend />
// // //             <Bar dataKey="totalProductsSold" fill="#28a745" />
// // //           </BarChart>
// // //         </ResponsiveContainer>

// // //         {/* Table for Detailed View */}
// // //         <h4 className="mt-4 text-center">📄 Seller Order Details</h4>
// // //         <Table striped bordered hover className="mt-3">
// // //           <thead className="table-dark">
// // //             <tr>
// // //               <th>Seller ID</th>
// // //               <th>Seller Name</th>
// // //               <th>Total Products Sold</th>
// // //               <th>Total Orders</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {orderData.length > 0 ? (
// // //               orderData.map((order, index) => (
// // //                 <tr key={index}>
// // //                   {/* Ensure that these fields are valid primitives */}
// // //                   <td>{order.sellerId ?? 'N/A'}</td>  {/* Use 'N/A' if sellerId is undefined */}
// // //                   <td>{order.Name ?? 'Unknown'}</td>   {/* Use 'Unknown' if Name is undefined */}
// // //                   <td>{order.totalProductsSold ?? 0}</td>  {/* Use 0 if totalProductsSold is undefined */}
// // //                   <td>{order.totalOrders ?? 0}</td>   {/* Use 0 if totalOrders is undefined */}
// // //                 </tr>
// // //               ))
// // //             ) : (
// // //               <tr>
// // //                 <td colSpan="4" className="text-center">No data available</td>
// // //               </tr>
// // //             )}
// // //           </tbody>
// // //         </Table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Productwise;
// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import {
// // //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
// // //   CartesianGrid, ResponsiveContainer
// // // } from "recharts";
// // // import { Table, Form, Button } from "react-bootstrap";
// // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
// // // import { Link } from "react-router-dom";

// // // const Productwise = () => {
// // //   const [orderData, setOrderData] = useState([]);
// // //   const [month, setMonth] = useState("");
// // //   const [year, setYear] = useState("");
// // //   const [productType, setProductType] = useState("");
// // //   const [sellerId, setSellerId] = useState("");
// // //   const [availableYears, setAvailableYears] = useState([]);
// // //   const [availableProductTypes, setAvailableProductTypes] = useState([]);

// // //   useEffect(() => {
// // //     fetchAvailableYears(); // Fetch available years on mount
// // //     fetchAvailableProductTypes(); // Fetch product types on mount
// // //     fetchOrderData(); // Fetch initial data
// // //   }, []);

// // //   // Fetch available product types from backend
// // //   const fetchAvailableProductTypes = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // //         params: { getProductTypes: true }
// // //       });
// // //       setAvailableProductTypes(response.data); // Set available product types
// // //     } catch (error) {
// // //       console.error("Error fetching product types:", error);
// // //     }
// // //   };

// // //   // Fetch available years from backend
// // //   const fetchAvailableYears = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // //         params: { getYears: true }
// // //       });
// // //       setAvailableYears(response.data); // Set available years
// // //     } catch (error) {
// // //       console.error("Error fetching available years:", error);
// // //     }
// // //   };

// // //   // Fetch order data based on filters
// // //   const fetchOrderData = async () => {
// // //     try {
// // //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// // //         params: { month, year, productType, sellerId }
// // //       });
// // //       console.log('API Response:', response.data); // Log the response for debugging
// // //       if (response.data.length === 0) {
// // //         console.log('No data found for the given parameters');
// // //         setOrderData([]); // Set empty array if no data is returned
// // //       } else {
// // //         setOrderData(response.data); // Set order data if data is available
// // //       }
// // //     } catch (error) {
// // //       console.error("Error fetching order report:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="content-wrapper">
// // //       <div className="container">
// // //         <div className="content-header">
// // //           <div className="container-fluid">
// // //             <div className="row mb-2">
// // //               <div className="col-sm-6">
// // //                 <h1 className="m-0 text-dark">Reports</h1>
// // //               </div>
// // //               <div className="col-sm-6">
// // //                 <ol className="breadcrumb float-sm-right">
// // //                   <li className="breadcrumb-item">
// // //                     <Link to="/admin/Dashboard">
// // //                       <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
// // //                       Home
// // //                     </Link>
// // //                   </li>
// // //                   <li className="breadcrumb-item active">📊 Seller Order Report</li>
// // //                 </ol>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Filters */}
// // //         <Form className="mb-3 d-flex gap-2">
// // //           <Form.Control as="select" value={month} onChange={(e) => setMonth(e.target.value)}>
// // //             <option value="">Select Month</option>
// // //             {Array.from({ length: 12 }, (_, i) => (
// // //               <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString("en", { month: "long" })}</option>
// // //             ))}
// // //           </Form.Control>

// // //           {/* Dynamic Year Dropdown */}
// // //           <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
// // //             <option value="">Select Year</option>
// // //             {availableYears.length > 0 ? (
// // //               availableYears.map((yearItem, index) => (
// // //                 <option key={index} value={yearItem}>{yearItem}</option>
// // //               ))
// // //             ) : (
// // //               <option value="">No years available</option>
// // //             )}
// // //           </Form.Control>

// // //           {/* Dynamic Product Type Dropdown */}
// // //           <Form.Control as="select" value={productType} onChange={(e) => setProductType(e.target.value)}>
// // //             <option value="">Select Product Type</option>
// // //             {availableProductTypes.length > 0 ? (
// // //               availableProductTypes.map((productType, index) => (
// // //                 <option key={index} value={productType}>{productType}</option>
// // //               ))
// // //             ) : (
// // //               <option value="">No product types available</option>
// // //             )}
// // //           </Form.Control>

// // //           {/* Seller ID Filter */}
// // //           <Form.Control type="number" placeholder="Seller ID" value={sellerId} onChange={(e) => setSellerId(e.target.value)} />

// // //           <Button variant="primary" onClick={fetchOrderData}>Filter</Button>
// // //         </Form>

// // //         {/* Bar Chart */}
// // //         <ResponsiveContainer width="100%" height={300}>
// // //           <BarChart data={orderData}>
// // //             <CartesianGrid strokeDasharray="3 3" />
// // //             <XAxis dataKey="Name" />
// // //             <YAxis />
// // //             <Tooltip />
// // //             <Legend />
// // //             <Bar dataKey="totalProductsSold" fill="#28a745" />
// // //           </BarChart>
// // //         </ResponsiveContainer>

// // //         {/* Table for Detailed View */}
// // //         <h4 className="mt-4 text-center">📄 Seller Order Details</h4>
// // //         <Table striped bordered hover className="mt-3">
// // //           <thead className="table-dark">
// // //             <tr>
// // //               <th>Seller ID</th>
// // //               <th>Seller Name</th>
// // //               <th>Total Products Sold</th>
// // //               <th>Total Orders</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {orderData.length > 0 ? (
// // //               orderData.map((order, index) => (
// // //                 <tr key={index}>
// // //                   {/* Ensure we're accessing the individual properties of the order */}
// // //                   <td>{order.sellerId ?? 'N/A'}</td>  {/* Ensure it's a primitive value */}
// // //                   <td>{order.Name ?? 'Unknown'}</td>   {/* Ensure it's a primitive value */}
// // //                   <td>{order.totalProductsSold ?? 0}</td>  {/* Ensure it's a primitive value */}
// // //                   <td>{order.totalOrders ?? 0}</td>   {/* Ensure it's a primitive value */}
// // //                 </tr>
// // //               ))
// // //             ) : (
// // //               <tr>
// // //                 <td colSpan="4" className="text-center">No data available</td>
// // //               </tr>
// // //             )}
// // //           </tbody>
// // //         </Table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Productwise;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import {
// //   BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
// //   CartesianGrid, ResponsiveContainer
// // } from "recharts";
// // import { Table, Form, Button } from "react-bootstrap";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
// // import { Link } from "react-router-dom";

// // const Productwise = () => {
// //   const [orderData, setOrderData] = useState([]);
// //   const [month, setMonth] = useState("");
// //   const [year, setYear] = useState("");
// //   const [productType, setProductType] = useState("");
// //   const [sellerId, setSellerId] = useState("");
// //   const [availableYears, setAvailableYears] = useState([]);
// //   const [availableProductTypes, setAvailableProductTypes] = useState([]);

// //   useEffect(() => {
// //     fetchAvailableYears();
// //     fetchAvailableProductTypes();
// //     fetchOrderData();
// //   }, []);

// //   // Fetch available product types from backend
// //   const fetchAvailableProductTypes = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// //         params: { getProductTypes: true }
// //       });
// //       setAvailableProductTypes(response.data);
// //     } catch (error) {
// //       console.error("Error fetching product types:", error);
// //     }
// //   };

// //   // Fetch available years from backend
// //   const fetchAvailableYears = async () => {
// //     try {
// //       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// //         params: { getYears: true }
// //       });
// //       setAvailableYears(response.data);
// //     } catch (error) {
// //       console.error("Error fetching available years:", error);
// //     }
// //   };

// //   // Fetch order data based on filters
// //   // const fetchOrderData = async () => {
// //   //   try {
// //   //     const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
// //   //       params: { month, year, productType, sellerId }
// //   //     });
// //   //     console.log('API Response:', response.data);
      
// //   //     if (!Array.isArray(response.data)) {
// //   //       console.error("Invalid API response format:", response.data);
// //   //       setOrderData([]);
// //   //       return;
// //   //     }

// //   //     setOrderData(response.data);
// //   //   } catch (error) {
// //   //     console.error("Error fetching order report:", error);
// //   //   }
// //   // };
// //   const fetchOrderData = async () => {
// //     try {
// //       const response = await axios.get(
// //         "http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php",
// //         {
// //           params: { month, year, productType, sellerId },
// //         }
// //       );
  
// //       console.log("API Response:", response.data);
  
// //       if (!response.data || typeof response.data !== "object") {
// //         console.error("Invalid API response format:", response.data);
// //         setOrderData([]); // Reset state to prevent breaking the UI
// //         return;
// //       }
  
// //       setOrderData(response.data);
// //     } catch (error) {
// //       console.error("Error fetching order report:", error.response ? error.response.data : error.message);
// //     }
// //   };
  
// //   return (
// //     <div className="content-wrapper">
// //       <div className="container">
// //         <div className="content-header">
// //           <div className="container-fluid">
// //             <div className="row mb-2">
// //               <div className="col-sm-6">
// //                 <h1 className="m-0 text-dark">Reports</h1>
// //               </div>
// //               <div className="col-sm-6">
// //                 <ol className="breadcrumb float-sm-right">
// //                   <li className="breadcrumb-item">
// //                     <Link to="/admin/Dashboard">
// //                       <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
// //                       Home
// //                     </Link>
// //                   </li>
// //                   <li className="breadcrumb-item active">📊 Seller Order Report</li>
// //                 </ol>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Filters */}
// //         <Form className="mb-3 d-flex gap-2">
// //           <Form.Control as="select" value={month} onChange={(e) => setMonth(e.target.value)}>
// //             <option value="">Select Month</option>
// //             {Array.from({ length: 12 }, (_, i) => (
// //               <option key={i + 1} value={i + 1}>{new Date(0, i).toLocaleString("en", { month: "long" })}</option>
// //             ))}
// //           </Form.Control>

// //           <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
// //             <option value="">Select Year</option>
// //             {availableYears.map((yearItem, index) => (
// //               <option key={index} value={yearItem}>{yearItem}</option>
// //             ))}
// //           </Form.Control>

// //           <Form.Control as="select" value={productType} onChange={(e) => setProductType(e.target.value)}>
// //             <option value="">Select Product Type</option>
// //             {availableProductTypes.map((productType, index) => (
// //               <option key={index} value={productType}>{productType}</option>
// //             ))}
// //           </Form.Control>

// //           <Form.Control type="number" placeholder="Seller ID" value={sellerId} onChange={(e) => setSellerId(e.target.value)} />

// //           <Button variant="primary" onClick={fetchOrderData}>Filter</Button>
// //         </Form>

// //         {/* Bar Chart */}
// //         <ResponsiveContainer width="100%" height={300}>
// //           <BarChart data={orderData}>
// //             <CartesianGrid strokeDasharray="3 3" />
// //             <XAxis dataKey="name" />
// //             <YAxis />
// //             <Tooltip />
// //             <Legend />
// //             <Bar dataKey="total_products_sold" fill="#28a745" />
// //           </BarChart>
// //         </ResponsiveContainer>

// //         {/* Table for Detailed View */}
// //         <h4 className="mt-4 text-center">📄 Seller Order Details</h4>
// //         <Table striped bordered hover className="mt-3">
// //           <thead className="table-dark">
// //             <tr>
// //               <th>Seller ID</th>
// //               <th>Seller Name</th>
// //               <th>Total Products Sold</th>
// //               <th>Total Revenue</th>
// //               <th>Month</th>
// //               <th>Year</th>
// //               <th>Product Type</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {orderData.length > 0 ? (
// //               orderData.map((order, index) => (
// //                 <tr key={index}>
// //                   <td>{order.sellerid ?? 'N/A'}</td>
// //                   <td>{order.name ?? 'Unknown'}</td>
// //                   <td>{order.total_products_sold ?? 0}</td>
// //                   <td>₹{parseFloat(order.total_revenue || 0).toFixed(2)}</td>
// //                   <td>{order.month ?? 'N/A'}</td>
// //                   <td>{order.year ?? 'N/A'}</td>
// //                   <td>{order.producttype ?? 'N/A'}</td>
// //                 </tr>
// //               ))
// //             ) : (
// //               <tr>
// //                 <td colSpan="7" className="text-center">No data available</td>
// //               </tr>
// //             )}
// //           </tbody>
// //         </Table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Productwise;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// const SellerOrderReport = () => {
//   const [orderData, setOrderData] = useState([]);
//   const [productTypes, setProductTypes] = useState([]);
//   const [month, setMonth] = useState("");
//   const [year, setYear] = useState("");
//   const [productType, setProductType] = useState("");
//   const [sellerId, setSellerId] = useState("");

//   // Fetch Order Data
//   const fetchOrderData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
//         params: { month, year, productType, sellerId },
//       });

//       console.log("API Response:", response.data);

//       if (!Array.isArray(response.data)) {
//         console.error("Invalid API response format:", response.data);
//         setOrderData([]);
//         return;
//       }

//       setOrderData(response.data);
//     } catch (error) {
//       console.error("Error fetching order report:", error);
//     }
//   };

//   // Fetch Product Types for Dropdown
//   const fetchProductTypes = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/college%20project/mini%20project/api/ReportsApi/SellerOrderReportapi.php", {
//         params: { getProductTypes: "true" },
//       });

//       setProductTypes(response.data);
//     } catch (error) {
//       console.error("Error fetching product types:", error);
//     }
//   };

//   useEffect(() => {
//     fetchOrderData();
//     fetchProductTypes();
//   }, [month, year, productType, sellerId]);

//   return (
//     <div className="content-wrapper">
//        <div className="container mt-4">
//       <h2 className="text-center mb-4">Seller Order Report</h2>

//       {/* Filter Options */}
//       <div className="row mb-3">
//         <div className="col-md-3">
//           <label>Seller ID:</label>
//           <input type="number" className="form-control" value={sellerId} onChange={(e) => setSellerId(e.target.value)} placeholder="Enter Seller ID" />
//         </div>
//         <div className="col-md-3">
//           <label>Product Type:</label>
//           <select className="form-control" value={productType} onChange={(e) => setProductType(e.target.value)}>
//             <option value="">All</option>
//             {productTypes.map((type, index) => (
//               <option key={index} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="col-md-3">
//           <label>Month:</label>
//           <input type="number" className="form-control" value={month} onChange={(e) => setMonth(e.target.value)} placeholder="Enter Month (1-12)" />
//         </div>
//         <div className="col-md-3">
//           <label>Year:</label>
//           <input type="number" className="form-control" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Enter Year" />
//         </div>
//       </div>

//       {/* Table to Show Data */}
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Seller ID</th>
//             <th>Name</th>
//             <th>Products Sold</th>
//             <th>Total Revenue</th>
//             <th>Month</th>
//             <th>Year</th>
//             <th>Product Type</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orderData.length > 0 ? (
//             orderData.map((order, index) => (
//               <tr key={index}>
//                 <td>{order.sellerid}</td>
//                 <td>{order.name}</td>
//                 <td>{order.total_products_sold}</td>
//                 <td>₹{order.total_revenue}</td>
//                 <td>{order.month}</td>
//                 <td>{order.year}</td>
//                 <td>{order.producttype}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="text-center">
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Bar Chart for Visualization */}
//       
//     </div>
//     </div>
   
//   );
// };

// export default SellerOrderReport;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const SellerOrderReport = () => {
  const [orderData, setOrderData] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [years, setYears] = useState([]);

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [productType, setProductType] = useState("");
  const [sellerId, setSellerId] = useState("");

  const monthNames = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" }
  ];

  // Fetch Data
  const fetchOrderData = async () => {
    try {
      const response = await axios.get("http://trendio.free.nf/api/ReportsApi/SellerOrderReportapi.php", {
        params: { month, year, productType, sellerId },
      });

      if (!Array.isArray(response.data)) {
        console.error("Invalid API response format:", response.data);
        setOrderData([]);
        return;
      }

      setOrderData(response.data);
      console.log(orderData)
    } catch (error) {
      console.error("Error fetching order report:", error);
    }
  };

  // Fetch product types
  const fetchProductTypes = async () => {
    try {
      const response = await axios.get("http://trendio.free.nf/api/ReportsApi/SellerOrderReportapi.php", {
        params: { getProductTypes: "true" },
      });
      setProductTypes(response.data);
    } catch (error) {
      console.error("Error fetching product types:", error);
    }
  };

  // Fetch sellers
  const fetchSellers = async () => {
    try {
      const response = await axios.get("http://trendio.free.nf/api/ReportsApi/SellerOrderReportapi.php", {
        params: { getSellers: "true" },
      });
      setSellers(response.data);
    } catch (error) {
      console.error("Error fetching sellers:", error);
    }
  };

  // Fetch available years
  const fetchYears = async () => {
    try {
      const response = await axios.get("http://trendio.free.nf/api/ReportsApi/SellerOrderReportapi.php", {
        params: { getYears: "true" },
      });
      setYears(response.data);
    } catch (error) {
      console.error("Error fetching years:", error);
    }
  };

  useEffect(() => {
    fetchOrderData();
    fetchProductTypes();
    fetchSellers();
    fetchYears();
  }, [month, year, productType, sellerId]);

  return (
    <div className="content-wrapper">
       <div className="container mt-4">
      <h2 className="text-center mb-4">Seller Order Report</h2>

      {/* Filters */}
      <div className="row mb-3">
        <div className="col-md-3">
          <label>Seller:</label>
          <select className="form-control" value={sellerId} onChange={(e) => setSellerId(e.target.value)}>
            <option value="">All Sellers</option>
            {sellers.map((seller) => (
              <option key={seller.sellerid} value={seller.sellerid}>
                {seller.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label>Product Type:</label>
          <select className="form-control" value={productType} onChange={(e) => setProductType(e.target.value)}>
            <option value="">All</option>
            {productTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label>Month:</label>
          <select className="form-control" value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="">All Months</option>
            {monthNames.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label>Year:</label>
          <select className="form-control" value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">All Years</option>
            {years.map((yr, index) => (
              <option key={index} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Products Sold</th>
            <th>Total Revenue</th>
            <th>Month</th>
            <th>Year</th>
            <th>Product Type</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.total_products_sold}</td>
              <td>₹{order.total_revenue}</td>
              <td>{monthNames.find((m) => m.value === String(order.month))?.label || "N/A"}</td>
              <td>{order.year}</td>
              <td>{order.producttype}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-center mt-4">Sales Chart</h3>
       <ResponsiveContainer width="100%" height={400}>
         <BarChart data={orderData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
           <XAxis dataKey="name" />
           <YAxis />
           <Tooltip />
           <Legend />
           <Bar dataKey="total_products_sold" fill="#8884d8" name="Total Products Sold" />
           <Bar dataKey="total_revenue" fill="#82ca9d" name="Total Revenue (₹)" />
         </BarChart>
       </ResponsiveContainer>
    </div>
    </div>
  );
};

export default SellerOrderReport;
