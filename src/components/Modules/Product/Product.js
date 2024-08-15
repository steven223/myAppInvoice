import React, { useState } from 'react';
import '../Party/Party.css'; // Ensure you have the correct path for your Product CSS
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import ProductView from './ProductView';
import Modal from '../../Modal'; // Import the Modal component

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [viewingProduct, setViewingProduct] = useState(null);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
    setIsAdding(false);
  };

  const handleCancelAddProduct = () => {
    setIsAdding(false);
  };

  const handleViewProduct = (index) => {
    setViewingProduct(products[index]);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleBack = () => {
    setViewingProduct(null);
  };

  return (
    <div className="product-container">
      {viewingProduct ? (
        <ProductView product={viewingProduct} onBack={handleBack} />
      ) : (
        <>
          <button className="add-party-btn" onClick={() => setIsAdding(true)}>Add Product</button>
          <ProductList products={products} onView={handleViewProduct} onDelete={handleDeleteProduct} />

          {/* Modal for Add Product Form */}
          <Modal isVisible={isAdding} onClose={handleCancelAddProduct}>
            <ProductForm onSubmit={handleAddProduct} />
          </Modal>
        </>
      )}
    </div>
  );
};

export default Product;
