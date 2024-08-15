import React, { useState } from 'react';

const SaleInvoiceForm = ({ onSubmit }) => {
  // State management for form fields
  const [transactionType, setTransactionType] = useState('Cash');
  const [customerName, setCustomerName] = useState('');
  const [gst, setGst] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [taxInvoiceNumber, setTaxInvoiceNumber] = useState('');
  const [billingAddress, setBillingAddress] = useState('');

  // State management for products
  const [products, setProducts] = useState([
    {
      sku: '',
      description: '',
      unit: '',
      quantity: '',
      taxableValue: '',
      vat: '',
      total: '',
    },
  ]);

  // Handle adding a new product row
  const handleAddProduct = () => {
    setProducts([
      ...products,
      {
        sku: '',
        description: '',
        unit: '',
        quantity: '',
        taxableValue: '',
        vat: '',
        total: '',
      },
    ]);
  };

  // Handle removing a product row
  const handleRemoveProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  // Handle changes to product fields
  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index] = {
      ...updatedProducts[index],
      [field]: value,
    };
    setProducts(updatedProducts);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    if (!customerName || !gst || !invoiceDate || !taxInvoiceNumber || !billingAddress || products.length === 0) {
      alert('Please fill in all required fields and add at least one product.');
      return;
    }

    // Create the new invoice object
    const newInvoice = {
      transactionType,
      customerName,
      gst,
      invoiceDate,
      taxInvoiceNumber,
      billingAddress,
      products,
    };

    // Submit the form data
    onSubmit(newInvoice);
  };

  return (
    <form className="sale-invoice-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label>Transaction Type</label>
          <select className="form-control" value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
            <option value="Cash">Cash</option>
            <option value="Credit">Credit</option>
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <label>Customer Name</label>
          <input
            type="text"
            className="form-control"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Customer Name"
            required
          />
        </div>
        <div className="col-md-4 mb-3">
          <label>GST</label>
          <input
            type="text"
            className="form-control"
            value={gst}
            onChange={(e) => setGst(e.target.value)}
            placeholder="GST"
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <label>Invoice Date</label>
          <input
            type="date"
            className="form-control"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            required
          />
        </div>
        <div className="col-md-4 mb-3">
          <label>Tax Invoice #</label>
          <input
            type="text"
            className="form-control"
            value={taxInvoiceNumber}
            onChange={(e) => setTaxInvoiceNumber(e.target.value)}
            placeholder="Tax Invoice #"
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label>Billing Address</label>
        <textarea
          className="form-control"
          value={billingAddress}
          onChange={(e) => setBillingAddress(e.target.value)}
          placeholder="Enter Billing Address"
          required
        ></textarea>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>SKU</th>
              <th>SKU Description</th>
              <th>Unit</th>
              <th>Quantity</th>
              <th>Taxable Value</th>
              <th>VAT %</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.sku}
                    onChange={(e) => handleProductChange(index, 'sku', e.target.value)}
                    placeholder="SKU"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.description}
                    onChange={(e) => handleProductChange(index, 'description', e.target.value)}
                    placeholder="SKU Description"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.unit}
                    onChange={(e) => handleProductChange(index, 'unit', e.target.value)}
                    placeholder="Unit"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.quantity}
                    onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                    placeholder="Quantity"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.taxableValue}
                    onChange={(e) => handleProductChange(index, 'taxableValue', e.target.value)}
                    placeholder="Taxable Value"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.vat}
                    onChange={(e) => handleProductChange(index, 'vat', e.target.value)}
                    placeholder="VAT %"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.total}
                    onChange={(e) => handleProductChange(index, 'total', e.target.value)}
                    placeholder="Total"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveProduct(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className="btn btn-primary mt-3" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>

      <button type="submit" className="btn btn-success mt-3">
        Save Invoice
      </button>
    </form>
  );
};

export default SaleInvoiceForm;
