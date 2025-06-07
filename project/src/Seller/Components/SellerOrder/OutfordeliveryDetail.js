import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faInr } from '@fortawesome/free-solid-svg-icons';

const OutfordeliveryDetail = () => {
  const [usersData, setUsersData] = useState([]);
  const [orderStatus, setOrderStatus] = useState(''); // State to handle the status
  const { orderDetailId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      if (!orderDetailId) {
        toast.error('OrderDetailId not found');
        return;
      }

      try {
        const response = await axios.post(
          'http://localhost:8080/college%20project/mini%20project/api/GetDetailinformationaboutoutfordelivey.php',
          { orderDetailId },
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}
        );
        if (Array.isArray(response.data)) {
          setUsersData(response.data);
        } else {
          toast.error(response.data.error || 'Invalid data format from API');
        }
      } catch (error) {
        toast.error('Error fetching products');
      }
    };

    fetchProducts();
  }, [orderDetailId]);

  const handleUpdateStatus = async () => {
    if (!orderStatus) {
      toast.error('Please select an order status');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/college%20project/mini%20project/api/UpdatePendingtoshiping.php',
        { orderDetailId, orderStatus },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}
      );
      if (response.data.Update === 'true') {
        toast.success('Order status updated successfully');
        setTimeout(() => {
          navigate("/seller/SellerHome");
        }, 4000);
      } else {
        toast.error('Failed to update order status');
      }
    } catch (error) {
      toast.error('Error updating order status');
    }
  };

  return (
    <div className='content-wrapper'>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Details Orders</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/seller/SellerHome">
                    <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Orders Details</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4">
        <h5 className="text-primary">User Details</h5>
        <table className="table table-bordered">
          {usersData.map((user, index) => (
            <tbody key={index}>
              <tr>
                <td>Order Number</td>
                <td>{user.orderId}</td>
                <td>First Name</td>
                <td>{user.Name}</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>{user.Number}</td>
                <td>Email</td>
                <td>{user.Email}</td>
              </tr>
              <tr>
                <td>Street Name</td>
                <td>{user.Address}</td>
                <td>City</td>
                <td>{user.City}</td>
              </tr>
              <tr>
                <td>State</td>
                <td>{user.State}</td>
                <td>Order Status</td>
                <td style={{ color: user.status === '1' ? 'green' : 'red' }}>
                  {user.status === '1' ? 'Success' : 'Pending'}
                </td>
              </tr>
              <tr>
                <td>Order Date</td>
                <td>{user.date}</td>
              </tr>
            </tbody>
          ))}
        </table>

        <h5 className="text-primary">Order Details</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Payment Method</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`http://localhost:8080/college%20project/mini%20project/api/Images/${user.Image1}`}
                    alt="Product"
                    width="50"
                  />
                </td>
                <td>{user.ProductName}</td>
                <td>{user.paymentMethod}</td>
                <td>{user.ProductPrice}</td>
                <td>{user.quantity}</td>
                <td>{user.subtotal}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h6 className="text-danger text-end">
          Grand Total: <FontAwesomeIcon icon={faInr} /> {usersData.reduce((acc, item) => acc + Number(item.subtotal), 0)}
        </h6>

        <div className="mb-4">
          <label htmlFor="orderStatus" className="form-label fw-semibold text-secondary">
            Order Status:
          </label>
          <select
            className="form-select form-control shadow-sm border-primary"
            id="orderStatus"
            value={orderStatus}
            onChange={(e) => setOrderStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
            {/* <option value="Delivered">Order Cancel</option> */}
          </select>
        </div>
        <button className="btn btn-primary" onClick={handleUpdateStatus}>
          Update Order
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OutfordeliveryDetail;
