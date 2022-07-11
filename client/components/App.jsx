import React, { useEffect } from 'react'
import MovieList from './MovieList'
import {getAllTheMovies} from '../actions/movies'
import { useDispatch } from 'react-redux'



function App () {
  const dispatch = useDispatch()
// empty array on load
// when app loads trigger use effect which calls dispatch call all the movies from our thunk function, execute whatever is in our thunk function
// wrapping in dispatch is an important part of how thunks work
// dispatch tells redux ? 
// thunks helps redux to call your api (eg. async)
useEffect(() => {
  dispatch(getAllTheMovies())

}, [])




  return (
    <>
      <header className="header">
        <h1>Moooovies</h1>
      </header>
      <section className="main">
      <MovieList />
      </section>
    </>
  )
}

export default App
