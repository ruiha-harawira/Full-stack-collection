const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const db = require('../db/dbFuncs/movies') //pathway to db funcs

router.get('/', (req, res) => {
  db.getAllMovies()
    .then((allMovies) => res.json(allMovies))
    .catch((err) => res.status(500).send(err.message))
})

router.post('/', (req, res) => {
  const movie = req.body

  db.insertTheMovie(movie)
    .then((idArr) => {
      const id = idArr[0]
      return db.getMovieById(id)
    })
    .then((theWholeMovieObj) => {
      res.json(theWholeMovieObj)
    })
    .catch((err) => res.status(500).send(err.message))
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const detailsToUpdate = req.body

  db.updateMovie(id, detailsToUpdate)
    .then(() => db.getMovieById(id))
    .then((movie) => res.json(movie))
    .catch((err) => res.status(500).send(err.message))
})

module.exports = router
