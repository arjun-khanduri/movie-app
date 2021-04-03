import React from 'react';
import { addFavorites, removeFavorites } from '../actions';

class MovieCard extends React.Component {
    handleFavoritesClick = () => {
        const movie = this.props;
        this.props.dispatch(addFavorites(movie.movie));
    }
    handleUnFavoriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(removeFavorites(movie));
    }
    render() {
        const { movie, isFavorite } = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.title}</div>
                    <div className="plot"><strong>Director: </strong>{movie.director}</div>
                    <div className="plot"><strong>Year: </strong>{movie.year}</div>
                    <div className="plot"><strong>Duration: </strong>{movie.duration}</div>
                    <div className="plot">
                        <strong>Genre: </strong>
                        {movie.genre.join(', ')}
                        {/* {movie.genre.map((g) => <li>{g}</li>)} */}
                    </div>
                    <div className="footer">
                        <div className="rating"><strong>IMDb: </strong>{movie.rate}</div>
                        {
                            isFavorite
                                ? <button className="unfavorite-btn" onClick={this.handleUnFavoriteClick}>Unfavorite</button>
                                : <button className="favorite-btn" onClick={this.handleFavoritesClick}>Favorite</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;