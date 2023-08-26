import { useEffect, useState } from "react";
import MovieList from "../component/movieList";
import MovieListHeading from "../component/MovieListHeading";
import RemoveFavourites from "../component/RemoveFavourites";
import SearchBox from "../component/SearchBox";
import AddFavourites from '../component/AddFavourites';
import { Navigation } from "../component/navigation";
import "./styles/homeFilms.scss";
import axios from 'axios';
import { Loading } from "../component/loading";


export function Homefilms() {

    

    const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
	

        axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then((res) => {
            setMovies(res.data.results)
            })
            
	};


    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
    
        axios.get(url)
            .then((res) => {
                const movieData = res.data.results;
                setMovies(movieData); 
                console.log(res);
                
            })
            .catch((error) => {
                console.error("Error fetching movie data:", error);
            });
            
    }, []);
    

	useEffect(() => {
        if(searchValue){
          getMovieRequest(searchValue);
        }
    }, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};
    return(

        <>
        <Loading/>
        <div>
        <Navigation/>
            <div className='container-fluid movie-app'>
                <div className='row d-flex align-items-center mt-4 mb-4'>
                    <MovieListHeading heading='Movies' />
                    <SearchBox className="search" searchValue={searchValue} setSearchValue={setSearchValue} />
                </div>
                <div className='row'>
                    <MovieList
                        movies={movies}
                        handleFavouritesClick={addFavouriteMovie}
                        favouriteComponent={AddFavourites}
                    />
                </div>
                <div className='row d-flex align-items-center mt-4 mb-4'>
                    <MovieListHeading heading='Favourites' />
                </div>
                <div className='row'>
                    <MovieList
                        movies={favourites}
                        handleFavouritesClick={removeFavouriteMovie}
                        favouriteComponent={RemoveFavourites}
                    />
                </div>
            </div>
        </div>
        </>
    )
}



