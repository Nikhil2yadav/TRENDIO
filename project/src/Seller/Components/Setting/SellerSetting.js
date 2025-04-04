import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SellerSetting = () => {
  const [userData, setUserData] = useState({
    Name: '',
    Email: '',
    Number: '',
    Aadhar_Card_Number: '',
    Pan_Card_Number: '',
    GST_Number: '',
    oldPassword: '',
    password: '',
    confirmPassword: ''
  });
  const [isEditing, setIsEditing] = useState(false); // State to track editing mode

  const SellerId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8080/college%20project/mini%20project/api/GetSingleSellerdata.php',
          { SellerId: SellerId },
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
        );
        if (response.data) {
          setUserData(response.data[0]);
          console.log(response.data);
        } else {
          toast.error('Failed to fetch seller data');
        }
      } catch (error) {
        console.error('Error fetching seller data:', error);
        toast.error('Error fetching seller data');
      }
    };
    fetchSellerData();
  }, [SellerId]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Toggle editing mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Reset form to initial values (cancel editing)
  const handleCancel = () => {
    toggleEditMode(); // Toggle back to view mode
    // Re-fetch seller data to reset form fields
    const fetchSellerData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8080/college%20project/mini%20project/api/GetSingleSellerdata.php',
          { SellerId: SellerId },
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }
        );
        if (response.data) {
          setUserData(response.data[0]); // Reset form values
        }
      } catch (error) {
        console.error('Error fetching seller data:', error);
      }
    };
    fetchSellerData();
  };

  // Handle form submission for updating seller data
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/college%20project/mini%20project/api/UpdateSellerApi.php',
        { SellerId, ...userData },
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
      );
      if (response.data.success==="true") {
        toast.success('Seller information updated successfully');
        toggleEditMode(); // Exit edit mode after successful update
      } else {
        toast.error('Failed to update seller information');
      }
    } catch (error) {
      console.error('Error updating seller information:', error);
      toast.error('Error updating seller information');
    }
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">
                {isEditing ? 'Update Information' : 'User'} <small>{isEditing ? '' : 'Setting'}</small>
              </h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/seller/SellerHome">
                    <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Setting</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h4>{isEditing ? 'Update Information' : 'User Information'}</h4>
          <Button className="float-right" onClick={toggleEditMode}>
            {isEditing ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faEdit} />
            )}
          </Button>
        </div>
        <div className="card-body">
          <div className="form-container">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="Name">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="Name"
                  value={userData.Name}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  name="Email"
                  value={userData.Email}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Number">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="Number"
                  name="Number"
                  value={userData.Number}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Aadhar_Card_Number">Aadhar Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="Aadhar_Card_Number"
                  name="Aadhar_Card_Number"
                  value={userData.Aadhar_Card_Number}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Pan_Card_Number">Pan Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="Pan_Card_Number"
                  name="Pan_Card_Number"
                  value={userData.Pan_Card_Number}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="form-group">
                <label htmlFor="GST_Number">GST Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="GST_Number"
                  name="GST_Number"
                  value={userData.GST_Number}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
              {isEditing && (
                <>
                  <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="Password"
                      name="Password"
                      placeholder="Password"
                      value={userData.Password}
                      onChange={handleInputChange}
                    />
                  </div>
                 
                  
                </>
              )}
              {isEditing && (
                <div>
                  <Button type="submit" className="btn btn-success">
                    <FontAwesomeIcon icon={faSave} /> Save Changes
                  </Button>
                  <Button
                    type="button"
                    className="btn btn-secondary ml-2"
                    onClick={handleCancel}
                  >
                    <FontAwesomeIcon icon={faTimes} /> Back
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SellerSetting;
