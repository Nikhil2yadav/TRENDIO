import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    localStorage.removeItem("AdminId");
    localStorage.removeItem("AdminName");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    navigate('/'); // Redirect to login page after logout
  }, [logout, navigate]);

  return null; // No need to render anything
};

export default Logout;

