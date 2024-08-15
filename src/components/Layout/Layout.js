import React from 'react';
import '../HomePage/Homepage.css'; // Assuming your CSS is here
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBox, faFileInvoiceDollar, faFileInvoice, faBell, faUsers } from '@fortawesome/free-solid-svg-icons';

const Layout = ({ children }) => {
  return (
    <div className="homepage-container">
      <div className="top-nav">
        <div className="top-nav-left">
          <h1>My Application</h1>
        </div>
        <div className="top-nav-right">
          <FontAwesomeIcon icon={faBell} className="nav-icon" />
          <FontAwesomeIcon icon={faUser} className="nav-icon" />
        </div>
      </div>
      <div className="main-content">
        <div className="side-nav">
          <ul>
            <li>
              <Link to="/dashboard">
                <FontAwesomeIcon icon={faHome} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/party">
                <FontAwesomeIcon icon={faUsers} />
                <span>Party</span>
              </Link>
            </li>
            <li>
              <Link to="/product">
                <FontAwesomeIcon icon={faBox} />
                <span>Product</span>
              </Link>
            </li>
            <li>
              <Link to="/sale-invoice">
                <FontAwesomeIcon icon={faFileInvoiceDollar} />
                <span>Sale Invoice</span>
              </Link>
            </li>
            <li>
              <Link to="/purchase-invoice">
                <FontAwesomeIcon icon={faFileInvoice} />
                <span>Purchase Invoice</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
