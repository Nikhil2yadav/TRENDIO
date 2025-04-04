import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8080/college%20project/mini%20project/api/GetAdmindata.php');
        console.log("API Response:", response.data);
        setUser(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  if(!user){
    return <div>Loading...</div>;
  }
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Profile</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/admin/Dashboard">
                    <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Profile</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      <section className='content'>
        <div className='container-fluid'>
          <h3>Admin Profile</h3>
          <hr></hr>
          <table className="table table-bordered">
            <tbody>

              <tr>
                <td>Username:</td>
                <td>{user.Username}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{user.Email}</td>
              </tr>
              <tr>
                <td>First Name:</td>
                <td>{user.Firstname}</td>
              </tr>
              <tr>
                <td>Last Name:</td>
                <td>{user.Lastname}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{user.number}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Profile;
