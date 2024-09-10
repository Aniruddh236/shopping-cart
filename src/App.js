import { HashRouter as Outlet, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='cart' element={<ShoppingCart />} />
    </Routes>

    <Outlet />
    </>
  );
}

export default App;
