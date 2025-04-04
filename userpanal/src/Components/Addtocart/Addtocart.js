
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInr } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';

const CartPage = () => {
  const navigate=useNavigate();
  const [cartItems, setCartItems] = useState([]);
  

  const handleQuantityChange = (addtocartid, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.addtocartid === addtocartid ? { ...item, quantity: Math.max(quantity, 1) } : item
    );
    setCartItems(updatedCart);
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      const buyerID = localStorage.getItem('buyerId');

      if (!buyerID) {
        console.error('BuyerId not found in localStorage');
        return;
      }

      try {
        const response = await axios.post(
          'http://localhost:8080/college%20project/mini%20project/api/getAddtocartproductaccrodingtobuyer.php',
          new URLSearchParams({ BuyerId: buyerID }),
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        setCartItems(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (addtocartid) => {
    try {
      // const formData = new URLSearchParams();
      // formData.append('addtocartid', addtocartid);

      await axios.get(`http://localhost:8080/college%20project/mini%20project/api/Deleteaddtocart.php?addtocartid=${addtocartid}`, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      const updatedCart = cartItems.filter((item) => item.addtocartid !== addtocartid);
      setCartItems(updatedCart);
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
  // const shipping = 10;
  const total = subtotal ;

  const handleCheckoutClick = () => {
    navigate("/Checkout");
  };
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Your Cart</h1>
      <div className="row">
        <div className="col-lg-8">
          {cartItems.length === 0 ? (
            <div className="card p-4 text-center">
              <p className="h4">Your cart is empty</p>
              <Link to="/" className="btn btn-primary p-0 mt-3">Continue Shopping</Link>
            </div>
          ) : (
            <ul className="list-group mb-4">
              {cartItems.map((item) => (
                <li key={item.addtocartid} className="list-group-item d-flex align-items-center">
                  <img
                    src={`http://localhost:8080/college%20project/mini%20project/api/Images/${item.ProductImage}`}
                    alt={item.ProductName}
                    className="img-thumbnail"
                    style={{ width: '100px', height: '100px' }}
                  />
                  <div className="flex-grow-1 ml-3 text-center">
                    <h5>{item.ProductName}</h5>
                    <p className="text-muted text-center">
                      <FontAwesomeIcon icon={faInr} />{(Number(item.price) || 0).toFixed(2)}
                      <p>{item.Size}</p>
                    </p>
                    <div className="input-group m-2">
                      <Form.Control
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.addtocartid, parseInt(e.target.value))}
                        style={{ maxWidth: '60px', height: '50px', alignItems: 'center' }}
                      />
                    </div>
                    
                  </div>
                  <button className="btn btn-danger ml-3" onClick={() => handleRemoveItem(item.addtocartid)}>
                    <Trash2 />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Order Summary</h4>
              <p className="d-flex justify-content-between">
                <span>Subtotal:</span> <span><FontAwesomeIcon icon={faInr} />{subtotal.toFixed(2)}</span>
              </p>
              {/* <p className="d-flex justify-content-between">
                <span>Shipping:</span> <span><FontAwesomeIcon icon={faInr} />{shipping.toFixed(2)}</span>
              </p> */}
              <hr />
              <p className="d-flex justify-content-between font-weight-bold">
                <span>Total:</span> <span><FontAwesomeIcon icon={faInr} />{total.toFixed(2)}</span>
              </p>
              <button className="btn btn-outline-success btn-block p-0 mt-4" onClick={handleCheckoutClick}>
                Proceed to Checkout
              </button>
            </div>
            
          </div>
          <div className="text-center mt-3">         
          <Link to="/product" className="text-primary">Continue Shopping</Link>
           </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default CartPage;
