import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Photos from './pages/Photos';
import Cart from './pages/Cart';


function App() {
  return (
    <div>
      <Header /> 
      <Routes>
        <Route path='/photos' element={<Photos />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>


      <h1>Home Page</h1>
    </div>
  );
}

export default App;
