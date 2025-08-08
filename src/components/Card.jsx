import React, { useState } from 'react'
import "../css/MovieCard.css"

import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

const Card = ({show}) => {
    const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
    const isfavorite = isFavorite(show.mal_id);
    function favOnclick() {
        isfavorite ? removeFavorite(show.mal_id) : addFavorite(show);
        
    }

    return (
        <div>
        {/* <div className="movie-card">
            <div className="movie-poster">
                <img src={show.images.jpg.image_url} alt={show.title} />

                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={favOnclick}>
                        {isfavorite ? "❤️":"🤍️"}
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <h3>{show.title_english != null ? show.title_english : show.title}</h3>
                <p>{show.year}</p>
            </div>

        </div> */}
        <div className="movie-card">
            <div className="movie-poster">
                <img src={show.images.jpg.image_url} alt={show.title} />
                
                {/* Rating Badge */}
                <div className="rating-badge">
                    <span className="star">★</span>
                    <span>{show.score}</span>
                </div>
                
                {/* Episodes Badge */}
                <div className="episodes-badge">
                    {show.episodes} Episodes
                </div>
                
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={favOnclick}>
                        {isfavorite ? "❤️":"🤍️"}
                    </button>
                </div>
            </div>
        
            <div className="movie-info">
                <h3>{show.title_english != null ? show.title_english : show.title}</h3>
                <div className="movie-meta">
                    <p className="year">{show.year}</p>
                    
                </div>
            </div>
                
        </div>
        </div>
    )
}

export default Card
