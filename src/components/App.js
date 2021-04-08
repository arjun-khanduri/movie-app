import React from 'react';
import { data } from '../data';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import { addMovies, setShowFavorites } from '../actions';

class App extends React.Component {

  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));
    console.log('STATE', this.props.store.getState());
  }

  isMovieFavorite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favorites.indexOf(movie);
    if (index !== -1)
      return true; //Movie found 
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavorites(val));
  }

  render() {
    const { movies } = this.props.store.getState();
    const { list, favorites, showFavorites } = movies;
    console.log('Rendered', this.props.store.getState());
    const displayMovies = showFavorites ? favorites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavorites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>All Movies</div>
            <div className={`tab ${showFavorites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favorites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavorite={this.isMovieFavorite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className='no-movies'>No movies to display!</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
