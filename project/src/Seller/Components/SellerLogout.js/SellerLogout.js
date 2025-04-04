import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../AuthContext'; 

const SellerLogout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate('/'); // Redirect to login page after logout
  }, [logout, navigate]);

  return null; // No need to render anything
};

export default SellerLogout;


