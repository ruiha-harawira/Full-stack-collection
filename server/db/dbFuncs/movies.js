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

module.exports = {
  getAllMovies,
  getMovieById,
  insertTheMovie
}