import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SellerHeader extends Component {
  render() {
    return (
      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" data-widget="pushmenu" to="#" role="button">
                <i className="fas fa-bars" />
              </Link>
            </li>
          </ul>

          {/* Right navbar links */}
          {/* <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link " data-toggle="dropdown" to="#">
                <i className="far fa-bell" />
                <span className="badge badge-warning navbar-badge">15</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">15 Notifications</span>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2" /> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </Link>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item">
                  <i className="fas fa-users mr-2" /> 8 friend requests
                  <span className="float-right text-muted text-sm">12 hours</span>
                </Link>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item">
                  <i className="fas fa-file mr-2" /> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </Link>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
              </div>
            </li>
          </ul> */}
        </nav>
      </div>
    );
  }
}
