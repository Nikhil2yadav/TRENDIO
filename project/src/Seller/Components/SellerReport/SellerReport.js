// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

// const SellerReport = () => {
//   const [reportData, setReportData] = useState({
//     totalRevenue: 0,
//     totalOrders: 0,
//     products: [],
//     orders: []
//   });

//   const sellerId = localStorage.getItem("userId");

//   useEffect(() => {
//     axios.get(`http://localhost:8000/api/ReportsApi/sellerReport.php?sellerId=${sellerId}`)
//       .then(response => {
//         setReportData(response.data);
//         // console.log(response.data)
//       })
//       .catch(error => {
//         console.error("Error fetching report:", error);
//       });
//   }, [sellerId]);

//   return (
//     <div className="content-wrapper">
//         <div className="container mt-4">
//       <h2>Seller Report</h2>
//       <div className="row">
//         <div className="col-md-6">
//           <div className="card p-3">
//             <h5>Total Revenue: ₹{reportData.total_revenue}</h5>
//             <h5>Total Orders: {reportData.total_orders}</h5>
//           </div>
//         </div>
//       </div>

//       <h4 className="mt-4">Product Performance</h4>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={reportData.orders}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="productname" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="quantity" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>

//       <h4 className="mt-4">Order Details</h4>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Product</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reportData.orders.map(order => (
//             <tr key={order.order_id}>
//               <td>{order.order_id}</td>
//               <td>{order.productname}</td>
//               <td>{order.quantity}</td>
//               <td>₹{order.totalamount}</td>
//               <td>{order.delivery_status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
    
//   );
// };

// export default SellerReport;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
// import { Form, Button } from "react-bootstrap";

// const SellerReport = () => {
//   const [reportData, setReportData] = useState({
//     total_revenue: 0,
//     total_orders: 0,
//     orders: []
//   });

//   const [chartData, setChartData] = useState([]); // Processed data for chart
//   const [filters, setFilters] = useState({ startDate: "", endDate: "", status: "" });

//   const sellerId = localStorage.getItem("userId");

//   useEffect(() => {
//     fetchReport();
//   }, [sellerId, filters]); // Fetch data when sellerId or filters change

//   const fetchReport = () => {
//     let url = `http://localhost:8000/api/ReportsApi/sellerReport.php?sellerId=${sellerId}`;

//     // Add filters to URL
//     if (filters.startDate) url += `&startDate=${filters.startDate}`;
//     if (filters.endDate) url += `&endDate=${filters.endDate}`;
//     if (filters.status) url += `&status=${filters.status}`;

//     axios
//       .get(url)
//       .then(response => {
//         setReportData(response.data);
//         console.log(response.data)
//         processChartData(response.data.orders);
//       })
//       .catch(error => {
//         console.error("Error fetching report:", error);
//       });
//   };

//   // Process chart data to group products by name and sum up quantities
//   const processChartData = (orders) => {
//     const groupedData = {};
//     orders.forEach(order => {
//       if (groupedData[order.productname]) {
//         groupedData[order.productname] += order.quantity;
//       } else {
//         groupedData[order.productname] = order.quantity;
//       }
//     });

//     // Convert object to array for Recharts
//     const formattedData = Object.keys(groupedData).map(product => ({
//       productname: product,
//       quantity: groupedData[product]
//     }));

//     setChartData(formattedData);
//   };

//   return (
//     <div className="content-wrapper">
//       <div className="container mt-4">
//         <h2>Seller Report</h2>

//         {/* Filter Section */}
//         <div className="row mb-4">
//           <div className="col-md-3">
//             <label>Start Date</label>
//             <input
//               type="date"
//               className="form-control"
//               value={filters.startDate}
//               onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
//             />
//           </div>
//           <div className="col-md-3">
//             <label>End Date</label>
//             <input
//               type="date"
//               className="form-control"
//               value={filters.endDate}
//               onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
//             />
//           </div>
//           <div className="col-md-3">
//             <label>Status</label>
//             <select
//               className="form-control"
//               value={filters.status}
//               onChange={(e) => setFilters({ ...filters, status: e.target.value })}
//             >
//               <option value="">All</option>
//               <option value="Pending">Pending</option>
//               <option value="Delivered">Delivered</option>
//               <option value="Cancelled">Cancelled</option>
//             </select>
//           </div>
//           <div className="col-md-3">
//             <Button className="btn btn-primary mt-4" onClick={fetchReport}>
//               Apply Filters
//             </Button>
//           </div>
//         </div>

//         {/* Revenue & Orders Summary */}
//         <div className="row">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <h5>Total Revenue: ₹{reportData.total_revenue}</h5>
//               <h5>Total Orders: {reportData.total_orders}</h5>
//             </div>
//           </div>
//         </div>

//         {/* Bar Chart for Product Sales */}
//         <h4 className="mt-4">Product Performance</h4>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="productname" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="quantity" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>

//         {/* Order Details Table */}
//         <h4 className="mt-4">Order Details</h4>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Order ID</th>
//               <th>Product</th>
//               <th>Quantity</th>
//               <th>Price</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reportData.orders.map(order => (
//               <tr key={order.order_id}>
//                 <td>{order.order_id}</td>
//                 <td>{order.productname}</td>
//                 <td>{order.quantity}</td>
//                 <td>₹{order.ProductPrice}</td>
//                 <td>{order.delivery_status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SellerReport;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
// import { Button } from "react-bootstrap";

// const SellerReport = () => {
//   const [reportData, setReportData] = useState({
//     total_revenue: 0,
//     total_orders: 0,
//     orders: []
//   });

//   const [chartData, setChartData] = useState([]);
//   const [filters, setFilters] = useState({ year: "", month: "", status: "" });

//   const [years, setYears] = useState([]); // Available years from DB
//   const sellerId = localStorage.getItem("userId");

//   useEffect(() => {
//     fetchYears(); // Fetch available years on component mount
//   }, []);

//   useEffect(() => {
//     if (filters.year && filters.month) {
//       fetchReport(); // Auto-fetch report on filter change
//     }
//   }, [filters]);

//   const fetchYears = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/api/ReportsApi/SellerOrderReportapi.php", {
//         params: { getYears: "true" },
//       });
//       setYears(response.data);
//     } catch (error) {
//       console.error("Error fetching years:", error);
//     }
//   };

//   const fetchReport = () => {
//     let url = `http://localhost:8000/api/ReportsApi/sellerReport.php?sellerId=${sellerId}&year=${filters.year}&month=${filters.month}`;
    
//     if (filters.status) url += `&status=${filters.status}`;

//     axios.get(url)
//       .then(response => {
//         setReportData(response.data);
//         processChartData(response.data.orders);
//       })
//       .catch(error => console.error("Error fetching report:", error));
//   };

//   const processChartData = (orders) => {
//     const groupedData = {};
//     orders.forEach(order => {
//       if (groupedData[order.productname]) {
//         groupedData[order.productname] += order.quantity;
//       } else {
//         groupedData[order.productname] = order.quantity;
//       }
//     });

//     setChartData(Object.keys(groupedData).map(product => ({
//       productname: product,
//       quantity: groupedData[product]
//     })));
//   };

//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   return (
//     <div className="content-wrapper">
//       <div className="container mt-4">
//         <h2>Seller Report</h2>

//         {/* Filter Section */}
//         <div className="row mb-4">
//           <div className="col-md-3">
//             <label>Year</label>
//             <select
//               className="form-control"
//               value={filters.year}
//               onChange={(e) => setFilters({ ...filters, year: e.target.value })}
//             >
//               <option value="">Select Year</option>
//               {years.map(year => <option key={year} value={year}>{year}</option>)}
//             </select>
//           </div>
//           <div className="col-md-3">
//             <label>Month</label>
//             <select
//               className="form-control"
//               value={filters.month}
//               onChange={(e) => setFilters({ ...filters, month: e.target.value })}
//             >
//               <option value="">Select Month</option>
//               {months.map((month, index) => (
//                 <option key={month} value={index + 1}>{month}</option>
//               ))}
//             </select>
//           </div>
//           <div className="col-md-3">
//             <label>Status</label>
//             <select
//               className="form-control"
//               value={filters.status}
//               onChange={(e) => setFilters({ ...filters, status: e.target.value })}
//             >
//               <option value="">All</option>
//               <option value="Pending">Pending</option>
//               <option value="Delivered">Delivered</option>
//               <option value="Cancelled">Cancelled</option>
//             </select>
//           </div>
//         </div>

//         {/* Revenue & Orders Summary */}
//         <div className="row">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <h5>Total Revenue: ₹{reportData.total_revenue}</h5>
//               <h5>Total Orders: {reportData.total_orders}</h5>
//             </div>
//           </div>
//         </div>

//         {/* Bar Chart for Product Sales */}
//         <h4 className="mt-4">Product Performance</h4>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="productname" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="quantity" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>

//         {/* Order Details Table */}
//         <h4 className="mt-4">Order Details</h4>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Order ID</th>
//               <th>Product</th>
//               <th>Quantity</th>
//               <th>Price</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reportData.orders.map(order => (
//               <tr key={order.order_id}>
//                 <td>{order.order_id}</td>
//                 <td>{order.productname}</td>
//                 <td>{order.quantity}</td>
//                 <td>₹{order.ProductPrice}</td>
//                 <td>{order.delivery_status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SellerReport;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
// } from "recharts";

// const SellerReport = () => {
//   const [reportData, setReportData] = useState({
//     total_revenue: 0,
//     total_orders: 0,
//     orders: [],
//   });

//   const [chartData, setChartData] = useState([]);
//   const [filters, setFilters] = useState({ year: "", month: "", productType: "" });
//   const [productTypes, setProductTypes] = useState([]); // Store product types
//   const [years, setYears] = useState([]);
  
//   const sellerId = localStorage.getItem("userId");

//   // Fetch all data on mount
//   useEffect(() => {
//     fetchReport(); 
//     fetchProductTypes();
//   }, []);

//   // Fetch data when filters change
//   useEffect(() => {
//     if (filters.year || filters.month || filters.status) {
//       fetchReport();
//     }
//   }, [filters]);

//   // Fetch seller report
//   const fetchReport = async () => {
//     try {
//       let url = `http://localhost:8000/api/ReportsApi/sellerReport.php?sellerId=${sellerId}`;
//       if (filters.year) url += `&year=${filters.year}`;
//       if (filters.month) url += `&month=${filters.month}`;
//       if (filters.status) url += `&status=${filters.status}`;

//       const response = await axios.get(url);
//       setReportData(response.data);
//       processChartData(response.data.orders);

//       // Extract available years dynamically
//       if (!years.length) {
//         const uniqueYears = [...new Set(response.data.orders.map(order => new Date(order.date).getFullYear()))];
//         setYears(uniqueYears);
//       }
//     } catch (error) {
//       console.error("Error fetching report:", error);
//     }
//   };
//   const fetchProductTypes = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/api/ReportsApi/GetProductTypes.php?sellerId=${sellerId}`);
//       setProductTypes(response.data);
//       console.log(productTypes)
//     } catch (error) {
//       console.error("Error fetching product types:", error);
//     }
//   };

//   // Process data for chart
//   const processChartData = (orders) => {
//     const groupedData = {};
//     orders.forEach(order => {
//       if (groupedData[order.productname]) {
//         groupedData[order.productname] += order.quantity;
//       } else {
//         groupedData[order.productname] = order.quantity;
//       }
//     });

//     setChartData(Object.keys(groupedData).map(product => ({
//       productname: product,
//       quantity: groupedData[product],
//     })));
//   };

//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December",
//   ];

//   return (
//     <div className="content-wrapper">
//       <div className="container mt-4">
//         <h2>Seller Report</h2>

//         {/* Filter Section */}
//         <div className="row mb-4">
//           <div className="col-md-4">
//             <label>Year</label>
//             <select
//               className="form-control"
//               value={filters.year}
//               onChange={(e) => setFilters({ ...filters, year: e.target.value })}
//             >
//               <option value="">All Years</option>
//               {years.map(year => <option key={year} value={year}>{year}</option>)}
//             </select>
//           </div>
//           <div className="col-md-4">
//             <label>Month</label>
//             <select
//               className="form-control"
//               value={filters.month}
//               onChange={(e) => setFilters({ ...filters, month: e.target.value })}
//             >
//               <option value="">All Months</option>
//               {months.map((month, index) => (
//                 <option key={month} value={index + 1}>{month}</option>
//               ))}
//             </select>
//           </div>

//           <div className="col-md-4">
//             <label>Product Type</label>
//             <select
//               className="form-control"
//               value={filters.productType}
//               onChange={(e) => setFilters({ ...filters, productType: e.target.value })}
//             >
//               <option value="">All</option>
//               {productTypes.map(type => (
//                 <option key={type} value={type}>{type}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Revenue & Orders Summary */}
//         <div className="row">
//           <div className="col-md-6">
//             <div className="card p-3">
//               <h5>Total Revenue: ₹{reportData.total_revenue}</h5>
//               <h5>Total Orders: {reportData.total_orders}</h5>
//             </div>
//           </div>
//         </div>

//         {/* Bar Chart for Product Sales */}
//         <h4 className="mt-4">Product Performance</h4>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={chartData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="productname" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="quantity" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>

//         {/* Order Details Table */}
//         <h4 className="mt-4">Order Details</h4>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Order ID</th>
//               <th>Date</th>
//               <th>Product</th>
//               <th>Quantity</th>
//               <th>Price</th>
//               {/* <th>Status</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {reportData.orders.map(order => (
//               <tr key={order.order_id}>
//                 <td>{order.order_id}</td>
//                 <td>{new Date(order.date).toLocaleDateString()}</td>
//                 <td>{order.productname}</td>
//                 <td>{order.quantity}</td>
//                 <td>₹{order.ProductPrice}</td>
//                 {/* <td>{order.delivery_status}</td> */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SellerReport;
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

const SellerReport = () => {
  const [reportData, setReportData] = useState({
    total_revenue: 0,
    total_orders: 0,
    orders: [],
  });

  const [chartData, setChartData] = useState([]);
  const [filters, setFilters] = useState({ year: "", month: "", productType: "" });
  const [productTypes, setProductTypes] = useState([]); // Store product types
  const [years, setYears] = useState([]);

  const sellerId = localStorage.getItem("userId");

  // Fetch all data on mount
  useEffect(() => {
    fetchReport();
    fetchProductTypes();
  }, []);

  // Fetch data when filters change
  useEffect(() => {
    fetchReport();
  }, [filters]);

  // Fetch seller report with filters
  const fetchReport = async () => {
    try {
      let url = `http://localhost:8000/api/ReportsApi/sellerReport.php?sellerId=${sellerId}`;

      if (filters.year) url += `&year=${filters.year}`;
      if (filters.month) url += `&month=${filters.month}`;
      if (filters.productType) url += `&productType=${encodeURIComponent(filters.productType)}`;
      if (filters.productName) url += `&productName=${encodeURIComponent(filters.productName)}`; // Add this line

      const response = await axios.get(url);
      setReportData(response.data);
      console.log(response.data)
      processChartData(response.data.orders);

      // Extract unique years dynamically
      if (!years.length && response.data.orders.length > 0) {
        const uniqueYears = [...new Set(response.data.orders.map(order => new Date(order.date).getFullYear()))];
        setYears(uniqueYears);
      }
    } catch (error) {
      console.error("Error fetching report:", error);
    }
  };

  
  const fetchProductTypes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/ReportsApi/GetProductTypes.php?sellerId=${sellerId}`
      );
  
      console.log("Product Types API Response:", response.data); // Debugging
  
      if (Array.isArray(response.data)) {
        setProductTypes(response.data);
      } else {
        console.error("Invalid product types data:", response.data);
      }
    } catch (error) {
      console.error("Error fetching product types:", error);
    }
  };
  
  
  // Process data for chart
  const processChartData = (orders) => {
    const groupedData = {};
    orders.forEach(order => {
      if (groupedData[order.productname]) {
        groupedData[order.productname] += order.quantity;
      } else {
        groupedData[order.productname] = order.quantity;
      }
    });

    setChartData(Object.keys(groupedData).map(product => ({
      productname: product,
      quantity: groupedData[product],
    })));
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  return (
    <div className="content-wrapper">
      <div className="container mt-4">
        <h2>Seller Report</h2>

        {/* Filter Section */}
        {/* <div className="row mb-4">
          <div className="col-md-4">
            <label>Year</label>
            <select
              className="form-control"
              value={filters.year}
              onChange={(e) => setFilters({ ...filters, year: e.target.value })}
            >
              <option value="">All Years</option>
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
          </div>
          <div className="col-md-4">
            <label>Month</label>
            <select
              className="form-control"
              value={filters.month}
              onChange={(e) => setFilters({ ...filters, month: e.target.value })}
            >
              <option value="">All Months</option>
              {months.map((month, index) => (
                <option key={month} value={index + 1}>{month}</option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <label>Product Type</label>
            <select
              className="form-control"
              value={filters.productType}
              onChange={(e) => setFilters({ ...filters, productType: e.target.value })}
            >
              <option value="">All</option>
              {productTypes.length > 0 ? (
  productTypes.map((type, index) => (
    <option key={index} value={type}>{type}</option>
  ))
) : (
  <option disabled>No Product Types</option>
)}
            </select>
          </div>
        </div> */}
        <div className="row mb-4">
  <div className="col-md-3">
    <label>Year</label>
    <select
      className="form-control"
      value={filters.year}
      onChange={(e) => setFilters({ ...filters, year: e.target.value })}
    >
      <option value="">All Years</option>
      {years.map(year => <option key={year} value={year}>{year}</option>)}
    </select>
  </div>

  <div className="col-md-3">
    <label>Month</label>
    <select
      className="form-control"
      value={filters.month}
      onChange={(e) => setFilters({ ...filters, month: e.target.value })}
    >
      <option value="">All Months</option>
      {months.map((month, index) => (
        <option key={month} value={index + 1}>{month}</option>
      ))}
    </select>
  </div>

  <div className="col-md-3">
    <label>Product Type</label>
    <select
      className="form-control"
      value={filters.productType}
      onChange={(e) => setFilters({ ...filters, productType: e.target.value })}
    >
      <option value="">All</option>
      {productTypes.length > 0 ? (
        productTypes.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))
      ) : (
        <option disabled>No Product Types</option>
      )}
    </select>
  </div>

  <div className="col-md-3">
    {/* <label>Product Name</label>
    <input
      type="text"
      className="form-control"
      placeholder="Search by Product Name"
      value={filters.productName}
      onChange={(e) => setFilters({ ...filters, productName: e.target.value })}
    /> */}
    <label>Product Name</label>
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Product Name"
        value={filters.productName}
        onChange={(e) => setFilters({ ...filters, productName: e.target.value })}
      />
      
    </div>
  </div>
</div>

        {/* Revenue & Orders Summary */}
        <div className="row">
          <div className="col-md-6">
            <div className="card p-3">
              <h5>Total Revenue: ₹{reportData.total_revenue}</h5>
              <h5>Total Orders: {reportData.total_orders}</h5>
            </div>
          </div>
        </div>

        {/* Bar Chart for Product Sales */}
        <h4 className="mt-4">Product Performance</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="productname" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        {/* Order Details Table */}
        <h4 className="mt-4">Order Details</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Product</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {reportData.orders.map(order => (
              <tr key={order.order_id}>
                <td>{order.order_id}</td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>{order.productname}</td>
                <td>{order.producttype}</td>
                <td>{order.quantity}</td>
                <td>₹{order.ProductPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerReport;
