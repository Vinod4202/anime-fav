import React from 'react'
import "../css/Favorites.css"

import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import Card from '../components/Card';

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  
  return (
    <div>
    {
      favorites.length === 0 ? 
      <div className='favorites-empty'>
        <h2>No Favorite Anime Yet</h2>
        <p>Start adding anime shows to your favorites and they will appear here!</p>
      </div> : 
      <div className="movies-grid">
          {favorites.map((show, index) => (
              <Card show = {show} key = {`${show.mal_id}-${index}`}/>
          ))}
      </div>
    }
  </div>
    
  )
}

export default FavoritesPage
