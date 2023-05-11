import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FavouritesPage } from './pages/FavouritesPage';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/favourites" element={<FavouritesPage/>}/>
    </Routes>
    </>
  );
}

export default App;
