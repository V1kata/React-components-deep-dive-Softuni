// import { createElement } from "react";
import Movie from "./Movie";

export default function MovieList({ movies, onMovieDelete }) {
    // let movieList = movies.map(movie => <li>
    //     <Movie {...movie} />
    // </li>)

    // const movieEl = [];

    // for (let movie of movies) {
    //     // movieEl.push(createElement(Movie, movie));
    //     movieEl.push(
    //         <li>
    //             <Movie {...movie} />
    //         </li>
    //     )
    // }

    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Movie {...movie} onMovieDelete={onMovieDelete} />
                </li>))}
        </ul>
    );
}