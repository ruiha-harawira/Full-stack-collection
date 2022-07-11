
import { fetchAllMovies } from "../apis/movies"

// type vars
const SAVE_ALL_MOVIES = 'SAVE_ALL_MOVIES'


// action creator stuff 
function saveMovies (arr) {
  return {
    type: SAVE_ALL_MOVIES,
    payload: arr
  }
}
// thunk 

export function getAllTheMovies () {
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
