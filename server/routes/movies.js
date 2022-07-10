const express = require('express')
const router = express.Router()

const db = require('../db/db')
router.get('/', (req, res) => {
  db.getMovies()
    .then((movies) => {
      res.json(movies)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router