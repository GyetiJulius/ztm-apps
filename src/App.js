import './App.css';
import React from 'react';
import HomePage from './pages/homepage/Homepage.component';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';



function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' Component={HomePage}/>
        <Route path='/shop' Component={ShopPage}/>
      </Routes>
    </div>
  );
}

export default App;
