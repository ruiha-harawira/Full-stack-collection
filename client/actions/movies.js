import { fetchAllMovies, postTheMovie } from '../apis/movies'

// type vars
const SAVE_ALL_MOVIES = 'SAVE_ALL_MOVIES'
const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'

// action creator stuff
function saveMovies(arr) {
  return {
    type: SAVE_ALL_MOVIES,
    payload: arr,
  }
}
function saveOneMovie (newMovie) {
return {
  type: SAVE_ONE_MOVIE,
  payload: newMovie,
}
}
// thunk

export function getAllTheMovies() {
  return (dispatch) => {
    console.log('THUNK')

    fetchAllMovies()
      .then((moviesArr) => {
        dispatch(saveMovies(moviesArr))
      })
      .catch((err) => console.log(err.message))
  }
  // thunk is going to call fetch all movies make a request to our route
  //API call
  // then dispatch, send redux whatever we got back from our API
}

export function addMovie(movie) {
  return (dispatch) => {
    postTheMovie(movie)
      .then((movieDetails) => {
        // console.log('addMovie thunk then', body)
        dispatch(saveOneMovie(movieDetails))
      })
      .catch((err) => console.log(err.message))
  }
}
