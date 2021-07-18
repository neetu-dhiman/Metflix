import React, { useState } from 'react';
import './App.css';


import MovieForm from './components/MovieForm/MovieForm';
import MovieList from './components/MovieForm/MovieList';

function App() {
  let [movieList, setMoviesList] = useState([]);
  let [filterVal, setFilterVal] = useState('');

  const onAddMovieHandler = (newMovie) => {
    setMoviesList(prevlist => {
      return [...prevlist, newMovie];
    });
  }

  const onFilterValueHandler = (searchVal) => {
    setFilterVal(searchVal);
  }
  return (
    <div>
      <MovieForm onAddMovie={onAddMovieHandler} filterVal={onFilterValueHandler}></MovieForm>
      <MovieList movieList={movieList} filterVal={filterVal}></MovieList>
    </div>
  );
}

export default App;
