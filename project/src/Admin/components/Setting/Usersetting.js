import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import "./UserSetting.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import qs from 'qs';

const Usersetting = () => {
  const [userData, setUserData] = useState(null);
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Get AdminId from localStorage
  const AdminId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8080/college%20project/mini%20project/api/GetAdmindata.php');
        setUserData(response.data[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
    toast.info("Leave the password field empty if you don't want to change", {
      toastId: 'password-info',
      className: "tostify-info",
      autoClose: false,
    });
  }, []);

  const handleSaveChanges = async () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    // Prepare payload for password verification and update
    const payload = {
      LoginId: AdminId,
      current_password: oldPassword,
      NewPassword: password
    };

    console.log('Payload:', payload); // Debug: Check if LoginId and other data are set properly

    try {
      // Call the API to verify old password and update the new one
      const response = await axios.post(
        "http://localhost:8080/college%20project/mini%20project/api/UpdateAdminPassword.php",
        qs.stringify(payload), // Encode payload using qs
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }  // Set header to form-urlencoded
      );
      console.log('Response:', response.data);
      console.log()
      const { Updated, count } = response.data;

      if (count === "0") {
        toast.error("Old password is incorrect");
      }
       else if (Updated === "true") {
        toast.success('Password updated successfully');
      } else {
        toast.error("Failed to update password");
      }
      // if(Updated ==="true"){
      //   toast.success('Password updated successfully');
      // }else{
      //   toast.error("Failed to update password");
      // }
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("Error occurred while updating password");
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">User <small>Setting</small></h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/admin/Dashboard">
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
        <div className='card-header'>
          <h4>Update Password</h4>
        </div>
        <div className="card-body">
          <div className="form-container">
            <form>
              {/* <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" value={userData.Username} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" value={userData.Email} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" value={userData.Firstname} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" value={userData.Lastname} readOnly />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" className="form-control" id="phone" value={userData.number} readOnly />
              </div> */}
              <div className="form-group">
                <label htmlFor="oldPassword">Old Password</label>
                <input
                  placeholder='Old Password'
                  type="password"
                  className="form-control"
                  id="oldPassword"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input
                  placeholder='New Password'
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <input
                  placeholder='Confirm New Password'
                  type="text"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
                <Button variant="secondary" className='btn-buttons'>Back</Button>
              </div>
            </form>
            <ToastContainer className="toast-container" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usersetting;
