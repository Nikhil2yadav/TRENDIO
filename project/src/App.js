import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Home from './Admin/components/Dashboard/Home';
import Login from './Login/Login';

import Usersetting from './Admin/components/Setting/Usersetting';
import Addseller from './Admin/components/Seller/Addseller';
import ManageSeller from './Admin/components/Seller/ManageSeller';
import Profile from './Admin/components/Profile/Profile';
import Productwise from './Admin/components/Report/Productwise';
import Product from './Admin/components/Products/Product';
import SellerWise from './Admin/components/Report/SellerWise';
import Order from './Admin/components/Orders/Order';
import Logout from './Login/Logout';

import './App.css';
import { AuthProvider, useAuth } from './AuthContext';
import Adminlayout from './Admin/Admin Layout/Adminlayout';
import SellerLayout from './Seller/SellerLayout/SellerLayout';
import SellerHome from './Seller/Components/SellerDashboard/SellerHome';
import SellerLogout from './Seller/Components/SellerLogout.js/SellerLogout';
import SellerResgister from './Login/SellerResgister';
import Addproduct from './Seller/Components/Product/Addproduct';
import Manageproduct from './Seller/Components/Product/Manageproduct';
import SellerInfo from './Seller/Components/SellerInfo/SellerInfo';
import SellerSetting from './Seller/Components/Setting/SellerSetting';
import Showbuyer from './Admin/components/show buyer/Showbuyer';
import ForgetPassword from './Login/ForgetPassowrd';
import PendingOrder from './Seller/Components/SellerOrder/PendingOrder';
import OrderDetails from './Seller/Components/SellerOrder/OrderDetails';
import ShippingOrder from './Seller/Components/SellerOrder/ShippingOrder';
import ShippedOrder from './Seller/Components/SellerOrder/ShippedOrder';
import Outfordelivery from './Seller/Components/SellerOrder/Outfordelivery';
import OutfordeliveryDetail from './Seller/Components/SellerOrder/OutfordeliveryDetail';
import DeliveredOrder from './Seller/Components/SellerOrder/DeliveredOrder';
import DeliveredDetail from './Seller/Components/SellerOrder/DeliveredDetail';
import AddProductType from './Admin/components/Products/AddProductType';
import ContactAdmin from './Seller/Components/Contact/ContactAdmin';
import AdminReply from './Admin/components/Messages/AdminReply';
import Amount from './Admin/components/Amount/Amount';
import SellerAmount from './Seller/Components/SellerAmount/SellerAmount';
import Ratingfeedback from './Seller/Components/Feedback/Ratingfeedback';
import AddProductSize from './Admin/components/Products/AddProductSize';
import Productfeedback from './Admin/components/ProductFeedback/Productfeedback';
import SellerReports from './Admin/components/Report/SellerReports';
import ViewOrderHistory from './Admin/components/Orders/ViewOrderHistory';
import SellerReport from './Seller/Components/SellerReport/SellerReport';
function App() {
  return (
    <AuthProvider>
      <Router>
      <div className='app-container'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<SellerResgister/>}/>
          <Route path='ForgetPassword' element={<ForgetPassword/>}/>
          {/* <Route element={<ProtectedRoute />}> */}
          <Route path='/admin/*' element={<Adminlayout/>}>
          <Route path='Dashboard' element={<Home />} />
            <Route path='Addseller/:SellerId?' element={<Addseller />} />
            <Route path='Usersetting' element={<Usersetting />} />
            <Route path='ProductType' element={<AddProductType/>}/>
            <Route path='feedback' element={<Productfeedback/>}/>
            <Route path='buyer' element={<Showbuyer/>}/>
            <Route path='orders' element={<Order/>}/>
            <Route path='Manageseller' element={<ManageSeller />} />
            <Route path='Profile' element={<Profile />} />
            <Route path='Productwise' element={<Productwise />} />
            <Route path='Product' element={<Product />} />
            <Route path='Order' element={<Order />} />
            <Route path='SellerWise' element={<SellerWise />} />
            <Route path='Logout' element={<Logout />} />
            <Route path='Amount' element={<Amount/>}/>
            <Route path='AdminReply' element={<AdminReply/>}/>
            <Route path='ViewOrderHistory' element={<ViewOrderHistory/>}/>
            <Route path='sellerwisereport' element={<SellerReports/>}/>
            <Route path='Productsize' element={<AddProductSize/>}/>
          </Route>
           <Route path='/seller/*' element={<SellerLayout/>}>
            <Route path='SellerHome' element={<SellerHome/>}/>
            <Route path='Profile' element={<SellerInfo/>}/>
            <Route path='setting' element={<SellerSetting/>}/>
            <Route path='Addproduct/:ProductId?' element={<Addproduct/>}/>
            <Route path='Manageproduct' element={<Manageproduct/>}/>
            <Route path='SellerLogout' element={<SellerLogout/>}/>
            <Route path='PendingOrder' element={<PendingOrder/>}/>
            <Route path='OrderDetails/:orderDetailId' element={<OrderDetails/>}/>
            <Route path='ShipingOrder' element={<ShippingOrder/>}/>
            <Route path='ShippedOrder/:orderDetailId' element={<ShippedOrder/>}/>
            <Route path='Out-for-Delivery' element={<Outfordelivery/>}/>
            <Route path='OutfordeliveryDetail/:orderDetailId' element={<OutfordeliveryDetail/>}/>
            <Route path='DeliveredOrder' element={<DeliveredOrder/>}/>
            <Route path='DeliveredDetail/:orderDetailId' element={<DeliveredDetail/>}/>
            <Route path='ContactAdmin' element={<ContactAdmin/>}/>
            <Route path='Amount' element={<SellerAmount/>}/>
            <Route path='sellerReport' element={<SellerReport/>}/>
            <Route path='feedback'element={<Ratingfeedback/>}/>
           </Route> 
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
    </AuthProvider>
    
  );
}



export default App;








































































