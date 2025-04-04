
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBoxes, faFileAlt, faStore, faSignOutAlt, faRefresh, faTruck, faList, faChartBar, faComments } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SellerSidebar = () => {
  const [store, setStore] = useState();

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setStore(name);
    }
  }, []);

  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/seller/SellerHome" className="brand-link">
          <span className="brand-text font-weight-light">{store}</span>
        </Link>

        <div className="sidebar">
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item">
                <Link to="/seller/SellerHome" className='nav-link'>
                  <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                  <p>Dashboard</p>
                </Link>
              </li>
              
              {/* Products Section */}
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <FontAwesomeIcon icon={faBoxes} className="nav-icon" />
                  <p>
                    Products
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/seller/Addproduct" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Add Product</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/seller/Manageproduct" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Manage Products</p>
                    </Link>
                  </li>
                </ul>
              </li>
              
              {/* Orders Section */}
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <FontAwesomeIcon icon={faList} className="nav-icon" />
                  <p>
                    Orders
                    <i className="fas fa-angle-left right" />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/seller/PendingOrder" className="nav-link">
                      <FontAwesomeIcon icon={faTruck} className="nav-icon" />
                      <p>Pending Orders</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/seller/ShipingOrder" className="nav-link">
                      <FontAwesomeIcon icon={faTruck} className="nav-icon" />
                      <p>Shipping Orders</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/seller/Out-for-Delivery" className="nav-link">
                      <FontAwesomeIcon icon={faTruck} className="nav-icon" />
                      <p>Out for Delivery</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/seller/DeliveredOrder" className="nav-link">
                      <FontAwesomeIcon icon={faTruck} className="nav-icon" />
                      <p>Delivered Orders</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/seller/ContactAdmin" className="nav-link">
                  <FontAwesomeIcon icon={faStore} className="nav-icon" />
                  <p>Request</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/seller/sellerReport" className="nav-link">
                  <FontAwesomeIcon icon={faChartBar} className="nav-icon" />
                  <p>Reports</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/seller/feedback" className="nav-link">
                  <FontAwesomeIcon icon={faComments} className="nav-icon" />
                  <p>Buyers Feedback</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/seller/Profile' className="nav-link">
                  <FontAwesomeIcon icon={faFileAlt} className="nav-icon" />
                  <p>Profile</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/seller/setting" className="nav-link">
                  <FontAwesomeIcon icon={faRefresh} className="nav-icon" />
                  <p>Update Profile</p>
                </Link>
              </li>
             
              <li className="nav-item">
                <Link to="/seller/SellerLogout" className="nav-link">
                  <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" />
                  <p>Logout</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default SellerSidebar;
