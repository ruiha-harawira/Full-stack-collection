function reducer(state = [], action) {
  switch (action.type) {
    case 'SAVE_ALL_MOVIES':
      return action.payload
    case 'SAVE_ONE_MOVIE':
      return [...state, action.payload]
    case 'UPDATE_ONE_MOVIE':
      return state.map((movie) => {
        const updatedMovie = action.payload
        if (movie.id === updatedMovie.id) {
          return updatedMovie
        }
        return movie
      })
    default:
      return state
  }
}

// everytime reducer gets called it returns the state and the action.
// initial state should be an empty array
//

export default reducer
