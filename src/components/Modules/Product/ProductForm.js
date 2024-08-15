import React, { useState } from 'react';

const ProductForm = ({ onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [hsn, setHsn] = useState('');
  const [barcode, setBarcode] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [gst, setGst] = useState('');
  const [salePrice, setSalePrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { productName, hsn, barcode, basePrice, gst, salePrice };
    onSubmit(newProduct);
    setProductName('');
    setHsn('');
    setBarcode('');
    setBasePrice('');
    setGst('');
    setSalePrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal-header">Add Product</div>
      
      {/* Row 1: Product Name */}
      <div className="form-row">
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>
      </div>

      {/* Row 2: HSN and Barcode */}
      <div className="form-row">
        <div className="form-group">
          <label>
            HSN:
            <input
              type="text"
              value={hsn}
              onChange={(e) => setHsn(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Barcode:
            <input
              type="text"
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
              required
            />
          </label>
        </div>
      </div>

      {/* Row 3: Base Price, GST, and Sale Price */}
      <div className="form-row">
        <div className="form-group">
          <label>
            Base Price:
            <input
              type="number"
              value={basePrice}
              onChange={(e) => setBasePrice(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            GST:
            <input
              type="text"
              value={gst}
              onChange={(e) => setGst(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Sale Price:
            <input
              type="number"
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
              required
            />
          </label>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
