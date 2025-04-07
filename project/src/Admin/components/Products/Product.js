import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const [usersData, setUsersData] = useState([]);
  const [searchText, setSearchText] = useState('');


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/college%20project/mini%20project/api/DisplayProductApi.php",
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        console.log('API Response:', response);

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

  // const filteredData = usersData.filter(item =>
  //   item.ProductName.toLowerCase().includes(searchText.toLowerCase()) ||
  //   item.ProductPrice.toLowerCase().includes(searchText.toLowerCase()) ||
  //   item.Name.toLowerCase().includes(searchText.toLowerCase())
  // );
  
  // Function to delete a product
  const deleteProduct = async (ProductId) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      try {
        await axios.get(`http://localhost:8080/college%20project/mini%20project/api/DeleteProductApi.php?ProductId=${ProductId}`);
        setUsersData(usersData.filter(product => product.ProductId !== ProductId));
        toast.success("Product deleted successfully", { autoClose: 2000 });
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error('Error deleting product');
      }
    }
  };
  const priceRanges = [
    { label: "All", min: 0, max: Infinity },
    { label: "₹0 - ₹499", min: 0, max: 499 },
    { label: "₹500 - ₹999", min: 500, max: 999 },
    { label: "₹1000 - ₹1999", min: 1000, max: 1999 },
    { label: "₹2000+", min: 2000, max: Infinity }
  ];
  const [selectedRange, setSelectedRange] = useState(priceRanges[0]);
  

  // Function to toggle product status
  const toggleProductStatus = async (ProductId, currentStatus) => {
    try {
      // const newStatus = currentStatus === "1" ? "0" : "1"; // Toggle status
const formData=new FormData();
formData.append('ProductId',ProductId);
formData.append("newStatus", currentStatus === "1" ? "0" : "1");


      const response = await axios.post(
        "http://localhost:8080/college%20project/mini%20project/api/UpdateProductStatus.php",
        formData
      );

      if (response.data.success === "true") {
        setUsersData((prevData) =>
          prevData.map((product) =>
            product.ProductId === ProductId ? { ...product, activestatus: response.data.newStatus } : product
          )
        );
        
        // setUsersData((prevData)=>prevData.map((product)=>product.ProductId ? {...product,activestatus:response.data.newStatus} : product))
        // setUsersData(usersData.map(product =>
        //   product.ProductId === ProductId ? { ...product, activestatus: newStatus } : product
        // ));
        toast.success("Product status updated successfully");
      } else {
        toast.error("Failed to update product status");
      }
    } catch (error) {
      console.error("Error updating product status:", error);
      toast.error("Error updating product status");
    }
  };
  const filteredData = usersData.filter(item => {
    const searchMatch =
      item.ProductName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.Name.toLowerCase().includes(searchText.toLowerCase());
  
    const price = parseFloat(item.ProductPrice);
    const inRange = price >= selectedRange.min && price <= selectedRange.max;
  
    return searchMatch && inRange;
  });
  
  // Define columns for DataTable
  const columns = [
    {
      name: 'Image',
      selector: row => row.ProductImages,
      sortable: true,
      cell: row => (
        <img 
          src={`http://localhost:8080/college%20project/mini%20project/api/Images/${row.Image1}`} 
          alt={row.ProductName} 
          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
        />
      )
    },
    {
      name: 'Product Name',
      selector: row => row.ProductName,
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => row.ProductPrice,
      sortable: true,
    },
    {
      name: 'Seller',
      selector: row => row.Name,
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
          <button className="btn btn-danger" onClick={() => deleteProduct(row.ProductId)}><FaTrash /></button>
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
                  <Link to="/admin/Dashboard">
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

      <div className="card">
        <h5 className="card-header">Products</h5>
        <div className='card-body'>
        <div className='row'>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name or seller"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div>
  <label>Filter by Price Range:</label>

        </div>
        <div className="col-md-4">
  <select
    className="form-control"
    value={selectedRange.label}
    onChange={(e) => {
      const selected = priceRanges.find(r => r.label === e.target.value);
      setSelectedRange(selected);
    }}
  >
    {priceRanges.map((range, index) => (
      <option key={index} value={range.label}>
        {range.label}
      </option>
    ))}
  </select>
</div>
        </div>
       

          {/* Render DataTable */}
          <DataTable
          
            columns={columns}
            data={filteredData}
            pagination
            highlightOnHover
            defaultSortFieldId="ProductName"
          >
            
          </DataTable>

        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Product;
