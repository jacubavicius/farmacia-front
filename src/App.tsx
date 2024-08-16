import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
            <div className='min-h-[81vh]'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
              </Routes>
            </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;