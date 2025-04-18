import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import InventoryTable from './pages/InventoryTable';
import ProductsTable from './pages/ProductTable';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex justify-start flex-row w-screen bg-bg">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/inventory" element={<InventoryTable />} />
            <Route path="/products" element={<ProductsTable />} />
            <Route path="/" element={<Dashboard/>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
