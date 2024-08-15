import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../Modal';
import '../Party/Party.css'; // Ensure you have the correct path for your SaleInvoice CSS

const SaleInvoiceList = ({ saleInvoices }) => {
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleViewClick = (invoice) => {
    setSelectedInvoice(invoice);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedInvoice(null);
  };

  return (
    <div className="sale-invoice-list">
      <table>
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Total Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {saleInvoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.taxInvoiceNumber}</td>
              <td>{invoice.customerName}</td>
              <td>{invoice.invoiceDate}</td>
              <td>{invoice.total}</td>
              <td>
                <button
                  onClick={() => handleViewClick(invoice)}
                  className="view-btn"
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalVisible && (
        <Modal isVisible={isModalVisible} onClose={handleCloseModal}>
          {/* Sale Invoice Details Modal */}
          <div className="modal-header">
            Sale Invoice Details
          </div>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Invoice Number</label>
                <input type="text" value={selectedInvoice?.invoiceNumber} readOnly />
              </div>
              <div className="form-group">
                <label>Customer Name</label>
                <input type="text" value={selectedInvoice?.customerName} readOnly />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input type="date" value={selectedInvoice?.date} readOnly />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Total Amount</label>
                <input type="text" value={selectedInvoice?.totalAmount} readOnly />
              </div>
              {/* Add more fields as needed */}
            </div>
            <button type="button" className="cancel-btn" onClick={handleCloseModal}>
              Close
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default SaleInvoiceList;
