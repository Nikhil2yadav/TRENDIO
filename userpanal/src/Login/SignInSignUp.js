// import Logimage from "./log.svg";
// import Register from "./register.svg";
// import React, { useState } from 'react';
// import './SignInSignUp.css'; // Import the CSS file
// import RagisterForm from "./RagisterForm";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const SignInSignUp = () => {
//     const [isSignUp, setIsSignUp] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleToggle = () => {
//         setIsSignUp(!isSignUp);
//     };

//     const handleSwitchToSignIn = () => {
//         setIsSignUp(false);
//     };

//     const handleformdata = async (event) => {
//         event.preventDefault();

//         // Basic validation: check if fields are empty
//         if (!email || !password) {
//             setError('Both email and password are required.');
//             return; // Stop submission if validation fails
//         }

//         const formData = new FormData();
//         formData.append('Email', email);
//         formData.append('Password', password);

//         try {
//             const response = await axios.post('http://localhost:8000/api/BuyerLoginApi.php', formData);
//             const data = response.data;
//             console.log(data.Buyer)
//             console.log(data);
//             //  console.log(data.Data[0]['1'])
           
//             if (data.Buyer === 'true') {
//                 // Redirect on successful login
//                 localStorage.setItem('isLoggedIn', 'true');
//                 localStorage.setItem('buyerId',data.Data['0'])
//                  localStorage.setItem('userDetails_name',data.Data['1'])
//                  console.log(data.Data['1'])
                 
//                 navigate('/');
//             }
//             else if (data.Buyer.trim().toLowerCase() === 'inactivestatus') {
//                 // setError("Contact your admin to activate your account. Your account has been deactivated by an admin. Admin email: Admin@gmail.com");
//                 // alert("Your account is deactivated! Contact Admin@gmail.com"); 
//                 toast.warning("Your account is deactivated! Contact Admin@gmail.com");
//             }
            
//             else {
//                 setError(data.Message || 'Login failed. Please check your credentials.');
//             }
//             // console.log(data.Buyer)

//         } catch (error) {
//             console.error("API call error:", error);
//             setError(error.response?.data?.message || 'An error occurred during login.');
//         }
//     };

//     return (
//         <div className={`containerr ${isSignUp ? 'sign-up-mode' : ''}`}>
//             <div className="forms-container">
//                 <div className="signin-signup">
//                     <form className="sign-in-form" onSubmit={handleformdata}>
//                         <h2 className="title">Sign In</h2>
//                         {error && <div className="alert alert-danger">{error}</div>}
//                         <div className="input-field">
//                             <i className="fas fa-user"></i>
//                             <input
//                                 type="text"
//                                 placeholder="Email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <div className="input-field">
//                             <i className="fas fa-lock"></i>
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </div>
//                         <button type="submit" className="btn btn-outline-primary">Sign In</button>
//                     </form>
//                     <RagisterForm onSuccess={handleSwitchToSignIn} />
//                 </div>
//             </div>
//             <div className="panels-container">
//                 <div className="panel left-panel">
//                     <div className="content">
//                         <h3>New here?</h3>
//                         <p>Sign up and discover amazing Products according to your looks!</p>
//                         <button className="btn btn-outline-info text-white" onClick={handleToggle}>Sign Up</button>
//                     </div>
//                     <img src={Logimage} className="image" alt="Sign Up" />
//                 </div>
//                 <div className="panel right-panel">
//                     <div className="content">
//                         <h3>One of us?</h3>
//                         <p>If you already have an account, just sign in!</p>
//                         <button className="btn btn-outline-info text-white" onClick={handleToggle}>Sign In</button>
//                     </div>
//                     <img src={Register} className="image" alt="Sign In" />
//                 </div>
//             </div>
//             <ToastContainer/>
//         </div>
//     );
// };

// export default SignInSignUp;
import Logimage from "./log.svg";
import Register from "./register.svg";
import React, { useState } from 'react';
import './SignInSignUp.css'; // Import the CSS file
import RagisterForm from "./RagisterForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignInSignUp = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
    };

    const handleSwitchToSignIn = () => {
        setIsSignUp(false);
    };

    const handleformdata = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            setError('Both email and password are required.');
            return;
        }

        const formData = new FormData();
        formData.append('Email', email);
        formData.append('Password', password);

        try {
            const response = await axios.post('http://localhost:8000/api/BuyerLoginApi.php', formData);
            const data = response.data;

            if (data.Buyer === 'true') {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('buyerId', data.Data['0']);
                localStorage.setItem('userDetails_name', data.Data['1']);
                navigate('/');
            } else if (data.Buyer.trim().toLowerCase() === 'inactivestatus') {
                toast.warning("Your account is deactivated! Contact Admin@gmail.com");
            } else {
                setError(data.Message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error("API call error:", error);
            setError(error.response?.data?.message || 'An error occurred during login.');
        }
    };

    return (
        <div className={`containerr ${isSignUp ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form" onSubmit={handleformdata}>
                        <h2 className="title">Sign In</h2>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* ✅ Added Forgot Password Button */}
                        {/* <button
                            type="button"
                            className=""
                            onClick={() => navigate('/forgot-password')}
                        >
                            Forgot Password?
                        </button> */}
                        
                            <p
                                className="text-primary text-right cursor-pointer"
                                onClick={() => navigate('/forgetpassword/')}
                            >
                                Forgot Password?
                            </p>
                        
                        <button type="submit" className="btn btn-outline-primary">Sign In</button>
                    </form>
                    <RagisterForm onSuccess={handleSwitchToSignIn} />
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <p>Sign up and discover amazing Products according to your looks!</p>
                        <button className="btn btn-outline-info text-white" onClick={handleToggle}>Sign Up</button>
                    </div>
                    <img src={Logimage} className="image" alt="Sign Up" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us?</h3>
                        <p>If you already have an account, just sign in!</p>
                        <button className="btn btn-outline-info text-white" onClick={handleToggle}>Sign In</button>
                    </div>
                    <img src={Register} className="image" alt="Sign In" />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignInSignUp;
