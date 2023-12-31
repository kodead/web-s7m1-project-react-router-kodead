import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import stuff from react-router-dom and bring the use navigate hook which we will use 
// inside of export default function MovieList 
export default function MovieList(props) {
  const navigate = useNavigate()
  // useNavigate invoked
  const onMovieClick = id  => () => {
    // create a click handler const onMovieClick
    // this needs to take an ID and return a function, 
    // which takes an event handler
    // which performs the navigation
    navigate(`movies/${id}`)
    // inside of here, we will navigate to movies slash whatever id, 
    // so we are going to need a template literal, 
      // movies slash and then interpolate the ID right in there

  }
    return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails 
        link={<Link to={`movies/${movie.id}`}>details</Link>}
        onMovieClick={onMovieClick(movie.id)}
         key={movie.id} 
         movie={movie} />
        // to send 'onMovieClick' handler down into 
        // movies details so that it can attach 
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const { onMovieClick, link } = props
  return (
    <div className="movie-card" onClick={onMovieClick}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      {link}
    </div>
  );
}
