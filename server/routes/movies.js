const express = require('express')
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

// router.get('/movie/:id', (req, res) => {
//   const id = Number(req.params.id)
//   return db
//     .getMovieById(id)
//     .then((movie) => {
//       res.status(200).json({ id: movie  })
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message })
//     })
// })

module.exports = router
