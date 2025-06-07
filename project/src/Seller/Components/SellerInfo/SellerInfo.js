import React ,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
const SellerInfo = () => {
  const [user, setUser] = useState(null);
  const SellerId=localStorage.getItem('userId');
  console.log(SellerId);
  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const response = await axios.post('http://treandio.rf.gd/api/GetSingleSellerdata.php',{SellerId:SellerId},{
          
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' } 
           
        });
        console.log(response.data);
        setUser(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  },[])
  if(!user){
    return <div>Loading...</div>
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
                  <Link to="/seller/SellerHome">
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
          <h3>Seller Profile</h3>
          <hr></hr>
          <table className="table table-bordered">
            <tbody>

              <tr>
                <td>Name:</td>
                <td>{user.Name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{user.Email}</td>
              </tr>
              <tr>
                <td>Number:</td>
                <td>{user.Number}</td>
              </tr>
              <tr>
                <td>Aadhar Card Number:</td>
                <td>{user.Aadhar_Card_Number}</td>
              </tr>
              <tr>
                <td>Pan Card Number:</td>
                <td>{user.Pan_Card_Number}</td>
              </tr>
              <tr>
                <td>GST Number</td>
                <td>{user.GST_Number}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default SellerInfo
