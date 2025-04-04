import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/New/Navbar';
import Home from './Components/New/Home';
import Footer from './Components/New/Footer';
import SignInSignUp from './Login/SignInSignUp';
import About from './Components/About/About';
import Product from './Components/Product/Product';
import ContactUs from './Components/ContactUs/ContactUs';
import SearchResults from './Components/Product/SearchResults';
import SingleProduct from './Components/Product/SingleProduct';
import Logout from './Login/Logout';
import Addtocart from './Components/Addtocart/Addtocart';
import Checkout from './Components/Checkout/Checkout';
import ForgetPassword from './Login/ForgetPassword';
import Payment from './Components/Order/Payment';
import OrderSuccessPage from './Components/Order/OrderSuccessPage';
import Ordersproduct from './Components/Order/Orderproduct';
import BuyerProfile from './Components/BuyerProfile/BuyerProfile';
// Create a layout component for pages that require Navbar and Footer
function LayoutWithNavbarFooter({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Pages with Navbar and Footer */}
      <Route path="/" element={<LayoutWithNavbarFooter><Home /></LayoutWithNavbarFooter>} />
      <Route path="/about" element={<LayoutWithNavbarFooter><About /></LayoutWithNavbarFooter>} />
      <Route path="/product" element={<LayoutWithNavbarFooter><Product /></LayoutWithNavbarFooter>} />
      <Route path="/search" element={<LayoutWithNavbarFooter><SearchResults /></LayoutWithNavbarFooter>} />
      <Route path="/product/:productId" element={<LayoutWithNavbarFooter><SingleProduct /></LayoutWithNavbarFooter>} />
      <Route path="/Checkout/:addressid" element={<LayoutWithNavbarFooter><Checkout /></LayoutWithNavbarFooter>} />
      <Route path="/contact" element={<LayoutWithNavbarFooter><ContactUs /></LayoutWithNavbarFooter>} />
      <Route path="/logout" element={<LayoutWithNavbarFooter><Logout /></LayoutWithNavbarFooter>} />
      <Route path="/addtocart" element={<LayoutWithNavbarFooter><Addtocart /></LayoutWithNavbarFooter>} />
      <Route path='/Checkout' element={<LayoutWithNavbarFooter><Checkout/></LayoutWithNavbarFooter>}/>
      <Route path='/payment' element={<LayoutWithNavbarFooter><Payment/></LayoutWithNavbarFooter>}/>
      <Route path='/orderproduct' element={<LayoutWithNavbarFooter><Ordersproduct/></LayoutWithNavbarFooter>}/>
      <Route path='/BuyerProfile' element={<LayoutWithNavbarFooter><BuyerProfile/></LayoutWithNavbarFooter>}/>
      {/* Page without Navbar and Footer (Login Page) */}
      <Route path="/Login" element={<SignInSignUp />} />
      <Route path="/forgetpassword" element={<ForgetPassword/>}/>
      <Route path='/order-success' element={<OrderSuccessPage/>}/>
    </Routes>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
