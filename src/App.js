import './App.css';
import React from 'react';
import HomePage from './pages/homepage/Homepage.component';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from '../src/components/header/header-component'



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' Component={HomePage} />
        <Route path='/shop' Component={ShopPage} />
      </Routes>
    </div>
  );
}

export default App;
