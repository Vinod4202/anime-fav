import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import "../css/Home.css"
import { getPopularAnime, searchAnime } from '../services/api'
const HomePage = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const loadShows = async ()=>{
            try {
                const popularShows = await getPopularAnime();
                setShows(popularShows);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        loadShows();
    }, [])
    
    const handleSearch = async (e)=>{
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;
        
        setLoading(true);
        try {
            const searchResults = await searchAnime(searchQuery);
            setShows(searchResults);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search anime.." 
                    value={searchQuery}
                    onChange={(e)=>setSearchQuery(e.target.value)}
                />
                <button className="search-button" type="submit">Search</button>
            </form>
            {
                loading ? <div className="loader"></div> : 
                <div className="movies-grid">
                    {shows.map((show, index) => (
                        <Card show = {show} key = {`${show.mal_id}-${index}`}/>
                    ))}
                </div>
            }
            {(!loading && shows.length == 0) && <div className="no-results"><h2>No Results Found</h2></div>} 
            
        
        </div>
    )
}

export default HomePage
