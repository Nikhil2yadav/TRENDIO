
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const SellerRegister = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [number, setNumber] = useState('');
//   const [aadhar, setAadhar] = useState('');
//   const [gst, setGst] = useState('');
//   const [pan, setPan] = useState('');
//   const [error, setError] = useState({});
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Validate inputs before submitting
//     let formErrors = {};
//     if (!name) formErrors.name = 'Name is required';
//     if (!email) formErrors.email = 'Email is required';
//     if (!password) formErrors.password = 'Password is required';
//     if (!number) formErrors.number = 'Phone number is required';
//     if (!aadhar) formErrors.aadhar = 'Aadhar card number is required';
//     if (!gst) formErrors.gst = 'GST number is required';
//     if (!pan) formErrors.pan = 'Pan card number is required';

//     if (Object.keys(formErrors).length > 0) {
//       setError(formErrors);
//       return;
//     }

//     const formData = new FormData();
//     formData.append('Name', name);
//     formData.append('Email', email);
//     formData.append('Password', password);
//     formData.append('Number', number);
//     formData.append('Aadhar_Card_Number', aadhar);
//     formData.append('GST_Number', gst);
//     formData.append('Pan_Card_Number', pan);

//     try {
//       const response = await axios.post(
//         'http://127.0.0.1:8080/college%20project/mini%20project/api/SellerApi.php',
//         formData
//       );
//       const data = response.data;
//       if (data.selleradded === 'TRUE') {
//         navigate('/');
//       } 
//       else if (data.error === 'Email already exists') {
//         setError('Email already exists. Please use a different email.');
//     }
//       else {
//         setError({ global: data.Message || 'Registration failed. Please try again.' });
//       }
//     } catch (error) {
//       console.error('There was an error!', error);
//       setError({ global: 'An error occurred. Please try again.' });
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
//       <div className="card shadow-lg p-4 bg-white rounded" style={{ width: '100%', maxWidth: '500px' }}>
//         <form onSubmit={handleSubmit}>
//           {error.global && <div className="alert alert-danger">{error.global}</div>}

//           <div className="form-group mb-3">
//             <h3 className="text-center mb-4">Register as a Seller</h3>
//             <label htmlFor="name" className="form-label">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className={`form-control ${error.name ? 'is-invalid' : ''}`}
//             />
//             {error.name && <div className="invalid-feedback">{error.name}</div>}
//           </div>

//           <div className="form-group mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className={`form-control ${error.email ? 'is-invalid' : ''}`}
//             />
//             {error.email && <div className="invalid-feedback">{error.email}</div>}
//           </div>

//           <div className="form-group mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className={`form-control ${error.password ? 'is-invalid' : ''}`}
//             />
//             {error.password && <div className="invalid-feedback">{error.password}</div>}
//           </div>

//           <div className="form-group mb-3">
//             <label htmlFor="number" className="form-label">Phone Number</label>
//             <input
//               type="tel"
//               id="number"
//               name="number"
//               placeholder="Enter your phone number"
//               value={number}
//               onChange={(e) => setNumber(e.target.value)}
//               className={`form-control ${error.number ? 'is-invalid' : ''}`}
//             />
//             {error.number && <div className="invalid-feedback">{error.number}</div>}
//           </div>

//           <div className="form-group mb-3">
//             <label htmlFor="gst" className="form-label">GST Number</label>
//             <input
//               type="text"
//               id="gst"
//               name="gst"
//               placeholder="Enter your GST number"
//               value={gst}
//               onChange={(e) => setGst(e.target.value)}
//               className={`form-control ${error.gst ? 'is-invalid' : ''}`}
//             />
//             {error.gst && <div className="invalid-feedback">{error.gst}</div>}
//           </div>

//           <div className="form-group mb-3">
//             <label htmlFor="aadhar" className="form-label">Aadhar Card Number</label>
//             <input
//               type="text"
//               id="aadhar"
//               name="aadhar"
//               placeholder="Enter your Aadhar card number"
//               value={aadhar}
//               onChange={(e) => setAadhar(e.target.value)}
//               className={`form-control ${error.aadhar ? 'is-invalid' : ''}`}
//             />
//             {error.aadhar && <div className="invalid-feedback">{error.aadhar}</div>}
//           </div>

//           <div className="form-group mb-3">
//             <label htmlFor="pan" className="form-label">Pan Card Number</label>
//             <input
//               type="text"
//               id="pan"
//               name="pan"
//               placeholder="Enter your Pan card number"
//               value={pan}
//               onChange={(e) => setPan(e.target.value)}
//               className={`form-control ${error.pan ? 'is-invalid' : ''}`}
//             />
//             {error.pan && <div className="invalid-feedback">{error.pan}</div>}
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary btn-block">
//               Register
//             </button>
//           </div>
//           <p className="text-center mt-3">
//             Already Registered? <Link to="/">Login</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SellerRegister;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SellerRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [gst, setGst] = useState('');
  const [pan, setPan] = useState('');
  const [error, setError] = useState({});
  const navigate = useNavigate();

  // Regular expressions for validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^[6-9]\d{9}$/;
  const aadharPattern = /^\d{12}$/;
  const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate inputs before submitting
    let formErrors = {};
    if (!name) formErrors.name = 'Name is required';
    if (!email) formErrors.email = 'Email is required';
    else if (!emailPattern.test(email)) formErrors.email = 'Invalid email format';

    if (!password) formErrors.password = 'Password is required';
    else if (password.length < 6) formErrors.password = 'Password must be at least 6 characters';

    if (!number) formErrors.number = 'Phone number is required';
    else if (!phonePattern.test(number)) formErrors.number = 'Invalid phone number';

    if (!aadhar) formErrors.aadhar = 'Aadhar card number is required';
    else if (!aadharPattern.test(aadhar)) formErrors.aadhar = 'Invalid Aadhar card number';

    if (!gst) formErrors.gst = 'GST number is required';
    else if (!gstPattern.test(gst)) formErrors.gst = 'Invalid GST number format';

    if (!pan) formErrors.pan = 'Pan card number is required';
    else if (!panPattern.test(pan)) formErrors.pan = 'Invalid PAN card format';

    if (Object.keys(formErrors).length > 0) {
      setError(formErrors);
      return;
    }

    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Password', password);
    formData.append('Number', number);
    formData.append('Aadhar_Card_Number', aadhar);
    formData.append('GST_Number', gst);
    formData.append('Pan_Card_Number', pan);

    try {
      const response = await axios.post(
        'http://127.0.0.1:8080/college%20project/mini%20project/api/SellerApi.php',
        formData
      );
      const data = response.data;
      if (data.selleradded === 'TRUE') {
        navigate('/');
      } 
      else if (data.error === 'Email already exists') {
        setError({ email: 'Email already exists. Please use a different email.' });
      }
      else {
        setError({ global: data.Message || 'Registration failed. Please try again.' });
      }
    } catch (error) {
      console.error('There was an error!', error);
      setError({ global: 'An error occurred. Please try again.' });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 bg-white rounded" style={{ width: '100%', maxWidth: '500px' }}>
        <form onSubmit={handleSubmit}>
          {error.global && <div className="alert alert-danger">{error.global}</div>}

          <h3 className="text-center mb-4">Register as a Seller</h3>

          {/* Name Field */}
          <div className="form-group mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`form-control ${error.name ? 'is-invalid' : ''}`}
            />
            {error.name && <div className="invalid-feedback">{error.name}</div>}
          </div>

          {/* Email Field */}
          <div className="form-group mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-control ${error.email ? 'is-invalid' : ''}`}
            />
            {error.email && <div className="invalid-feedback">{error.email}</div>}
          </div>

          {/* Password Field */}
          <div className="form-group mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`form-control ${error.password ? 'is-invalid' : ''}`}
            />
            {error.password && <div className="invalid-feedback">{error.password}</div>}
          </div>

          {/* Phone Number Field */}
          <div className="form-group mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className={`form-control ${error.number ? 'is-invalid' : ''}`}
            />
            {error.number && <div className="invalid-feedback">{error.number}</div>}
          </div>

          {/* GST Number Field */}
          <div className="form-group mb-3">
            <label className="form-label">GST Number</label>
            <input
              type="text"
              placeholder="Enter your GST number"
              value={gst}
              onChange={(e) => setGst(e.target.value)}
              className={`form-control ${error.gst ? 'is-invalid' : ''}`}
            />
            {error.gst && <div className="invalid-feedback">{error.gst}</div>}
          </div>

          {/* Aadhar Card Field */}
          <div className="form-group mb-3">
            <label className="form-label">Aadhar Card Number</label>
            <input
              type="text"
              placeholder="Enter your Aadhar card number"
              value={aadhar}
              onChange={(e) => setAadhar(e.target.value)}
              className={`form-control ${error.aadhar ? 'is-invalid' : ''}`}
            />
            {error.aadhar && <div className="invalid-feedback">{error.aadhar}</div>}
          </div>

          {/* PAN Card Field */}
          <div className="form-group mb-3">
            <label className="form-label">Pan Card Number</label>
            <input
              type="text"
              placeholder="Enter your Pan card number"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              className={`form-control ${error.pan ? 'is-invalid' : ''}`}
            />
            {error.pan && <div className="invalid-feedback">{error.pan}</div>}
          </div>

          <button type="submit" className="btn btn-primary btn-block">Register</button>
          <p className="text-center mt-3">Already Registered? <Link to="/">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SellerRegister;
