import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Shop />} />
        <Route path="/orderreview" element={<OrderReview />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
