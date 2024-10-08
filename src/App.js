import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Modules/Dashboard';
import Party from './components/Modules/Party/Party';
import Product from './components/Modules/Product/Product';
import SaleInvoice from './components/Modules/SaleInvoice/SaleInvoice';
import PurchaseInvoice from './components/Modules/PurchaseInvoice';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/party" element={<Party />} />
          <Route path="/product" element={<Product />} />
          <Route path="/sale-invoice" element={<SaleInvoice />} />
          <Route path="/purchase-invoice" element={<PurchaseInvoice />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
