import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { searchForMovie } from '../apis/imdb'
import { addMovie } from '../actions/movies'


function AddForm () { 
const dispatch = useDispatch()

const [newMovie, setNewMovie] = useState('')
const [results, setResults] = useState([])

const handleTyping = (evt) => {
  setNewMovie(evt.target.value)
}

const handleSubmit = (evt) => {
  evt.preventDefault()
  searchForMovie(newMovie)
  .then((arr) =>  setResults(arr))
  .catch

  


}
// calling a thunk to add movies 
//dispactch add movie thunk 
const handleAdd = (movie) => {

dispatch (addMovie(movie))
}

return (
  <>
    <form onSubmit={handleSubmit}>
   
      <div className="search">
      <label>
        Search movies :
        <input onChange={handleTyping} name='welcome' value={newMovie} type='text'/> 
      
      <button>Done!</button>
      </label>
      </div>
  
    </form>
    <ul>
      {results.map(movie => (
      <li key={movie.id}>
        {movie.title} {movie.description} <button onClick={() => handleAdd(movie)}>Add</button>
      </li>
      ))}
    </ul>
  </>
)

}
  


export default AddForm
