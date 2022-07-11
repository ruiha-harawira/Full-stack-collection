import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import MovieList from './MovieList'
import AddForm from './AddForm'

import {getAllTheMovies} from '../actions/movies'






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
      <AddForm />

      <Routes>
        <Route path='/' element={<MovieList />} />
        <Route path ='/add' element={<AddForm />} />
      </Routes>
      
      </section>
    </>
  )
}

export default App
