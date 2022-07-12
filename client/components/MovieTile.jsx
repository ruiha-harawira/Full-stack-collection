import React from 'react'
import { useDispatch } from 'react-redux'
import { setAsWatched } from '../actions/movies'





function MovieTile (props) { 
  const dispatch = useDispatch()
  const movie = props.banana

  const handleClick = () => {
    // console.log('click :), movie.id')
    dispatch(setAsWatched(movie.id))
  }
  return (
    <div className='movie__tile' key ={movie.id}>
    <img src={movie.img} />
    <p>{movie.title}</p>
    {!movie.watched && <button onClick={handleClick}>Watched</button>}
    </div>
  
  )

}


export default MovieTile