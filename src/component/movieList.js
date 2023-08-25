import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<Link to={`/movie/${movie.id}`} key={movie.id}>
					<div className='image-container d-flex justify-content-start m-3'>
						<img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt='movie'></img>
						<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
						>
						<FavouriteComponent />
						</div>
					</div>
				</Link>

			))}
		</>
	);
};

export default MovieList;

