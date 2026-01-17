import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Outfordelivery = () => {
  const [usersData, setUsersData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  // Retrieve SellerId from localStorage
  const SellerId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchProducts = async () => {
      if (!SellerId) {
        toast.error('SellerId not found');
        return;
      }

      try {
        const response = await axios.post(
          'http://localhost:8000/api/GetoutfordeliveryOrderaccordingtoseller.php',
          { SellerId },
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}
        );
        // console.log(response.data)
        if (Array.isArray(response.data)) {
          setUsersData(response.data);
          setFilteredData(response.data); // Initialize filteredData
          console.log(filteredData)
        } else {
          toast.error(response.data.error || 'Invalid data format from API');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Error fetching products');
      }
    };

    fetchProducts();
  }, [SellerId]);

  // Navigate to Order Details Page
  const handleViewOrder = (orderDetailId) => {
    navigate(`/seller/OutfordeliveryDetail/${orderDetailId}`);
  };

  // Define table columns
  const columns = [
    {
      name: 'OrderId',
      selector: row => row.orderId,
      sortable: true,
    },
    {
      name: 'Buyer Name',
      selector: row => row.Name,
      sortable: true,
    },
    {
      name: 'Mobile Number',
      selector: row => row.Number,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.Email,
      sortable: true,
    },
    {
      name: 'Order Date',
      selector: row => row.date,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.paymentStatus,
    },
    {
        name: 'Order status',
        selector: row => row.delivery_status,
      },
    {
      name: 'Action',
      cell: row => (
        <button 
          className="btn btn-primary btn-sm"
          onClick={() => handleViewOrder(row.orderDetailId)}
        >
          View Details
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ];

  return (
    <div className='content-wrapper'>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Out For Delivery Orders</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/seller/SellerHome">
                    <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Out For Delivery Orders</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <h5 className="card-header">Orders</h5>
        <div className='card-body'>
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

export default Outfordelivery;
