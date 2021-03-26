import React from 'react';
import { data } from '../data';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          Movies
        </div>
        <div className="tabs">
          Favorites
        </div>
        {/* <div className="list">
          {data.map(movie => (
            <MovieCard movie={movie} />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default App;
