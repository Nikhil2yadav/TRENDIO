// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

// const SellerReport = () => {
//   const [sellerData, setSellerData] = useState([]);

//   useEffect(() => {
//     fetchSellerData();
//   }, []);

//   const fetchSellerData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/api/ReportsApi/SellerAddProductReportapi.php");
//       setSellerData(response.data);
//       console.log(sellerData)
//     } catch (error) {
//       console.error("Error fetching seller report:", error);
//     }
//   };

//   return (
//     <div className="content-wrapper">
//          <div className="container">
//       <h2 className="mt-4">Seller-Wise Product Report</h2>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={sellerData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="sellerId"/>
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="totalProducts" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//     </div>
   
//   );
// };

// export default SellerReport;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
//   CartesianGrid, ResponsiveContainer
// } from "recharts";
// import { Table } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const SellerReport = () => {
//   const [sellerData, setSellerData] = useState([]);

//   useEffect(() => {
//     fetchSellerData();
//   }, []);

//   const fetchSellerData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/api/ReportsApi/SellerAddProductReportapi.php ");
//       setSellerData(response.data);
//     } catch (error) {
//       console.error("Error fetching seller report:", error);
//     }
//   };

//   return (
//     <div className="content-wrapper">
//          <div className="container">
//          <div className="content-header">
//                  <div className="container-fluid">
//                    <div className="row mb-2">
//                      <div className="col-sm-6">
//                        <h1 className="m-0 text-dark">Reports</h1>
//                      </div>
//                      <div className="col-sm-6">
//                        <ol className="breadcrumb float-sm-right">
//                          <li className="breadcrumb-item"><Link to="/admin/Dashboard">
//                        <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
//                          Home</Link></li>
//                          <li className="breadcrumb-item active"> 📊Seller-Wise Product Report</li>
//                        </ol>
//                      </div>
//                    </div>
//                  </div>
//                </div>
      
//       {/* Bar Chart */}
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={sellerData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="sellerName" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="totalProducts" fill="#007bff" />
//         </BarChart>
//       </ResponsiveContainer>

//       {/* Table for Detailed View */}
//       <h4 className="mt-4 text-center">📄 Seller Details</h4>
//       <Table striped bordered hover className="mt-3">
//         <thead className="table-dark">
//           <tr>
//             <th>Seller ID</th>
//             <th>Seller Name</th>
//             <th>Total Products</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sellerData.length > 0 ? (
//             sellerData.map((seller) => (
//               <tr key={seller.sellerId}>
//                 <td>{seller.sellerId}</td>
//                 <td>{seller.Name}</td>
//                 <td>{seller.totalProducts}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3" className="text-center">
//                 No data available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//     </div>
   
//   );
// };

// export default SellerReport;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
//   CartesianGrid, ResponsiveContainer
// } from "recharts";
// import { Table, Form } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const SellerReport = () => {
//   const [sellerData, setSellerData] = useState([]);
//   const [month, setMonth] = useState(""); // for month filter
//   const [year, setYear] = useState(""); // for year filter
//   const [selectedSeller, setSelectedSeller] = useState(""); // for seller filter
//   const [sellers, setSellers] = useState([]); // for dropdown of sellers

//   useEffect(() => {
//     fetchSellerData();
//     fetchSellers();  // To get the list of sellers for filtering
//   }, [month, year, selectedSeller]);

//   const fetchSellerData = async () => {
//     try {
//       // Modify the URL with query parameters to filter data
//       const response = await axios.get("http://localhost:8000/api/ReportsApi/SellerAddProductReportapi.php", {
//         params: {
//           month: month,
//           year: year,
//           sellerId: selectedSeller
//         }
//       });
//       setSellerData(response.data);
//     } catch (error) {
//       console.error("Error fetching seller report:", error);
//     }
//   };

//   const fetchSellers = async () => {
//     try {
//       // Fetch all the sellers for the seller dropdown
//       const response = await axios.get("http://localhost:8000/api/ReportsApi/SellerListApi.php");
//       setSellers(response.data);
//     } catch (error) {
//       console.error("Error fetching seller list:", error);
//     }
//   };

//   return (
//     <div className="content-wrapper">
//       <div className="container">
//         <div className="content-header">
//           <div className="container-fluid">
//             <div className="row mb-2">
//               <div className="col-sm-6">
//                 <h1 className="m-0 text-dark">Reports</h1>
//               </div>
//               <div className="col-sm-6">
//                 <ol className="breadcrumb float-sm-right">
//                   <li className="breadcrumb-item"><Link to="/admin/Dashboard">
//                     <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
//                     Home</Link></li>
//                   <li className="breadcrumb-item active"> 📊Seller-Wise Product Report</li>
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filtering Section */}
//         <div className="filter-section mb-4">
//           <Form>
//             <Form.Group>
//               <Form.Label>Month</Form.Label>
//               <Form.Control as="select" value={month} onChange={(e) => setMonth(e.target.value)}>
//                 <option value="">Select Month</option>
//                 {/* Add the months dynamically */}
//                 {[...Array(12).keys()].map(i => (
//                   <option key={i} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
//                 ))}
//               </Form.Control>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Year</Form.Label>
//               <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
//                 <option value="">Select Year</option>
//                 {/* Add years dynamically */}
//                 {[2022, 2023, 2024, 2025].map(year => (
//                   <option key={year} value={year}>{year}</option>
//                 ))}
//               </Form.Control>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Seller</Form.Label>
//               <Form.Control as="select" value={selectedSeller} onChange={(e) => setSelectedSeller(e.target.value)}>
//                 <option value="">Select Seller</option>
//                 {sellers.map(seller => (
//                   <option key={seller.sellerId} value={seller.sellerId}>
//                     {seller.Name}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Form.Group>
//           </Form>
//         </div>

//         {/* Bar Chart */}
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={sellerData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="sellerName" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="totalProducts" fill="#007bff" />
//           </BarChart>
//         </ResponsiveContainer>

//         {/* Table for Detailed View */}
//         <h4 className="mt-4 text-center">📄 Seller Details</h4>
//         <Table striped bordered hover className="mt-3">
//           <thead className="table-dark">
//             <tr>
//               <th>Seller ID</th>
//               <th>Seller Name</th>
//               <th>Total Products</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sellerData.length > 0 ? (
//               sellerData.map((seller) => (
//                 <tr key={seller.sellerId}>
//                   <td>{seller.sellerId}</td>
//                   <td>{seller.Name}</td>
//                   <td>{seller.totalProducts}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3" className="text-center">
//                   No data available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default SellerReport;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
//   CartesianGrid, ResponsiveContainer
// } from "recharts";
// import { Table, Form } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const SellerReport = () => {
//   const [sellerData, setSellerData] = useState([]);
//   const [month, setMonth] = useState(""); // for month filter
//   const [year, setYear] = useState(""); // for year filter
//   const [selectedSeller, setSelectedSeller] = useState(""); // for seller filter
//   const [sellers, setSellers] = useState([]); // for dropdown of sellers

//   useEffect(() => {
//     fetchSellers();  // To get the list of sellers for filtering
//   }, []);

//   // Fetch the seller data based on filters (month, year, selectedSeller)
//   useEffect(() => {
//     fetchSellerData();
//   }, [month, year, selectedSeller]);

//   const fetchSellerData = async () => {
//     try {
//       // Modify the URL with query parameters to filter data
//       const response = await axios.get("http://localhost:8000/api/ReportsApi/SellerAddProductReportapi.php", {
//         params: {
//           month: month,
//           year: year,
//           sellerId: selectedSeller
//         }
//       });
//       setSellerData(response.data);
//     } catch (error) {
//       console.error("Error fetching seller report:", error);
//     }
//   };

//   const fetchSellers = async () => {
//     try {
//       // Fetch all the sellers for the seller dropdown
//       const response = await axios.get("http://localhost:8000/api/ReportsApi/SellerListApi.php");
//       setSellers(response.data);
//     } catch (error) {
//       console.error("Error fetching seller list:", error);
//     }
//   };

//   return (
//     <div className="content-wrapper">
//       <div className="container">
//         <div className="content-header">
//           <div className="container-fluid">
//             <div className="row mb-2">
//               <div className="col-sm-6">
//                 <h1 className="m-0 text-dark">Reports</h1>
//               </div>
//               <div className="col-sm-6">
//                 <ol className="breadcrumb float-sm-right">
//                   <li className="breadcrumb-item"><Link to="/admin/Dashboard">
//                     <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
//                     Home</Link></li>
//                   <li className="breadcrumb-item active"> 📊Seller-Wise Product Report</li>
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filtering Section */}
//         <div className="filter-section mb-4">
//           <Form>
//             <Form.Group>
//               <Form.Label>Month</Form.Label>
//               <Form.Control as="select" value={month} onChange={(e) => setMonth(e.target.value)}>
//                 <option value="">Select Month</option>
//                 {[...Array(12).keys()].map(i => (
//                   <option key={i} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
//                 ))}
//               </Form.Control>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Year</Form.Label>
//               <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
//                 <option value="">Select Year</option>
//                 {[2022, 2023, 2024, 2025].map(year => (
//                   <option key={year} value={year}>{year}</option>
//                 ))}
//               </Form.Control>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Seller</Form.Label>
//               <Form.Control as="select" value={selectedSeller} onChange={(e) => setSelectedSeller(e.target.value)}>
//                 <option value="">Select Seller</option>
//                 {sellers.map(seller => (
//                   <option key={seller.sellerId} value={seller.sellerId}>
//                     {seller.Name}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Form.Group>
//           </Form>
//         </div>

//         {/* Bar Chart */}
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={sellerData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="sellerName" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="totalProducts" fill="#007bff" />
//           </BarChart>
//         </ResponsiveContainer>

//         {/* Table for Detailed View */}
//         <h4 className="mt-4 text-center">📄 Seller Details</h4>
//         <Table striped bordered hover className="mt-3">
//           <thead className="table-dark">
//             <tr>
//               <th>Seller ID</th>
//               <th>Seller Name</th>
//               <th>Total Products</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sellerData.length > 0 ? (
//               sellerData.map((seller) => (
//                 <tr key={seller.sellerId}>
//                   <td>{seller.sellerId}</td>
//                   <td>{seller.Name}</td>
//                   <td>{seller.totalProducts}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3" className="text-center">
//                   No data available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default SellerReport;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
//   CartesianGrid, ResponsiveContainer
// } from "recharts";
// import { Table, Form } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const SellerReport = () => {
//   const [sellerData, setSellerData] = useState([]);  // ensure sellerData is initialized as an array
//   const [month, setMonth] = useState(""); // for month filter
//   const [year, setYear] = useState(""); // for year filter
//   const [selectedSeller, setSelectedSeller] = useState(""); // for seller filter
//   const [sellers, setSellers] = useState([]); // for dropdown of sellers

//   useEffect(() => {
//     fetchSellers();  // To get the list of sellers for filtering
//   }, []);

//   // Fetch the seller data based on filters (month, year, selectedSeller)
//   useEffect(() => {
//     fetchSellerData();
//   }, [month, year, selectedSeller]);

//   const fetchSellerData = async () => {
//     try {
//       // Modify the URL with query parameters to filter data
//       const response = await axios.get("http://localhost:8000/api/ReportsApi/SellerAddProductReportapi.php", {
//         params: {
//           month: month,
//           year: year,
//           sellerId: selectedSeller
//         }
//       });

//       // Check if the response is an array before setting state
//       if (Array.isArray(response.data)) {
//         setSellerData(response.data);
//       } else {
//         console.error("Invalid response format:", response.data);
//         setSellerData([]);  // Ensure we set an empty array if the data is not in expected format
//       }
//     } catch (error) {
//       console.error("Error fetching seller report:", error);
//       setSellerData([]);  // Ensure we set an empty array if there's an error
//     }
//   };

//   const fetchSellers = async () => {
//     try {
//       // Fetch all the sellers for the seller dropdown
//       const response = await axios.get("http://localhost:8000/api/ReportsApi/SellerListApi.php");
//       setSellers(response.data);
//     } catch (error) {
//       console.error("Error fetching seller list:", error);
//     }
//   };

//   return (
//     <div className="content-wrapper">
//       <div className="container">
//         <div className="content-header">
//           <div className="container-fluid">
//             <div className="row mb-2">
//               <div className="col-sm-6">
//                 <h1 className="m-0 text-dark">Reports</h1>
//               </div>
//               <div className="col-sm-6">
//                 <ol className="breadcrumb float-sm-right">
//                   <li className="breadcrumb-item"><Link to="/admin/Dashboard">
//                     <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
//                     Home</Link></li>
//                   <li className="breadcrumb-item active"> 📊Seller-Wise Product Report</li>
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Filtering Section */}
//         <div className="filter-section mb-4">
//           <Form>
//             <Form.Group>
//               <Form.Label>Month</Form.Label>
//               <Form.Control as="select" value={month} onChange={(e) => setMonth(e.target.value)}>
//                 <option value="">Select Month</option>
//                 {[...Array(12).keys()].map(i => (
//                   <option key={i} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
//                 ))}
//               </Form.Control>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Year</Form.Label>
//               <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
//                 <option value="">Select Year</option>
//                 {[2022, 2023, 2024, 2025].map(year => (
//                   <option key={year} value={year}>{year}</option>
//                 ))}
//               </Form.Control>
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Seller</Form.Label>
//               <Form.Control as="select" value={selectedSeller} onChange={(e) => setSelectedSeller(e.target.value)}>
//                 <option value="">Select Seller</option>
//                 {sellers.map(seller => (
//                   <option key={seller.sellerId} value={seller.sellerId}>
//                     {seller.Name}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Form.Group>
//           </Form>
//         </div>

//         {/* Bar Chart */}
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={sellerData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="Name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="totalProducts" fill="#007bff" />
//           </BarChart>
//         </ResponsiveContainer>

//         {/* Table for Detailed View */}
//         <h4 className="mt-4 text-center">📄 Seller Details</h4>
//         <Table striped bordered hover className="mt-3">
//           <thead className="table-dark">
//             <tr>
//               <th>Seller ID</th>
//               <th>Seller Name</th>
//               <th>Total Products</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.isArray(sellerData) && sellerData.length > 0 ? (
//               sellerData.map((seller) => (
//                 <tr key={seller.sellerId}>
//                   <td>{seller.sellerId}</td>
//                   <td>{seller.Name}</td>
//                   <td>{seller.totalProducts}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3" className="text-center">
//                   No data available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default SellerReport;
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  CartesianGrid, ResponsiveContainer
} from "recharts";
import { Table, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SellerReport = () => {
  const [sellerData, setSellerData] = useState([]);
  const [month, setMonth] = useState(""); // for month filter
  const [year, setYear] = useState(""); // for year filter
  const [selectedSeller, setSelectedSeller] = useState(""); // for seller filter
  const [sellers, setSellers] = useState([]); // for dropdown of sellers
  const [availableYears, setAvailableYears] = useState([]); // to store available years

  useEffect(() => {
    fetchSellerData();
    fetchSellers();  // To get the list of sellers for filtering
    fetchAvailableYears();  // To fetch available years dynamically
  }, [month, year, selectedSeller]);  // Re-fetch data on any filter change

  const fetchSellerData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/ReportsApi/SellerAddProductReportapi.php", {
        params: {
          month: month,
          year: year,
          sellerId: selectedSeller
        }
      });
      setSellerData(response.data);  // Set the data for bar chart and table
    } catch (error) {
      console.error("Error fetching seller report:", error);
    }
  };

  const fetchSellers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/ReportsApi/SellerListApi.php");
      setSellers(response.data);  // Set the list of sellers for dropdown
    } catch (error) {
      console.error("Error fetching seller list:", error);
    }
  };

  const fetchAvailableYears = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/ReportsApi/GetAvailableYearsApi.php");
      setAvailableYears(response.data);  // Set the available years for the year dropdown
    } catch (error) {
      console.error("Error fetching available years:", error);
    }
  };

  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Reports</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="/admin/Dashboard">
                    <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                    Home</Link></li>
                  <li className="breadcrumb-item active"> 📊Seller-Wise Product Report</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Filtering Section */}
        <div className="filter-section mb-4">
          <Form>
            <Form.Group>
              <Form.Label>Month</Form.Label>
              <Form.Control as="select" value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="">Select Month</option>
                {[...Array(12).keys()].map(i => (
                  <option key={i} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">Select Year</option>
                {availableYears.map((yearObj) => (
                  <option key={yearObj.year} value={yearObj.year}>
                    {yearObj.year}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Seller</Form.Label>
              <Form.Control as="select" value={selectedSeller} onChange={(e) => setSelectedSeller(e.target.value)}>
                <option value="">Select Seller</option>
                {sellers.map(seller => (
                  <option key={seller.sellerId} value={seller.sellerId}>
                    {seller.Name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </div>

        {/* Bar Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sellerData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalProducts" fill="#007bff" />
          </BarChart>
        </ResponsiveContainer>

        {/* Table for Detailed View */}
        <h4 className="mt-4 text-center">📄 Seller Details</h4>
        <Table striped bordered hover className="mt-3">
          <thead className="table-dark">
            <tr>
              <th>Seller ID</th>
              <th>Seller Name</th>
              <th>Total Products</th>
            </tr>
          </thead>
          <tbody>
            {sellerData.length > 0 ? (
              sellerData.map((seller) => (
                <tr key={seller.sellerId}>
                  <td>{seller.sellerId}</td>
                  <td>{seller.Name}</td>
                  <td>{seller.totalProducts}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SellerReport;
    