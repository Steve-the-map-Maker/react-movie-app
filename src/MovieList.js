export function MovieList({ movies, onSelectMOvie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMOvie={onSelectMOvie} />
      ))}
    </ul>
  );
}
function Movie({ movie, onSelectMOvie }) {
  return (
    <li onClick={() => onSelectMOvie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
