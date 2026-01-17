
// import React, { useEffect, useState, useMemo } from 'react';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
// import './ManageUserPage.css'; // Import custom CSS file
// import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
// import { Link} from 'react-router-dom';
// import axios from 'axios';
// import DataTable from 'react-data-table-component';

// const ManageSeller = () => {
//   const [sellers, setSellers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   const toggleBuyerStatus = async (SellerId, currentStatus) => {
//     try {
//       const formData = new FormData();
//       formData.append('SellerId', SellerId);

//       const response = await axios.post(
//         'http://localhost:8000/api/UpdateSellerStatus.php',
//         formData
//       );

//       if (response.data.success) {
//         // Update the status in the local state
//         setSellers((prevData) =>
//           prevData.map((seller) =>
//             seller.SellerId === SellerId ? { ...seller, activestatus: response.data.newStatus } : seller
//           )
//         );
//         toast.success(`Seller status updated to ${response.data.newStatus === "1" ? "Active" : "Inactive"}`);
//       } else {
//         toast.error(response.data.message || 'Failed to update seller status');
//       }
//     } catch (error) {
//       console.error("Error updating seller status:", error);
//       toast.error('Error updating seller status');
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/api/GetSellerdata.php");
//         console.log('API Response:', response);

//         if (Array.isArray(response.data)) {
//           setSellers(response.data);
//         } else if (response.data && Array.isArray(response.data.sellers)) {
//           setSellers(response.data.sellers);
//         } else {
//           console.error("Unexpected response format:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const deleteSeller = async (SellerId) => {
//     const confirmed = window.confirm('Are you sure you want to delete this seller?');
//     if (confirmed) {
//       try {
//         await axios.get(`http://localhost:8000/api/DeleteSeller.php?SellerId=${SellerId}`);
//         setSellers(sellers.filter(seller => seller.SellerId !== SellerId));
//         toast.success('Seller deleted successfully', {
//             className: "toastifycontainer",
//             autoClose: false
//         });
//       } catch (error) {
//         console.error("Error deleting seller:", error);
//         toast.error('Error deleting seller');
//       }
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredData = sellers.filter(seller =>
//     seller.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     seller.Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     seller.Number.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     seller.Aadhar_Card_Number.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     seller.Pan_Card_Number.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const columns = useMemo(() => [
//     {
//       name: 'Name',
//       selector: row => row.Name,
//       sortable: true,
//     },
//     {
//       name: 'Email',
//       selector: row => row.Email,
//       sortable: true,
//     },
//     {
//       name: 'Number',
//       selector: row => row.Number,
//       sortable: true,
//     },
//     {
//       name: 'Aadhar Card Number',
//       selector: row => row.Aadhar_Card_Number,
//       sortable: true,
//     },
//     {
//       name: 'Pan Card Number',
//       selector: row => row.Pan_Card_Number,
//       sortable: true,
//     },
//     {
//       name: 'Status',
//       cell: row => (
//         <button
//           className={`btn ${row.activestatus === "1" ? 'btn-success' : 'btn-danger'}`}
//           onClick={() => toggleBuyerStatus(row.BuyerId, row.activestatus)}
//         >
//           {row.activestatus === "1" ? "Active" : "Inactive"}
//         </button>
//       ),
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//     },
//     {
//       name: 'Action',
//       cell: row => (
//         <div>
//           <button className="btn" onClick={() => deleteSeller(row.SellerId)}><FaTrash className='icons' /></button>
//         </div>
//       ),
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//     },
//   ], [ deleteSeller]);

//   return (
//     <div className='content-wrapper'>
//       <div className="content-header">
//         <div className="container-fluid">
//           <div className="row mb-2">
//             <div className="col-sm-6">
//               <h1 className="m-0 text-dark">Manage <small>Seller</small></h1>
//             </div>
//             <div className="col-sm-6">
//               <ol className="breadcrumb float-sm-right">
//                 <li className="breadcrumb-item"><Link to="/admin/Dashboard"><FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />Home</Link></li>
//                 <li className="breadcrumb-item active">Manage Seller</li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <Link className="btn btn-outline-success" to='/Addseller' id='adduser'>Add Seller</Link> */}

//       <div className="card">
//         <h5 className="card-header">Manage Seller</h5>
//         <div className='card-body'>
//           <div id='txtsearch'>
//             <label id='lblsearch'>Search :</label>
//             <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} />
//           </div>
//           <DataTable
//             columns={columns}
//             data={filteredData}
//             pagination
//             defaultSortFieldId={1}
//             responsive
//             highlightOnHover
//           />
//         </div>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default ManageSeller;
import React, { useEffect, useState, useMemo } from 'react';
import { FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import './ManageUserPage.css'; // Import custom CSS file

const ManageSeller = () => {
  const [sellers, setSellers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch seller data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/GetSellerdata.php");
        console.log('API Response:', response);

        if (Array.isArray(response.data)) {
          setSellers(response.data);
        } else if (response.data && Array.isArray(response.data.sellers)) {
          setSellers(response.data.sellers);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Toggle Seller Active/Inactive Status
  const toggleSellerStatus = async (SellerId, currentStatus) => {
    try {
      const formData = new FormData();
      formData.append('SellerId', SellerId);

      const response = await axios.post(
        'http://localhost:8000/api/UpdateSellerStatus.php',
        formData
      );

      if (response.data.success) {
        // Update status in state
        setSellers(prevSellers =>
          prevSellers.map(seller =>
            seller.SellerId === SellerId ? { ...seller, activestatus: response.data.newStatus } : seller
          )
        );
        toast.success(`Seller status updated to ${response.data.newStatus === "1" ? "Active" : "Inactive"}`);
      } else {
        toast.error(response.data.message || 'Failed to update seller status');
      }
    } catch (error) {
      console.error("Error updating seller status:", error);
      toast.error('Error updating seller status');
    }
  };

  // Delete Seller
  const deleteSeller = async (SellerId) => {
    const confirmed = window.confirm('Are you sure you want to delete this seller?');
    if (confirmed) {
      try {
        await axios.get(`http://localhost:8000/api/DeleteSeller.php?SellerId=${SellerId}`);
        setSellers(sellers.filter(seller => seller.SellerId !== SellerId));
        toast.success('Seller deleted successfully');
      } catch (error) {
        console.error("Error deleting seller:", error);
        toast.error('Error deleting seller');
      }
    }
  };

  // Handle Search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filtered Data for Search
  const filteredData = sellers.filter(seller =>
    seller.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    seller.Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    seller.Number.toLowerCase().includes(searchQuery.toLowerCase()) ||
    seller.Aadhar_Card_Number.toLowerCase().includes(searchQuery.toLowerCase()) ||
    seller.Pan_Card_Number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Data Table Columns
  const columns = useMemo(() => [
    {
      name: 'Name',
      selector: row => row.Name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.Email,
      sortable: true,
    },
    {
      name: 'Number',
      selector: row => row.Number,
      sortable: true,
    },
    {
      name: 'Aadhar Card Number',
      selector: row => row.Aadhar_Card_Number,
      sortable: true,
    },
    {
      name: 'Pan Card Number',
      selector: row => row.Pan_Card_Number,
      sortable: true,
    },
    {
      name: 'Status',
      cell: row => (
        <button
          className={`btn ${row.activestatus === "1" ? 'btn-success' : 'btn-danger'}`}
          onClick={() => toggleSellerStatus(row.SellerId, row.activestatus)}
        >
          {row.activestatus === "1" ? "Active" : "Inactive"}
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: 'Action',
      cell: row => (
        <div>
          <button className="btn btn-danger" onClick={() => deleteSeller(row.SellerId)}>
            <FaTrash className='icons' />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ], [deleteSeller]);

  return (
    <div className='content-wrapper'>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Manage <small>Seller</small></h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/admin/Dashboard">
                    <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Manage Seller</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h5 className="card-header">Manage Seller</h5>
        <div id='txtsearch' className='float-left'>
            {/* <label id='lblsearch'>Search :</label> */}
            <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} className='form-control' />
          </div>
        <div className='card-body'>
          
          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            defaultSortFieldId={1}
            responsive
            highlightOnHover
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ManageSeller;
