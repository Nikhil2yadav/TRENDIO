import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [formError, setFormError] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Sending:", { email, password });
    // Reset form errors
    setFormError({ email: '', password: '' });
    setError('');

    // Validate form fields
    if (!email) {
      setFormError((prev) => ({ ...prev, email: 'Please enter your email.' }));
      return;
    }
    if (!password) {
      setFormError((prev) => ({ ...prev, password: 'Please enter your password.' }));
      return;
    }

    const formData = new URLSearchParams();
    formData.append('Email', email);
    formData.append('Password', password);

    try {
      // Try admin login first
      let response = await axios.post('http://localhost:8000/api/LoginApi.php',
        formData.toString(),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );

      let data = response.data;

      if (data.admin === "TRUE" && data.Data[0]['7'] === 'admin') {
        // Admin login successful
        const loginId = data.Data.loginId || data.Data[0]['0'];
        const userName = data.Data[0]['1'];
        localStorage.setItem('AdminId', loginId);
        localStorage.setItem('AdminName', userName);
        login(data.Data);
        navigate('/admin/Dashboard');
      } else if (data.seller === "TRUE" && data.Data['12'] === 'seller'   ) {
        // Seller login successful
        const loginId = data.Data.loginId || data.Data['1'];
        const userName = data.Data['5'];
        localStorage.setItem('userName', userName);
        localStorage.setItem('userId', loginId);
        login(data.Data);
        navigate('/seller/SellerHome');
      }
      else if(data.seller === "inactivestatus"){
toast.warning("Your account is deactivated! Contact Admin@gmail.com");
      } else {
        // Invalid credentials
        setError('Email or password is incorrect. Please try again.');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 bg-white rounded" style={{ width: '400px' }}>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <h3 className="text-center mb-4">Login</h3>
          <div className="form-group mb-3">
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
            {formError.email && <div className="text-danger">{formError.email}</div>}
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
            {formError.password && <div className="text-danger">{formError.password}</div>}
          </div>
          <div className="form-group form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="check"
              name="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="check" className="form-check-label"> Remember me</label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </div>
          <p className="text-right mt-3">
            <Link to="/ForgetPassword">Forget Password</Link>
          </p>
          <p className="text-center mt-3">
            Become a new member <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;
