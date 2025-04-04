// import React, { useState, useEffect } from 'react';
// import DataTable from 'react-data-table-component';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Order = () => {
//   const [usersData, setUsersData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [filterStatus, setFilterStatus] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.post(
//           'http://localhost:8080/college%20project/mini%20project/api/GetTotalOrderStatus.php',
//           { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}
//         );
//         if (Array.isArray(response.data)) {
//           setUsersData(response.data);
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
//       // case 'Delivered':
//       //   return <button className="btn btn-success">Delivered</button>;
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
//               <h1 className="m-0 text-dark">Orders</h1>
//             </div>
//             <div className="col-sm-6">
//               <ol className="breadcrumb float-sm-right">
//                 <li className="breadcrumb-item">
//                   <Link to="/admin/Dashboard">
//                     <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
//                     Home
//                   </Link>
//                 </li>
//                 <li className="breadcrumb-item active">Orders </li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card">
//         <h5 className="card-header">Orders</h5>
//         <div className='card-body'>
//           <div className='mb-3'>
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

// export default Order;
import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Order = () => {
  const [usersData, setUsersData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [yearFilter, setYearFilter] = useState('');
  const [monthFilter, setMonthFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8080/college%20project/mini%20project/api/GetTotalOrderStatus.php',
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}
        );
        if (Array.isArray(response.data)) {
          setUsersData(response.data);
          setFilteredData(response.data);
        } else {
          toast.error(response.data.error || 'Invalid data format from API');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('Error fetching orders');
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    let filtered = usersData;

    if (yearFilter) {
      filtered = filtered.filter(order => new Date(order.date).getFullYear().toString() === yearFilter);
    }
    
    if (monthFilter) {
      filtered = filtered.filter(order => (new Date(order.date).getMonth() + 1).toString() === monthFilter);
    }

    if (nameFilter) {
      filtered = filtered.filter(order => order.Name.toLowerCase().includes(nameFilter.toLowerCase()));
    }

    if (statusFilter) {
      filtered = filtered.filter(order => order.delivery_status === statusFilter);
    }

    setFilteredData(filtered);
  }, [yearFilter, monthFilter, nameFilter, statusFilter, usersData]);

  const getStatusButton = (status) => {
    switch (status) {
      case 'Pending':
        return <button className="btn btn-danger">Pending</button>;
      case 'Shipped':
        return <button className="btn btn-warning">Shipped</button>;
      case 'Out for Delivery':
        return <button className="btn btn-primary">Out for Delivery</button>;
      default:
        return <button className="btn btn-secondary">Unknown</button>;
    }
  };

  const generateYearOptions = () => {
    const years = [...new Set(usersData.map(order => new Date(order.date).getFullYear().toString()))];
    return years.map(year => <option key={year} value={year}>{year}</option>);
  };

  // const generateMonthOptions = () => {
  //   const months = [...new Set(usersData.map(order => (new Date(order.date).getMonth() + 1).toString()))];
  //   return months.map(month => <option key={month} value={month}>{month}</option>);
  // };
  const generateMonthOptions = () => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Extract unique months from the dataset
    const availableMonths = new Set(usersData.map(order => new Date(order.date).getMonth()));
  
    // Generate options for all 12 months
    return monthNames.map((month, index) => (
      <option key={index} value={index + 1}>
        {month}
      </option>
    ));
  };
  
  const columns = [
    { name: 'OrderId', selector: row => row.orderId, sortable: true },
    { name: 'Buyer Name', selector: row => row.Name, sortable: true },
    { name: 'Mobile Number', selector: row => row.Number, sortable: true },
    { name: 'Email', selector: row => row.Email, sortable: true },
    { name: 'Order Date', selector: row => row.date, sortable: true },
    { name: 'Payment Status', selector: row => row.paymentStatus },
    { name: 'Delivery Status', cell: row => getStatusButton(row.delivery_status) }
  ];

  return (
    <div className='content-wrapper'>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Orders</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/admin/Dashboard">
                    <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Orders </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h5 className="card-header">Orders</h5>
        <div className='card-body'>

          <div className='row mb-3'>
            <div className='col-md-3'>
              <label>Filter by Year:</label>
              <select className='form-control' value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
                <option value="">All Years</option>
                {generateYearOptions()}
              </select>
            </div>

            <div className='col-md-3'>
              <label>Filter by Month:</label>
              <select className='form-control' value={monthFilter} onChange={(e) => setMonthFilter(e.target.value)}>
                <option value="">All Months</option>
                {generateMonthOptions()}
              </select>
            </div>

            <div className='col-md-3'>
              <label>Filter by Name:</label>
              <input
                type="text"
                className='form-control'
                placeholder="Enter Name"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
              />
            </div>

            <div className='col-md-3'>
              <label>Filter by Delivery Status:</label>
              <select className='form-control' value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for Delivery">Out for Delivery</option>
              </select>
            </div>
          </div>

          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            highlightOnHover
            defaultSortFieldId="orderId"
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Order;
