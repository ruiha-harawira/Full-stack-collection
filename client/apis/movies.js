import request from 'superagent'

export function fetchAllMovies() {
  return request
    .get('/api/v1/movies')
    .then((res) => res.body)

  }

// export function getMoviesById(){
//   return request 
//   .get('/api/v1/movies/:id')
//   .then((res) => res.body)


//   }


