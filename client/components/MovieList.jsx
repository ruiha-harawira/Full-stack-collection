import React from 'react'
import { useSelector } from 'react-redux'
import MovieTile from './MovieTile'

function MovieList () { 
  const movies = useSelector((reduxState) => reduxState.movies)


  return (
  <>
  <h2>Movie List</h2>
  <div className='movie__container'>
  {movies.map(movie => <MovieTile banana={movie} key={movie.id} />)}
  </div>
  </>
  )
}

export default MovieList 