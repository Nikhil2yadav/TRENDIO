import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';

const AddProductSize = () => {
  const [size, setSize] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      'http://trendio.free.nf/api/insertSize.php',
      {
        Size: size, // Sending size input
      },
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    if (response.data.success === "true") {
      toast.success('Product Size Added Successfully');
      setSize('');
    } else {
        toast.error('Failed to Add Product and Size');
    }
  };

  return (
    <div className='content-wrapper'>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Product Size</h1>
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
      <div className="container mt-4">
        <div className="card p-4">
          <h2 className="text-center mb-4">Add Product Size</h2>
          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Add Product Size
            </button>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AddProductSize;
