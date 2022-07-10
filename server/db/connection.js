const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getMovies() {
  return connection('movies').select()
}

module.exports = {
  getMovies,
}
