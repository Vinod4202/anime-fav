import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './css/App.css'
import HomePage from './pages/HomePage'
import FavoritesPage from './pages/FavoritesPage'
import NavBar from './components/NavBar'
import { FavoritesProvider } from './contexts/FavoritesContext'


function App() {
  return (
    <FavoritesProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/favorites' element={<FavoritesPage />}/>
        </Routes>

      </main>
    </FavoritesProvider>
  );
}

export default App
