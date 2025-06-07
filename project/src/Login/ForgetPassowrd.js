import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailExists, setEmailExists] = useState(false);
  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
const navigate=useNavigate();
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError({}); // Reset errors

    if (!email) {
      setError({ email: "Email is required" });
      return;
    }
    if (!validateEmail(email)) {
      setError({ email: "Invalid email format" });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("Email", email);

      const response = await axios.post(
        "http://localhost:8080/college%20project/mini%20project/api/CheckEmailApi.php",
        formData
      );

      console.log(response.data); // Debug API response

      if (response.data?.Email === "true") {
        setEmailExists(true);
        setError({});
      } else {
        setError({ email: "Email not found. Please enter a valid email." });
      }
    } catch (err) {
      setError({ email: "An error occurred. Please try again." });
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setError({}); // Reset errors

    let errors = {};
    if (!password) errors.password = "Password is required";
    else if (password.length < 6)
      errors.password = "Password must be at least 6 characters";

    if (!confirmPassword) errors.confirmPassword = "Confirm password is required";
    else if (password !== confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("Email", email);
      formData.append("Password", password);
      const response = await axios.post(
        "http://localhost:8080/college%20project/mini%20project/api/ResetPasswordApi.php",
        formData
      );

      console.log(response.data); // Debug API response

      if (response.data.updated === "TRUE") {
        setSuccessMessage("Password updated successfully! You can now login.", navigate("/"));
        
        setEmailExists(false);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        setError({ global: "Password reset failed. Try again." });
      }
    } catch (err) {
      setError({ global: "An error occurred. Please try again." });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 bg-white rounded" style={{ width: "100%", maxWidth: "400px" }}>
        {!emailExists ? (
          <form onSubmit={handleEmailSubmit}>
            <h3 className="text-center mb-4">Forgot Password</h3>
            {error.global && <div className="alert alert-danger">{error.global}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}

            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">Enter Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`form-control ${error.email ? "is-invalid" : ""}`}
              />
              {error.email && <div className="invalid-feedback">{error.email}</div>}
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </div>
          </form>
        ) : (
          <form onSubmit={handlePasswordSubmit}>
            <h3 className="text-center mb-4">Reset Password</h3>
            {successMessage && <div className="alert alert-success">{successMessage}</div>}

            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">New Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`form-control ${error.password ? "is-invalid" : ""}`}
              />
              {error.password && <div className="invalid-feedback">{error.password}</div>}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`form-control ${error.confirmPassword ? "is-invalid" : ""}`}
              />
              {error.confirmPassword && <div className="invalid-feedback">{error.confirmPassword}</div>}
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success btn-block">Reset Password</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
