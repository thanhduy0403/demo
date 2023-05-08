import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './compunents/Product';
import Login from './compunents/Login';
import Home from './compunents/Home';
import Layout from './layout/Layout';
import './Custom.css'

function App() {
  return (
   <>
  <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
   
   </>
  );
}

export default App;
