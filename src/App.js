import MovieList from './components/MovieList.js';
import { movies as movieData } from './movies.js';
import { useState } from 'react';

function App() {
    const [movies, setMovies] = useState(movieData);

    const onMovieDelete = (id) => {
        setMovies(oldMovies => oldMovies.filter(x => x.id !== id));
    }

    return (
        <div className="App">
            <h1>Movie Collection</h1>

            <MovieList movies={movies} onMovieDelete={onMovieDelete} />
        </div>
    );
}

export default App;
