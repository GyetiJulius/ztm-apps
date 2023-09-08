import './App.css';
import React from 'react';
import HomePage from './pages/homepage/Homepage.component';
import { Route, Routes } from 'react-router-dom';

const HatsPage = () => {
  return(
    <div>
      Hats page
    </div>
  )
}


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' Component={HomePage}/>
        <Route path='/hats' Component={HatsPage}/>
      </Routes>
    </div>
  );
}

export default App;
