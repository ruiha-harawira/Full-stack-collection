import React, { useState } from 'react'
import { searchForMovie } from '../apis/imdb'


function AddForm () { 
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

return (
  <>
    <form onSubmit={handleSubmit}>
   
      <div className="search">
      <label>
        Search:
        <input onChange={handleTyping} name='welcome' value={newMovie} type='text'/>
      </label>
      </div>
      <br></br>
      <button>Done!</button>
    </form>
    <ul>
      {results.map(movie => <li>{movie.title} {movie.description}</li>)}
    </ul>
  </>
)

}
  


export default AddForm
