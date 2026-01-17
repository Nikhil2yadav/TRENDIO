import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ManageProduct = () => {
  const [usersData, setUsersData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [genderFilter, setGenderFilter] = useState('All'); // State to track gender filter
  const navigate = useNavigate();

  // Retrieve SellerId from localStorage
  const SellerId = localStorage.getItem('userId');
  const toggleProductStatus = async (ProductId, currentStatus) => {
    try {
      // const newStatus = currentStatus === "1" ? "0" : "1"; // Toggle status
        const formData=new FormData();
        formData.append('ProductId',ProductId);
        formData.append("newStatus", currentStatus === "1" ? "0" : "1");

      const response = await axios.post(
        "http://localhost:8000/api/UpdateProductStatus.php",
        formData
      );

      if (response.data.success === "true") {
        setUsersData((prevData) =>
          prevData.map((product) =>
            product.ProductId === ProductId ? { ...product, activestatus: response.data.newStatus } : product
          )
        );
        
        
        toast.success("Product status updated successfully");
      } else {
        toast.error("Failed to update product status");
      }
    } catch (error) {
      console.error("Error updating product status:", error);
      toast.error("Error updating product status");
    }
  };
  const deleteProduct = async (ProductId) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    console.log(ProductId);
    if (confirmed) {
      try {
        await axios.get(`http://localhost:8000/api/DeleteProductApi.php?ProductId=${ProductId}`);
        setUsersData(usersData.filter(product => product.ProductId !== ProductId));
        toast.success("Product deleted successfully", {
          className: "toastifycontainer",
          autoClose: true
        });
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error('Error deleting product');
      }
    }
  };

  const updateProduct = async (ProductId) => {
    navigate(`/seller/Addproduct/${ProductId}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      if (!SellerId) {
        toast.error('SellerId not found');
        return;
      }

      try {
        const response = await axios.post(
          'http://localhost:8000/api/GetProductSellerWise.php',
          { SellerId },
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );

        if (Array.isArray(response.data)) {
          console.log(response.data
          )
          setUsersData(response.data);
          setFilteredData(response.data); // Initialize filteredData
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

  // Filter the product data based on the selected gender
  useEffect(() => {
    if (genderFilter === 'All') {
      setFilteredData(usersData); // Show all products
    } else {
      setFilteredData(usersData.filter(product => product.Gender === genderFilter));
    }
  }, [genderFilter, usersData]);

  // Define table columns
  const columns = [
    {
      name: 'Product Name',
      selector: row => row.ProductName,
      sortable: true,
    },
    {
      name: 'Image',
      selector: row => row.ProductImages,
      sortable: true,
      cell: row => (
        <img 
          src={`http://localhost:8000/api/Images/${row.Image1}`} 
          alt={row.ProductName} 
          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
        />
      )
    },
    {
      name: 'Price',
      selector: row => row.ProductPrice,
      sortable: true,
    },
    {
      name: 'Gender',
      selector: row => row.Gender,
      sortable: true,
    },
    {
      name: 'Product type',
      selector: row => row.producttype,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.activestatus || "Available",
      sortable: true,
      cell: row => (
        <button
          className={`btn ${row.activestatus === "1" ? 'btn-success' : 'btn-danger'}`}
          onClick={() => toggleProductStatus(row.ProductId, row.activestatus)}
        >
          {row.activestatus === "1" ? "Active" : "Inactive"}
        </button>
      ),
    },
    {
      name: 'Action',
      cell: row => (
        <>
          <button className="btn" onClick={() => updateProduct(row.ProductId)}><FaEdit /></button>
          <button className="btn" onClick={() => deleteProduct(row.ProductId)}><FaTrash /></button>
        </>
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
              <h1 className="m-0 text-dark">Products</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/seller/SellerHome">
                    <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Products</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Gender Filter */}
      <div className="card">
        <h5 className="card-header">Filter by Gender</h5>
        <div className="card-body">
          <select
            className="form-control"
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)} // Update the selected gender
          >
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      {/* Product Table */}
      <div className="card">
        <h5 className="card-header">Products</h5>
        <div className='card-body'>
          <DataTable
            columns={columns}
            data={filteredData} // Use filtered data here
            pagination
            highlightOnHover
            defaultSortFieldId="productname"
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ManageProduct;

