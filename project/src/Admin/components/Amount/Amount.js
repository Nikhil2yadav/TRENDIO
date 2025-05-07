import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Amount = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.post(
          "http://trendio.free.nf/api/displayamountgetadmin.php",
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        console.log('API Response:', response.data);

        if (Array.isArray(response.data)) {
          setUsersData(response.data); 
        } else {
          console.error('Expected an array but got:', response.data);
          toast.error(response.data.error || 'Invalid data format from API');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Error fetching products');
      }
    };
    fetchProduct();
  }, []);

  // Define columns for DataTable
  const columns = [
    {
      name: 'Product Name',
      selector: row => row.productName,
      sortable: true,
    //   cell: row => (
    //     <img 
    //       src={`http://localhost:8080/college%20project/mini%20project/api/Images/${row.Image1}`} 
    //       alt={row.ProductName} 
    //       style={{ width: '50px', height: '50px', objectFit: 'cover' }}
    //     />
    //   )
    },
    {
      name: 'Seller Name',
      selector: row => row.SellerName,
      sortable: true,
    },
    {
      name: 'Buyer Name',
      selector: row => row.buyerName,
      sortable: true,
    },
    {
      name: 'Order Date',
      selector: row => row.orderDate,
      sortable: true,
    },
    {
        name: 'Total Price',
        selector: row => row.subtotal,
        sortable: true,
    },
    {
        name: 'Admin Price',
        selector: row => row.adminAmount,
        sortable: true,
    },
    
    
   
  ];

  return (
    <div className='content-wrapper'>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Amount</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/admin/Dashboard">
                    <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Amount</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h5 className="card-header">Amount</h5>
        <div className='card-body'>
          {/* Render DataTable */}
          <DataTable
            columns={columns}
            data={usersData}
            pagination
            highlightOnHover
            defaultSortFieldId="ProductName"
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Amount;
