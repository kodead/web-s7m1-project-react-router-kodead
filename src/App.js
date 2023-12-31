import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import {Routes, Route, Link} from 'react-router-dom';
// to start working on the routes we're going to need to import  'Routes, Route'
// components from "react-router-dom". 
// then create a Routes element in the return statement of the export default 
// function App.
import MovieList from './Movies/MovieList'
// importing MovieList to be used in a Route path as an element
import Movie from './Movies/Movie'
// importing Movie Component to be used in second route that will take An
// id parameter after /movies.
import SavedList from './Movies/SavedList';
export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movies' slice of state
          setMovies(response.data)
          //set Movies passing in response.data
          // this will make the list on movies load to the page
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    // An effect that runs after first render, which makes our request
    // ".get('http://localhost:5001/api/movies')" and once the response comes back
    //we're supposed to study the response with a breakpoint and set a response data
    // as the movies slices state ( const [movies, setMovies] = useState([])).
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      {/* creating a Routes element and within it a Route which takes the path forward
      slash and renders an element MovieList. This component will need the movies injected
      it via props. */}
      <Routes>
        {/* At the top of the module, import MovieList */}
        <Route path="/" element={<MovieList movies={movies} />}/>
        {/* render MovieList as an element */}
        {/* dont forget to wrap in the jsx and the movies need to be injected */}
        {/* the "movies are received after making the get request from getMovies".
        on success, they need to be shoved into component state and that component 
        state and that component state is what goes inside of {<MovieList movies={movies} 
        which is called movies*/}
        <Route path="movies/:id" element={<Movie />} />
        {/* second route. the path is going to be movies/id. the element will be Movie */}
      </Routes>
      <div>Replace this Div with your Routes</div>
    </div>
  );
}
