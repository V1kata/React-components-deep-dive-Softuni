export default function Movie({ id, title, year, plot, posterUrl, director, onMovieDelete }) {

    return (
        <article>
            <h3>{title}, {year}</h3>
            <img src={posterUrl} alt={title} />
            <p>{plot}</p>
            <footer>
                <p>Director: {director}</p>
                <button onClick={() => onMovieDelete(id)}>Delete Film</button>
            </footer>
        </article>
    )
}