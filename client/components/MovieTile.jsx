import React from 'react'



function MovieTile (props) { 
  const movie = props.banana
  return (
    <div className='movie__tile' key ={movie.id}>
    <img src={movie.img} alt='banana' />
    <p>{movie.title}</p>
    </div>
  )

}


export default MovieTile