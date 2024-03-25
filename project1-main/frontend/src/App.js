import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

// if router need to working in another pages then 
// must give this part in App.js
// then only routing will be working in another pages 
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProdDetail from './pages/ProdDetail';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';

function App() {

  const [cartItems,setCartItems]=useState([]);

  return (
    <div className="App">

      <Router>

        <div>
          <ToastContainer theme='dark' position='top-center' />

          {/* in Header we need to show the cartItems */}
          <Header cartItems={cartItems} />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Home />} />

            {/* in ProdDetail we need to process the cartItems */}
            <Route path='/product/:id' element={<ProdDetail cartItems={cartItems} setCartItems={setCartItems} />} />

            <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          </Routes>

          <Footer />
        </div>
        
      </Router>
      
    </div>
  );
}

export default App;
