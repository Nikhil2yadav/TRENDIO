import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faUserCheck,
  faUsers,
  faClipboardList,
  faBoxes,
  faShoppingCart,
  faUserTie,
  faCogs,
  faKey,
  faSignOutAlt,
  faCommentAlt,
  faBoxOpen,
  faTags,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const [store, setStore] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('AdminName');
    if (name) {
      setStore(name);
    }
  }, []);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/admin/Dashboard" className="brand-link">
        <span className="brand-text font-weight-light">{store}</span>
      </Link>

      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Dashboard */}
            <li className="nav-item">
              <Link to="/admin/Dashboard" className="nav-link active">
                <FontAwesomeIcon icon={faTachometerAlt} className="nav-icon" />
                <p>Dashboard</p>
              </Link>
            </li>

            {/* Sellers */}
            <li className="nav-item has-treeview">
              <Link to="#" className="nav-link">
                <FontAwesomeIcon icon={faUsers} className="nav-icon" />
                <p>
                  Sellers
                  <i className="fas fa-angle-left right" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/admin/Addseller" className="nav-link">
                    <FontAwesomeIcon icon={faUserCheck} className="nav-icon" />
                    <p>Approve/Deny Seller</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/Manageseller" className="nav-link">
                    <FontAwesomeIcon icon={faUserTie} className="nav-icon" />
                    <p>Manage Seller</p>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Products (Main Menu) */}
            <li className="nav-item has-treeview">
              <Link to="#" className="nav-link">
                <FontAwesomeIcon icon={faBoxes} className="nav-icon" />
                <p>
                  Products
                  <i className="fas fa-angle-left right" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/admin/Product" className="nav-link">
                    <FontAwesomeIcon icon={faBoxes} className="nav-icon" />
                    <p>Total Products</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/ProductType" className="nav-link">
                    <FontAwesomeIcon icon={faTags} className="nav-icon" />
                    <p>Add Product Type</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/Productsize" className="nav-link">
                    <FontAwesomeIcon icon={faBoxOpen} className="nav-icon" />
                    <p>Add Product Size</p>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Orders (Main Menu) */}
            <li className="nav-item has-treeview">
              <Link to="#" className="nav-link">
                <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
                <p>
                  Orders
                  <i className="fas fa-angle-left right" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/admin/orders" className="nav-link">
                    <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
                    <p>View Orders</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/ViewOrderHistory" className="nav-link">
                    <FontAwesomeIcon icon={faUserShield} className="nav-icon" />
                    <p>View Delivered Orders</p>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Buyers */}
            <li className="nav-item">
              <Link to="/admin/buyer" className="nav-link">
                <FontAwesomeIcon icon={faUserShield} className="nav-icon" />
                <p>Buyers</p>
              </Link>
            </li>

            {/* Reports */}
            <li className="nav-item has-treeview">
              <Link to="#" className="nav-link">
                <FontAwesomeIcon icon={faUsers} className="nav-icon" />
                <p>
                  Reports
                  <i className="fas fa-angle-left right" />
                </p>
              </Link>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/admin/sellerwisereport" className="nav-link">
                    <FontAwesomeIcon icon={faUserCheck} className="nav-icon" />
                    <p>Seller-Wise Reports</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/Productwise" className="nav-link">
                    <FontAwesomeIcon icon={faUserTie} className="nav-icon" />
                    <p>Product-Wise Reports</p>
                  </Link>
                </li>
              </ul>
            </li>
{/* Messages */}
<li className="nav-item">
              <Link to="/admin/AdminReply" className="nav-link">
                <FontAwesomeIcon icon={faCommentAlt} className="nav-icon" />
                <p>Messages</p>
              </Link>
            </li>
            {/* Product Feedback */}
            <li className="nav-item">
              <Link to="/admin/feedback" className="nav-link">
                <FontAwesomeIcon icon={faClipboardList} className="nav-icon" />
                <p>Product Feedback</p>
              </Link>
            </li>

            {/* Profile & Settings */}
            <li className="nav-item">
              <Link to="/admin/Profile" className="nav-link">
                <FontAwesomeIcon icon={faUserTie} className="nav-icon" />
                <p>Profile</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/Usersetting" className="nav-link">
                <FontAwesomeIcon icon={faKey} className="nav-icon" />
                <p>Update Password</p>
              </Link>
            </li>

            

            {/* Logout */}
            <li className="nav-item">
              <NavLink to="/admin/Logout" className="nav-link">
                <FontAwesomeIcon icon={faSignOutAlt} className="nav-icon" />
                <p>Logout</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AdminSidebar;
