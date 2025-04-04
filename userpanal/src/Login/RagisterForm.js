
// import React, { useState } from 'react';
// import './SignInSignUp.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const RagisterForm = ({ onSuccess }) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [number, setNumber] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         // Basic validation: check if fields are empty
//         if (!name || !email || !password || !number) {
//             setError('All fields are required.');
//             return; // Stop form submission if validation fails
//         }

//         const formData = new FormData();
//         formData.append('Name', name);
//         formData.append('Email', email);
//         formData.append('Password', password);
//         formData.append('Number', number);

//         try {
//             const response = await axios.post('http://localhost:8080/college%20project/mini%20project/api/BuyerApi.php', formData);
//             const data = response.data;
//             console.log(response.data);

//             if (data.Buyer === 'true') {
//                 // On successful registration, switch to the login form and reset fields
//                 onSuccess();
//                 localStorage.setItem('isLoggedIn', 'true');
//                 // localStorage.setItem('buyerId',data.Data[0]['0'])
//                 // localStorage.setItem('userDetails_name',data.Data[0]['1'])
            
//                 navigate('/login'); // Redirect after registration
                
//             }
//             else {
//                 setError(data.Message || 'Registration failed. Please try again.');
//             }
//         } catch (error) {
//             console.error("API call error:", error);
//             setError(error.response?.data?.message || 'An error occurred during registration.');
//         }
//     };

//     return (
//         <form className="sign-up-form" onSubmit={handleSubmit}>
//             {error && <div className="alert alert-danger">{error}</div>}
//             <h2 className="title">Sign Up</h2>
//             <div className="input-field">
//                 <i className="fas fa-user"></i>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//             </div>
//             <div className="input-field">
//                 <i className="fas fa-envelope"></i>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//             </div>
//             <div className="input-field">
//                 <i className="fas fa-lock"></i>
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </div>
//             <div className="input-field">
//                 <i className="fa fa-phone"></i>
//                 <input
//                     type="text"
//                     placeholder="Number"
//                     value={number}
//                     onChange={(e) => setNumber(e.target.value)}
//                 />
//             </div>
//             <button type="submit" className="btn btn-outline-primary">Sign Up</button>
//         </form>
//     );
// };

// export default RagisterForm;
import React, { useState } from 'react';
import './SignInSignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RagisterForm = ({ onSuccess }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Basic validation: check if fields are empty
        if (!name || !email || !password || !number) {
            setError('All fields are required.');
            return; // Stop form submission if validation fails
        }

        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Email', email);
        formData.append('Password', password);
        formData.append('Number', number);

        try {
            const response = await axios.post('http://localhost:8080/college%20project/mini%20project/api/BuyerApi.php', formData);
            const data = response.data;
            console.log(response.data);

            if (data.Buyer === 'true') {
                // On successful registration, switch to the login form and reset fields
                onSuccess();
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/login'); // Redirect after registration
                
            } else if (data.error === 'Email already exists') {
                setError('Email already exists. Please use a different email.');
            } else {
                setError(data.Message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.error("API call error:", error);
            setError(error.response?.data?.error || 'An error occurred during registration.');
        }
    };

    return (
        <form className="sign-up-form" onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                    type="text"
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                    type="email"
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
            <div className="input-field">
                <i className="fa fa-phone"></i>
                <input
                    type="text"
                    placeholder="Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-outline-primary">Sign Up</button>
        </form>
    );
};

export default RagisterForm;
