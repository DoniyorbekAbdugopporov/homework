import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Carusel from './components/Carusel';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Carusel />
      <Products />
      <Footer />
    </>
  );
}

export default App
