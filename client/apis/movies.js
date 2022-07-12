import request from 'superagent'

export function fetchAllMovies() {
  return request.get('/api/v1/movies')
  .then((res) => res.body)
}

export function postTheMovie(messyMovie) {
  const tidyMovie = {
    title: messyMovie.title,
    imdb_id: messyMovie.id,
    img: messyMovie.image,
  }

  return request.post('/api/v1/movies')
  .send(tidyMovie) 
  .then((res) => res.body)
}

export function updateMovieDetails(id, details) {
 return request.patch('/api/v1/movies/' + id) 
  .send(details)
  .then(resp => resp.body)
  // send details 

}
