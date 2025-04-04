import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the localStorage or any session data
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("buyerId");
    localStorage.removeItem("orderId");
    localStorage.removeItem("addressid");
    localStorage.removeItem("userDetails_name"); // Remove any other user-specific data stored in localStorage
    // Redirect to login page
    navigate("/");
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
