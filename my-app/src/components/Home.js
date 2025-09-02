import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <h1 className="greeting">Wanna watch something ?</h1>
            <div className="movie-grid">
                {[...Array(25)].map((_, index) => (
                    <div key={index} className="movie-poster"></div>
                ))}
            </div>
        </div>

    )
}

export default Home;