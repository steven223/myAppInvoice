import React from 'react';
import { useParams } from 'react-router-dom';
import './SaleInvoice.css';

const SaleInvoiceView = ({ invoices }) => {
  const { invoiceId } = useParams();
  const invoice = invoices.find((inv) => inv.id === invoiceId);

  if (!invoice) {
    return <div>Invoice not found!</div>;
  }

  return (
    <div className="invoice-view-container">
      <h2>Invoice #{invoice.taxInvoiceNumber}</h2>
      <div className="invoice-details">
        <p><strong>Date:</strong> {invoice.invoiceDate}</p>
        <p><strong>Customer Name:</strong> {invoice.customerName}</p>
        <p><strong>TRN:</strong> {invoice.trn}</p>
        <p><strong>Billing Address:</strong> {invoice.billingAddress}</p>
        <p><strong>Shipping Address:</strong> {invoice.shippingAddress}</p>
        <p><strong>Total Amount:</strong> {invoice.totalAmount}</p>
      </div>
      <h3>Products</h3>
      <table className="product-table">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Description</th>
            <th>Unit</th>
            <th>Quantity</th>
            <th>Price/Unit</th>
            <th>VAT %</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoice.products.map((product, index) => (
            <tr key={index}>
              <td>{product.sku}</td>
              <td>{product.description}</td>
              <td>{product.unit}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.vat}</td>
              <td>{(product.quantity * product.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SaleInvoiceView;
