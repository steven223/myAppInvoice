import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SaleInvoiceForm from './SaleInvoiceForm';
import SaleInvoiceList from './SaleInvoiceList';
import SaleInvoiceView from './SaleInvoiceView';
import Modal from '../../Modal';

const SaleInvoice = () => {
  const [saleInvoices, setSaleInvoices] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [viewingSaleInvoice, setViewingSaleInvoice] = useState(null);

  const handleAddSaleInvoice = (saleInvoice) => {
    setSaleInvoices([...saleInvoices, saleInvoice]);
    setIsAdding(false);
  };

  const handleCancelAddSaleInvoice = () => {
    setIsAdding(false);
  };

  const handleViewSaleInvoice = (index) => {
    setViewingSaleInvoice(saleInvoices[index]);
  };

  const handleDeleteSaleInvoice = (index) => {
    const updatedSaleInvoices = saleInvoices.filter((_, i) => i !== index);
    setSaleInvoices(updatedSaleInvoices);
  };

  const handleBack = () => {
    setViewingSaleInvoice(null);
  };

  return (
    <div className="sale-invoice-container">
      {viewingSaleInvoice ? (
        <SaleInvoiceView saleInvoice={viewingSaleInvoice} onBack={handleBack} />
      ) : (
        <>
          <button className="btn btn-primary mb-3" onClick={() => setIsAdding(true)}>Add Sale Invoice</button>
          <SaleInvoiceList saleInvoices={saleInvoices} onView={handleViewSaleInvoice} onDelete={handleDeleteSaleInvoice} />

          <Modal isVisible={isAdding} onClose={handleCancelAddSaleInvoice}>
            <SaleInvoiceForm onSubmit={handleAddSaleInvoice} />
          </Modal>
        </>
      )}
    </div>
  );
};

export default SaleInvoice;
