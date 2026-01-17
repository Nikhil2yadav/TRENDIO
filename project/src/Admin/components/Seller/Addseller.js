import React, { useMemo, useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from 'react-toastify';

const Addseller = () => {
  const [sellers,setSellers]=useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const loginId = localStorage.getItem('AdminId'); // Get loginId from localStorage
  const navegate=useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/approvedseller.php');
        console.log('API Response:', response.data);  // Log API response for debugging
        setData(response.data);
        // console.log("helo",data)
      } catch (err) {
        console.error('Error fetching data:', err);  // Log the error
        setError(err);  // Store the error in state
      }
    };

    fetchData();
  }, []);
  const deleteSeller = async (SellerId) => {
    const confirmed = window.confirm('Are you sure you want to delete this seller?');
    if (confirmed) {
      try {
        await axios.get(`http://localhost:8000/api/DeleteSeller.php?SellerId=${SellerId}`);
        setSellers(sellers.filter(seller => seller.SellerId !== SellerId));
        toast.success('Seller deleted successfully', {
          className: "toastifycontainer",
          autoClose: false
        });
      navegate("/admin/Manageseller");

      } catch (error) {
        console.error("Error deleting seller:", error);
        toast.error('Error deleting seller');
      }
    }
  };
  const approveSeller = async (SellerId) => {
    try {
      console.log('Sending data to API:', { SellerId, loginId }); // Log the data to be sent for debugging

      const response = await axios.post(
        'http://localhost:8000/api/approverSellertosell.php', 
        new URLSearchParams({
          SellerId: SellerId,  // Explicitly set the keys
          loginId: loginId,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      console.log(response.data);
      navegate("/admin/Manageseller");

      
      console.log('Approving SellerId:', SellerId);
      console.log('API Response:', response.data);

      // Update the data state to reflect the approved status
      setData(prevData => 
        prevData.map(seller => 
          seller.SellerId === SellerId ? { ...seller, Status: 'approved' } : seller
        )
      );
    } catch (err) {
      console.error('Error approving seller:', err);
    }
  };

  const columns = useMemo(() => [
    {
      name: 'Name',
      selector: row => row.Name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.Email,
      sortable: true,
    },
    {
      name: 'Phone No.',
      selector: row => row.Number,
      sortable: true,
    },
    {
      name: 'Aadhar Card Number',
      selector: row => row.Aadhar_Card_Number,
      sortable: true,
    },
    {
      name: 'GST Number',
      selector: row => row.GST_Number,
      sortable: true,
    },
    {
      name: 'Status',
      cell: row => (
        <div>
          <button className='btn btn-outline-danger' onClick={()=>deleteSeller(row.SellerId)}>Deny</button>
          <button 
            className='btn btn-outline-success' 
            onClick={() => approveSeller(row.SellerId)} // Handle approval
          >
            Approve
          </button>
        </div>
      ),
    },
  ], []);

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className='content-wrapper'>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Seller</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><Link to="/admin/Dashboard"><FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />Home</Link></li>
                <li className="breadcrumb-item active">Seller</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='card'>
          <h4 className='card-header'>Seller</h4>
          <div className='card-body'>
            <DataTable
              columns={columns}
              data={data}
              pagination
              defaultSortFieldId={1}
              responsive
            />
          </div>
        </div>
        <ToastContainer />

      </div>
    </div>
  );
};

export default Addseller;
