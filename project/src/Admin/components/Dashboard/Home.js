// import React, {useState,useEffect} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
// import { FaRupeeSign, FaShoppingCart } from 'react-icons/fa'
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// export default function Home() {
//   const [totalproduct,setTotalproduct] = useState('');
//   const [totalseller,setTotalseller]=useState('');
//   const [totalbuyer,setTotalbuyer]=useState('');
//   const [totalOrders, setTotalOrders] = useState('');
//   const [totalamount,setTotalamount]=useState('');

//   useEffect(() => {
//     const totalnumberProduct =async()=>{
//       try{
//         const response=await axios.post('http://localhost:8080/college%20project/mini%20project/api/totalProductcount.php'

//       );
        
//         setTotalproduct(response.data.totalproduct);
//         console.log(response.data);

//       }catch(error){
//         console.error('Error fetching products:', error);
//         toast.error('Error fetching products');
//       }
//     }
//     totalnumberProduct();
//   }, [])
//   useEffect(()=>{
//     const totalbuyer=async()=>{
//       try {
//         const response = await axios.post('http://localhost:8080/college%20project/mini%20project/api/Buyercount.php')
//         setTotalbuyer(response.data.totalbuyer);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         toast.error('Error fetching products');
//       }
//     }
//     totalbuyer();
//   },[])
//   useEffect(()=>{
//     const Totalseller=async()=>{
//       try {
//         const response = await axios.post('http://localhost:8080/college%20project/mini%20project/api/totalSeller.php');
//         setTotalseller(response.data.totalseller);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching seller:', error);
//         toast.error('Error fetching seller');
//       }
//     }
//     Totalseller();
//   })
//   useEffect(()=>{
//     const Totalamount=async()=>{
//       try {
//         const response = await axios.post('http://localhost:8080/college%20project/mini%20project/api/getTotalAmountOfAdmin.php');
//         setTotalamount(response.data.totalAdminAmount);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching seller:', error);
//         toast.error('Error fetching seller');
//       }
//     }
//     Totalamount();
//   })
//   useEffect(()=>{
//     const Totalorder=async()=>{
//       try {
//         const response = await axios.post('http://localhost:8080/college%20project/mini%20project/api/TotalOrderApi.php');
//         setTotalOrders(response.data.totalorder);
//         console.log(totalOrders)
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching seller:', error);
//         toast.error('Error fetching seller');
//       }
//     }
//     Totalorder();
//   })
//   const AmountBox = ({ totalamount }) => {
//     const formattedAmount = parseFloat(totalamount).toFixed(2); 
//   return (
//     <div className="content-wrapper">
//       {/* Content Header (Page header) */}
//       <div className="content-header">
//         <div className="container-fluid">
//           <div className="row mb-2">
//             <div className="col-sm-6">
//               <h1 className="m-0 text-dark">Dashboard</h1>
//             </div>{/* /.col */}
//             <div className="col-sm-6">
//               <ol className="breadcrumb float-sm-right">
//                 <li className="breadcrumb-item">
//                   <Link to="/Dashboard">
//                     <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
//                     Home
//                   </Link>
//                 </li>
//                 <li className="breadcrumb-item active">Dashboard</li>
//               </ol>
//             </div>{/* /.col */}
//           </div>{/* /.row */}
//         </div>{/* /.container-fluid */}
//       </div>
//       {/* /.content-header */}
//       {/* Main content */}
//       <section className="content">
//         <div className="container-fluid">
//           {/* Small boxes (Stat box) */}
//           <div className="row">
//             <div className="col-lg-4 col-6">
//               {/* small box */}
//               <div className="small-box bg-info">
//                 <div className="inner">
//                   <h3>{totalproduct}</h3>
//                   <p>Total Products</p>
//                 </div>
//                 <div className="icon">
//                   <i className="ion ion-bag" />
//                 </div>
//                 <Link to="/admin/Product" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
//               </div>
//             </div>
//             {/* ./col */}
              
//             {/* ./col */}
//             <div className="col-lg-4 col-6">
//               {/* small box */}
//               <div className="small-box bg-warning">
//                 <div className="inner">
//                   <h3>{totalseller}</h3>
//                   <p>Total Seller</p>
//                 </div>
//                 <div className="icon">
//                   <i className="ion ion-person-add" />
//                 </div>
//                 <Link to="/admin/Manageseller" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
//               </div>
//             </div>
//             <div className="col-lg-4 col-6">
//               {/* small box */}
//               <div className="small-box bg-success">
//                 <div className="inner">
//                   <h3>{totalbuyer}</h3>
//                   <p>Total Buyer</p>
//                 </div>
//                 <div className="icon">
//                   <i className="ion ion-stats-bars" />
//                 </div>
//                 <Link to="/admin/buyer" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
//               </div>
//             </div>
            
//             <div className="col-lg-4 col-6">
//       {/* Small Box */}
//       <div className="small-box bg-warning"> {/* Changed color to yellow-orange */}
//         <div className="inner">
//           <h3>{totalOrders}</h3>
//           <p>Total Orders</p>
//         </div>
//         <div className="icon">
//           <FaShoppingCart size={50}  /> {/* Updated icon */}
//         </div>
//         <Link to="/admin/orders" className="small-box-footer">
//           More info <i className="fas fa-arrow-circle-right" />
//         </Link>
//       </div>
      
//     </div>
//     <div className="col-lg-4 col-6">
//       {/* Small Box */}
//       <div className="small-box" style={{ backgroundColor: '#00b894', color: 'white' }}> {/* Changed color to yellow-orange */}
//         <div className="inner">
//           <h3>{formattedAmount}</h3>
//           <p>Total Amount</p>
//         </div>
//         <div className="icon">
//         <FaRupeeSign size={50} /> {/* Updated icon */}
//         </div>
//         <Link to="/admin/Amount" className="small-box-footer">
//           More info <i className="fas fa-arrow-circle-right" />
//         </Link>
//       </div>
      
//     </div>
//             {/* ./col */}
//           </div>
//         </div>{/* /.container-fluid */}
//       </section>
//       {/* /.content */}
//     </div>
//   );
// }
// }
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { FaRupeeSign, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Home() {
  const [totalProduct, setTotalProduct] = useState('');
  const [totalSeller, setTotalSeller] = useState('');
  const [totalBuyer, setTotalBuyer] = useState('');
  const [totalOrders, setTotalOrders] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const fetchData = async (url, setState, errorMessage) => {
    try {
      const response = await axios.post(url);
      setState(response.data);
    } catch (error) {
      console.error(errorMessage, error);
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    fetchData('http://localhost:8080/college%20project/mini%20project/api/totalProductcount.php', (data) => setTotalProduct(data.totalproduct), 'Error fetching products');
  }, []);

  useEffect(() => {
    fetchData('http://localhost:8080/college%20project/mini%20project/api/Buyercount.php', (data) => setTotalBuyer(data.totalbuyer), 'Error fetching buyers');
  }, []);

  useEffect(() => {
    fetchData('http://localhost:8080/college%20project/mini%20project/api/totalSeller.php', (data) => setTotalSeller(data.totalseller), 'Error fetching sellers');
  }, []);

  useEffect(() => {
    fetchData('http://localhost:8080/college%20project/mini%20project/api/getTotalAmountOfAdmin.php', (data) => setTotalAmount(data.totalAdminAmount), 'Error fetching amount');
  }, []);

  useEffect(() => {
    fetchData('http://localhost:8080/college%20project/mini%20project/api/TotalOrderApi.php', (data) => setTotalOrders(data.totalorder), 'Error fetching orders');
  }, []);

  const formattedAmount = parseFloat(totalAmount).toFixed(2);

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/admin/Dashboard">
                    <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-6">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>{totalProduct}</h3>
                  <p> Products</p>
                  <div className="icon">
                   <i className="ion ion-bag" />
               </div>
                </div>
                <Link to="/admin/Product" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
              </div>
            </div>

            <div className="col-lg-4 col-6">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>{totalSeller}</h3>
                  <p> Seller</p>
                </div>
                <div className="icon">
                   <i className="ion ion-person-add" />
                 </div>
                <Link to="/admin/Manageseller" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
              </div>
            </div>

            <div className="col-lg-4 col-6">
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>{totalBuyer}</h3>
                  <p> Buyer</p>
                </div>
                <div className="icon">
                   <i className="ion ion-stats-bars" />
                 </div>
                <Link to="/admin/buyer" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
              </div>
            </div>

            <div className="col-lg-4 col-6">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>{totalOrders}</h3>
                  <p> Orders</p>
                </div>
                <div className="icon">
           <FaShoppingCart size={50}  /> {/* Updated icon */}
         </div>
                <Link to="/admin/orders" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
              </div>
            </div>

            <div className="col-lg-4 col-6">
              <div className="small-box" style={{ backgroundColor: '#00b894', color: 'white' }}>
                <div className="inner">
                  <h3>{formattedAmount}</h3>
                  <p>Salary</p>
                </div>
                <div className='icon'>
                <FaRupeeSign size={50} />
                </div>
                <Link to="/admin/Amount" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
