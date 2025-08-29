import React from 'react';
import './Home.css';

function Home() {
    const username = 'User';

    return (
        <div className="home">
            <h1 className="greeting">Hello, {username}</h1>
            <div className="movie-grid">
                {[...Array(15)].map((_, index) => (
                    <div key={index} className="movie-poster"></div>
                ))}
            </div>
        </div>

    )
}

export default Home;