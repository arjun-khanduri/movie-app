import React from 'react';
import { data } from '../data';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import { addMovies } from '../actions';

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
    const { favorites } = this.props.store.getState();
    const index = favorites.indexOf(movie);
    if (index !== -1)
      return true; //Movie found 
    return false;
  }

  render() {
    const { list } = this.props.store.getState();
    console.log('Rendered', this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favorites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCard movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavorite={this.isMovieFavorite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
