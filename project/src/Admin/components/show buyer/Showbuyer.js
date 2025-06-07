import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const Showbuyer = () => {
  const [buyersData, setBuyersData] = useState([]);
  const [searchText, setSearchText] = useState('');

  const filterBuyer=buyersData.filter(buyer=>
    buyer.Name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Function to fetch buyers data from the API
  const fetchBuyers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/college%20project/mini%20project/api/GetBuyers.php');
      if (Array.isArray(response.data)) {
        setBuyersData(response.data); // Set the buyer data
      } else {
        toast.error(response.data.error || 'Invalid data format from API');
      }
    } catch (error) {
      console.error('Error fetching buyers:', error);
      toast.error('Error fetching buyers');
    }
  };

  // Function to delete buyer by ID
  const deleteBuyer = async (BuyerId) => {
    const confirmed = window.confirm("Are you sure you want to delete this buyer?");
    if (confirmed) {
      try {
        await axios.get(`http://localhost:8080/college%20project/mini%20project/api/DeleteBuyerApi.php?buyerId=${BuyerId}`);
        setBuyersData(buyersData.filter(buyer => buyer.BuyerId !== BuyerId)); // Remove the deleted buyer from the table
        toast.success("Buyer deleted successfully");
      } catch (error) {
        console.error("Error deleting buyer:", error);
        toast.error('Error deleting buyer');
      }
    }
  };

  // Function to toggle buyer's active/inactive status
  const toggleBuyerStatus = async (BuyerId, currentStatus) => {
    try {
      const formData = new FormData();
      formData.append('buyerId', BuyerId);

      const response = await axios.post(
        'http://localhost:8080/college%20project/mini%20project/api/UpdateBuyerStatus.php',
        formData
      );

      if (response.data.success) {
        // Update the status in the local state
        setBuyersData((prevData) =>
          prevData.map((buyer) =>
            buyer.BuyerId === BuyerId ? { ...buyer, activestatus: response.data.newStatus } : buyer
          )
        );
        toast.success(`Buyer status updated to ${response.data.newStatus === "1" ? "Active" : "Inactive"}`);
      } else {
        toast.error(response.data.message || 'Failed to update buyer status');
      }
    } catch (error) {
      console.error("Error updating buyer status:", error);
      toast.error('Error updating buyer status');
    }
  };

  // Fetch buyers data when the component mounts
  useEffect(() => {
    fetchBuyers();
  }, []);

  // Define table columns
  const columns = [
    {
      name: 'Buyer Name',
      selector: row => row.Name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.Email,
      sortable: true,
    },
    {
      name: 'Phone',
      selector: row => row.Number,
      sortable: true,
    },
    {
      name: 'Status',
      cell: row => (
        <button
          className={`btn ${row.activestatus === "1" ? 'btn-success' : 'btn-danger'}`}
          onClick={() => toggleBuyerStatus(row.BuyerId, row.activestatus)}
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
        <button className="btn btn-danger" onClick={() => deleteBuyer(row.BuyerId)}><FaTrash /></button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ];

  return (
    <div className='content-wrapper'>
      {/* <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Buyers</h1>
            </div>
          </div>
        </div>
      </div> */}
<div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Buyer</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/admin/Dashboard"><FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />Home</Link></li>
                <li className="breadcrumb-item active">Buyer</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <h5 className="card-header">Buyer List</h5>
        <div className='card-body'>
        <div className="mb-3">
  <input
    type="text"
    className="form-control"
    placeholder="Search by buyer name"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />
</div>

          <DataTable
            columns={columns}
            data={filterBuyer}
            pagination
            highlightOnHover
            defaultSortFieldId="buyername"
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Showbuyer;
