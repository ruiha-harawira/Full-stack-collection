const conn = require('../connection')

function getAllMovies(db = conn){
  return db('movies')
  .select()


}

function getMovieById (id, db = conn) {
  return db('movies')
  .select()
  .where('id', id)
  .first()
}

function insertTheMovie (newMovie, db = conn) {
  return db('movies')
  .insert(newMovie)


}

function updateMovie (id, details, db = conn) {
  return db('movies')
  .where('id', id)
  .update(details) // { watched: true}
}

// when doing an update pass the name of field, and update value

module.exports = {
  getAllMovies,
  getMovieById,
  insertTheMovie,
  updateMovie
}