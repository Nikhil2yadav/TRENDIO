// import React, { useState, useEffect } from 'react';
// import DataTable from 'react-data-table-component';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const ViewOrderHistory = () => {
//   const [usersData, setUsersData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [filterStatus, setFilterStatus] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.post(
//           'http://localhost:8080/college%20project/mini%20project/api/GetTotalDelivered.php',
//           { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}
//         );
//         if (Array.isArray(response.data)) {
//           setUsersData(response.data);
//           console.log(usersData)
//           setFilteredData(response.data); // Initialize filteredData
//         } else {
//           toast.error(response.data.error || 'Invalid data format from API');
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         toast.error('Error fetching products');
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleFilterChange = (e) => {
//     const status = e.target.value;
//     setFilterStatus(status);

//     if (status === '') {
//       setFilteredData(usersData);
//     } else {
//       const filtered = usersData.filter(order => order.delivery_status === status);
//       setFilteredData(filtered);
//     }
//   };

//   const getStatusButton = (status) => {
//     switch (status) {
//       case 'Delivered':
//         return <button className="btn btn-success">Delivered</button>;
//       case 'Pending':
//         return <button className="btn btn-danger">Pending</button>;
//       case 'Shipped':
//         return <button className="btn btn-warning">Shipped</button>;
//       case 'Out for Delivery':
//         return <button className="btn btn-primary">Out for Delivery</button>;
//       default:
//         return <button className="btn btn-secondary">Unknown</button>;
//     }
//   };

//   const columns = [
//     {
//       name: 'OrderId',
//       selector: row => row.orderId,
//       sortable: true,
//     },
//     {
//       name: 'Buyer Name',
//       selector: row => row.Name,
//       sortable: true,
//     },
//     {
//       name: 'Mobile Number',
//       selector: row => row.Number,
//       sortable: true,
//     },
//     {
//       name: 'Email',
//       selector: row => row.Email,
//       sortable: true,
//     },
//     {
//       name: 'Order Date',
//       selector: row => row.date,
//       sortable: true,
//     },
//     {
//       name: 'Payment Status',
//       selector: row => row.paymentStatus,
//     },
//     {
//       name: 'Delivery Status',
//       cell: row => getStatusButton(row.delivery_status),
//     }
//   ];

//   return (
//     <div className='content-wrapper'>
//       <div className="content-header">
//         <div className="container-fluid">
//           <div className="row mb-2">
//             <div className="col-sm-6">
//               <h1 className="m-0 text-dark">View Delivered Orders</h1>
//             </div>
//             <div className="col-sm-6">
//               <ol className="breadcrumb float-sm-right">
//                 <li className="breadcrumb-item">
//                   <Link to="/admin/Dashboard">
//                     <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
//                     Home
//                   </Link>
//                 </li>
//                 <li className="breadcrumb-item active">Delivered Orders </li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card">
//         <h5 className="card-header">Orders</h5>
//         <div className='card-body'>
//           {/* <div className='mb-3'>
//             <select
//               className='form-control w-25'
//               value={filterStatus}
//               onChange={handleFilterChange}
//             >
//               <option value="">All Status</option>
//               <option value="Pending">Pending</option>
//               <option value="Shipped">Shipped</option>
//               <option value="Out for Delivery">Out for Delivery</option>
//             </select>
//           </div> */}

//           <DataTable
//             columns={columns}
//             data={filteredData}
//             pagination
//             highlightOnHover
//             defaultSortFieldId="orderId"
//           />
//         </div>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default ViewOrderHistory;
// import React, { useState, useEffect } from 'react';
// import DataTable from 'react-data-table-component';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const ViewOrderHistory = () => {
//   const [usersData, setUsersData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [filterStatus, setFilterStatus] = useState('');
//   const [filterMonth, setFilterMonth] = useState('');
//   const [filterYear, setFilterYear] = useState('');
//   const [filterName, setFilterName] = useState('');
  
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.post(
//           'http://localhost:8080/college%20project/mini%20project/api/GetTotalDelivered.php',
//           { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}
//         );
//         if (Array.isArray(response.data)) {
//           setUsersData(response.data);
//           setFilteredData(response.data);
//         } else {
//           toast.error(response.data.error || 'Invalid data format from API');
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         toast.error('Error fetching products');
//       }
//     };

//     fetchProducts();
//   }, []);
//   const [years, setYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState('');
  
//   useEffect(() => {
//     const fetchYears = async () => {
//       try {
//         const response = await axios.post(
//           'http://localhost:8080/college%20project/mini%20project/api/GetOrderYears.php'
//         );
//         setYears(response.data.years || []);
//       } catch (error) {
//         console.error('Error fetching years:', error);
//         toast.error('Error fetching years');
//       }
//     };
  
//     fetchYears();
//   }, []);
  
//   // **Handle Filters**
//   const applyFilters = () => {
//     let filtered = usersData;

//     if (filterStatus) {
//       filtered = filtered.filter(order => order.delivery_status === filterStatus);
//     }
    
//     if (filterMonth) {
//       filtered = filtered.filter(order => new Date(order.date).getMonth() + 1 === parseInt(filterMonth));
//     }

//     if (filterYear) {
//       filtered = filtered.filter(order => new Date(order.date).getFullYear() === parseInt(filterYear));
//     }

//     if (filterName) {
//       filtered = filtered.filter(order => order.Name.toLowerCase().includes(filterName.toLowerCase()));
//     }

//     setFilteredData(filtered);
//   };

//   const getStatusButton = (status) => {
//     switch (status) {
//       case 'Delivered':
//         return <button className="btn btn-success">Delivered</button>;
     
//       default:
//         return <button className="btn btn-secondary">Unknown</button>;
//     }
//   };
// <div className="mb-3">
//   <select
//     className="form-control w-25"
//     value={selectedYear}
//     onChange={(e) => setSelectedYear(e.target.value)}
//   >
//     <option value="">Select Year</option>
//     {years.map((year, index) => (
//       <option key={index} value={year}>{year}</option>
//     ))}
//   </select>
// </div>

//   const columns = [
//     { name: 'OrderId', selector: row => row.orderId, sortable: true },
//     { name: 'Buyer Name', selector: row => row.Name, sortable: true },
//     { name: 'Mobile Number', selector: row => row.Number, sortable: true },
//     { name: 'Email', selector: row => row.Email, sortable: true },
//     { name: 'Order Date', selector: row => row.date, sortable: true },
//     { name: 'Payment Status', selector: row => row.paymentStatus },
//     { name: 'Delivery Status', cell: row => getStatusButton(row.delivery_status) }
//   ];

//   return (
//     <div className='content-wrapper'>
//       <div className="content-header">
//         <div className="container-fluid">
//           <div className="row mb-2">
//             <div className="col-sm-6">
//               <h1 className="m-0 text-dark">View Delivered Orders</h1>
//             </div>
//             <div className="col-sm-6">
//               <ol className="breadcrumb float-sm-right">
//                 <li className="breadcrumb-item">
//                   <Link to="/admin/Dashboard">
//                     <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
//                     Home
//                   </Link>
//                 </li>
//                 <li className="breadcrumb-item active">Delivered Orders</li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="card">
//         <h5 className="card-header">Orders</h5>
//         <div className='card-body'>

//           {/* Filter Section */}
//           <div className='row mb-3'> 
//             <div className='col-md-3'>
//               <select className='form-control' value={filterMonth} onChange={e => { setFilterMonth(e.target.value); applyFilters(); }}>
//                 <option value="">All Months</option>
//                 <option value="1">January</option>
//                 <option value="2">February</option>
//                 <option value="3">March</option>
//                 <option value="4">April</option>
//                 <option value="5">May</option>
//                 <option value="6">June</option>
//                 <option value="7">July</option>
//                 <option value="8">August</option>
//                 <option value="9">September</option>
//                 <option value="10">October</option>
//                 <option value="11">November</option>
//                 <option value="12">December</option>
//               </select>
//             </div>

//             {/* <div className='col-md-3'>
//               <select className='form-control' value={filterYear} onChange={e => { setFilterYear(e.target.value); applyFilters(); }}>
//                 <option value="">All Years</option>
//                 <option value="2024">2024</option>
//                 <option value="2023">2023</option>
//                 <option value="2022">2022</option>
//                 <option value="2021">2021</option>
//               </select>
//             </div> */}
//             <div className="mb-3">
//             <select
//                 className="form-control "
//                 value={selectedYear}
//                 onChange={(e) => setSelectedYear(e.target.value)}
//             >
//                 <option value="">Select Year</option>
//                     {years.map((year, index) => (
//                 <option key={index} value={year}>{year}</option>
//                 ))}
//             </select>
//             </div>


//             <div className='col-md-3'>
//               <input type="text" className='form-control' placeholder="Search by Name" 
//                 value={filterName} 
//                 onChange={e => { setFilterName(e.target.value); applyFilters(); }} />
//             </div>
//           </div>

//           <DataTable
//             columns={columns}
//             data={filteredData}
//             pagination
//             highlightOnHover
//             defaultSortFieldId="orderId"
//           />
//         </div>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default ViewOrderHistory;
import React, { useState, useEffect, useCallback } from 'react';
import DataTable from 'react-data-table-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ViewOrderHistory = () => {
  const [usersData, setUsersData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [years, setYears] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');
  const [filterMonth, setFilterMonth] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ordersRes, yearsRes] = await Promise.all([
          axios.post('http://localhost:8080/college%20project/mini%20project/api/GetTotalDelivered.php', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }),
          axios.post('http://localhost:8080/college%20project/mini%20project/api/GetOrderYears.php')
        ]);

        if (Array.isArray(ordersRes.data)) {
          setUsersData(ordersRes.data);
          setFilteredData(ordersRes.data);
        } else {
          toast.error(ordersRes.data.error || 'Invalid data format from API');
        }

        setYears(yearsRes.data.years || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Error fetching data');
      }
    };

    fetchData();
  }, []);
  const getStatusButton = (status) => {
    switch (status) {
      case 'Delivered':
        return <button className="btn btn-success">Delivered</button>;
     
      default:
        return <button className="btn btn-secondary">Unknown</button>;
    }
  };
  const applyFilters = useCallback(() => {
    let filtered = usersData;

    if (filterStatus) {
      filtered = filtered.filter(order => order.delivery_status === filterStatus);
    }
    if (filterMonth) {
      filtered = filtered.filter(order => new Date(order.date).getMonth() + 1 === parseInt(filterMonth));
    }
    if (filterYear) {
      filtered = filtered.filter(order => new Date(order.date).getFullYear() === parseInt(filterYear));
    }
    if (filterName) {
      filtered = filtered.filter(order => order.Name.toLowerCase().includes(filterName.toLowerCase()));
    }
    
    setFilteredData(filtered);
  }, [usersData, filterStatus, filterMonth, filterYear, filterName]);

  useEffect(() => {
    applyFilters();
  }, [filterStatus, filterMonth, filterYear, filterName, applyFilters]);

  const columns = [
    { name: 'Order ID', selector: row => row.orderId, sortable: true },
    { name: 'Buyer Name', selector: row => row.Name, sortable: true },
    { name: 'Mobile', selector: row => row.Number, sortable: true },
    { name: 'Email', selector: row => row.Email, sortable: true },
    { name: 'Order Date', selector: row => row.date, sortable: true },
    { name: 'Payment Status', selector: row => row.paymentStatus },
    { name: 'Delivery Status', selector: row =>getStatusButton( row.delivery_status) }
  ];

  return (
    <div className='content-wrapper'>
      <div className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1 className='m-0 text-dark'>View Delivered Orders</h1>
            </div>
            <div className='col-sm-6'>
              <ol className='breadcrumb float-sm-right'>
                <li className='breadcrumb-item'>
                  <Link to='/admin/Dashboard'>
                    <FontAwesomeIcon icon={faTachometerAlt} className='nav-icon' /> Home
                  </Link>
                </li>
                <li className='breadcrumb-item active'>Delivered Orders</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className='card'>
        <h5 className='card-header'>Orders</h5>
        <div className='card-body'>
          <div className='row mb-3'>
            <div className='col-md-3'>
              <select className='form-control' value={filterMonth} onChange={e => setFilterMonth(e.target.value)}>
                <option value=''>All Months</option>
                {[...Array(12).keys()].map(i => (
                  <option key={i} value={i + 1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                ))}
              </select>
            </div>

            <div className='col-md-3'>
              <select className='form-control' value={filterYear} onChange={e => setFilterYear(e.target.value)}>
                <option value=''>All Years</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className='col-md-3'>
              <input type='text' className='form-control' placeholder='Search by Name' value={filterName} onChange={e => setFilterName(e.target.value)} />
            </div>
          </div>

          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            highlightOnHover
            defaultSortFieldId='orderId'
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ViewOrderHistory;
