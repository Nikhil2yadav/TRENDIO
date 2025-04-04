import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BuyerProfile = () => {
  const [buyerdata, setBuyerData] = useState({});
  const [editableData, setEditableData] = useState({ Name: '', Email: '', Number: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOption, setSelectedOption] = useState('personal');
  const [passwordData, setPasswordData] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });

  const BuyerId = localStorage.getItem("buyerId");

  useEffect(() => {
    fetchBuyerData();
  }, []);

  const handleEditClick = (e) => {
    e.preventDefault(); // Prevent page reload
    setIsEditing(true);
  };
  
  const fetchBuyerData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/college%20project/mini%20project/api/GetSingleBuyerProfile.php",
        { BuyerId },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
      const data = response.data[0];
      setBuyerData(data);
      setEditableData({
        Name: data.Name || '',
        Email: data.Email || '',
        Number: data.Number || ''
      });
    } catch (error) {
      console.error("Error fetching buyer data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
    const response=  await axios.post(
        "http://localhost:8080/college%20project/mini%20project/api/UpdateBuyerProfile.php",
        { ...editableData, BuyerId },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
      if(response.data.success === 'true'){
        toast.success("Profile updated successfully!");
        setIsEditing(false);
        fetchBuyerData();
      }
      else{
        // console.log(response.data.error)
        toast.error(response.data.error);
        return;
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = passwordData;

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/college%20project/mini%20project/api/UpdateBuyerPassword.php",
        new URLSearchParams({
          BuyerId,
          current_password: currentPassword,
          NewPassword: newPassword
        }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );

      if (response.data.Updated === "true") {
        toast.success("Password updated successfully!");
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      } else {
        toast.error(response.data.error || "Failed to update password");
      }
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <h3>Settings</h3>
          <ul className="list-group">
            <li
              className={`list-group-item ${selectedOption === 'personal' && 'active'}`}
              onClick={() => setSelectedOption('personal')}
            >
              Personal Information
            </li>
            <li
              className={`list-group-item ${selectedOption === 'password' && 'active'}`}
              onClick={() => setSelectedOption('password')}
            >
              Update Password
            </li>
          </ul>
        </div>

        <div className="col-md-8">
          {selectedOption === 'personal' ? (
            <form onSubmit={handleProfileUpdate}>
              <h3>Personal Information</h3>
              <div className="mb-3 w-50">
                <label>Name</label>
                <input type="text" className="form-control" name="Name" value={editableData.Name} onChange={handleInputChange} disabled={!isEditing} />
              </div>
              <div className="mb-3 w-50">
                <label>Email</label>
                <input type="email" className="form-control" name="Email" value={editableData.Email} onChange={handleInputChange} disabled={!isEditing} />
              </div>
              <div className="mb-3 w-50">
                <label>Number</label>
                <input type="text" className="form-control" name="Number" value={editableData.Number} onChange={handleInputChange} disabled={!isEditing} />
              </div>
              {isEditing ? (
                <button type="submit" className="btn btn-success w-50">Save Changes</button>
              ) : (
                <button
  type="button"
  className="btn btn-primary w-50"
  onClick={handleEditClick}
>
  Update
</button>


              )}
            </form>
          ) : (
            <form onSubmit={handleChangePassword}>
              <h3>Update Password</h3>
              <div className="mb-3 w-50">
                <label>Current Password</label>
                <input type="password" className="form-control" name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordChange} required />
              </div>
              <div className="mb-3 w-50">
                <label>New Password</label>
                <input type="password" className="form-control" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} required />
              </div>
              <div className="mb-3 w-50">
                <label>Confirm New Password</label>
                <input type="password" className="form-control" name="confirmPassword" value={passwordData.confirmPassword} onChange={handlePasswordChange} required />
              </div>
              <button type="submit" className="btn btn-success w-50">Update Password</button>
            </form>
          )}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default BuyerProfile;
