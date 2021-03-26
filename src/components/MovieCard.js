import React from 'react';

class MovieCard extends React.Component {
    render() {
        const { movie } = this.props;
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
                        <button className="favorite-btn">Favorite</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;