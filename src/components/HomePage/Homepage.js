import Homepage from '../HomePage/Homepage'; // Import Homepage

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Default route */}
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
