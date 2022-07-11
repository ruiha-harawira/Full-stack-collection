
function reducer (state = [], action) {
  switch (action.type) {
    case 'SAVE_ALL_MOVIES':
    return action.payload
    default:
      return state 
  }


}

// everytime reducer gets called it returns the state and the action.
// initial state should be an empty array 
// 


export default reducer 