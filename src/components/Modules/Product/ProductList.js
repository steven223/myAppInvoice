import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../Modal';
import '../Party/Party.css'; // Ensure you have the correct path for your Product CSS

const ProductList = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddProduct, setIsAddProduct] = useState(false);

  const handleViewClick = (product) => {
    setSelectedProduct(product);
    setIsAddProduct(false);
    setIsModalVisible(true);
  };

  // Uncomment if you have an add product form
  // const handleAddProductClick = () => {
  //   setSelectedProduct(null);
  //   setIsAddProduct(true);
  //   setIsModalVisible(true);
  // };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedProduct(null);
    setIsAddProduct(false);
  };

  return (
    <div className="product-list">
      {/* <button className="add-party-btn" onClick={handleAddProductClick}>
        Add Product
      </button> */}
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>HSN</th>
            <th>GST%</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.productName}</td>
              <td>{product.hsn}</td>
              <td>{product.gst}</td>
              <td>
                <button
                  onClick={() => handleViewClick(product)}
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
          {/* Uncomment if you have an add product form
          <div className="modal-header">
            {isAddProduct ? 'Add Product' : 'Product Details'}
          </div> */}
          <form>
            {isAddProduct ? (
              <>
                {/* Add Product Form */}
                <div className="form-row">
                  <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" placeholder="Enter Product Name" />
                  </div>
                  <div className="form-group">
                    <label>HSN</label>
                    <input type="text" placeholder="Enter HSN" />
                  </div>
                  <div className="form-group">
                    <label>Barcode</label>
                    <input type="text" placeholder="Enter Barcode" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Base Price</label>
                    <input type="number" placeholder="Enter Base Price" />
                  </div>
                  <div className="form-group">
                    <label>GST</label>
                    <input type="text" placeholder="Enter GST" />
                  </div>
                  <div className="form-group">
                    <label>Sale Price</label>
                    <input type="number" placeholder="Enter Sale Price" />
                  </div>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </>
            ) : (
              <>
                {/* Product Details Form */}
                <div className="form-row">
                  <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" value={selectedProduct?.productName} readOnly />
                  </div>
                  <div className="form-group">
                    <label>HSN</label>
                    <input type="text" value={selectedProduct?.hsn} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Barcode</label>
                    <input type="text" value={selectedProduct?.barcode} readOnly />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Base Price</label>
                    <input type="number" value={selectedProduct?.basePrice} readOnly />
                  </div>
                  <div className="form-group">
                    <label>GST</label>
                    <input type="text" value={selectedProduct?.gst} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Sale Price</label>
                    <input type="number" value={selectedProduct?.salePrice} readOnly />
                  </div>
                </div>
                <button type="button" className="cancel-btn" onClick={handleCloseModal}>
                  Close
                </button>
              </>
            )}
          </form>
        </Modal>
      )}
    </div>
  );
};

export default ProductList;
