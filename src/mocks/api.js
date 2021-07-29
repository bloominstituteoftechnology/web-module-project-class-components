const express = require('express')
const Posts = require('./data')
const cors = require('cors')

const api = express()

api.use(express.json())

api.use(cors())

api.get('/api/posts', (req, res) => {
  res.json(Posts.getAll())
})

api.get('/api/posts/:id', (req, res) => {
  res.json(Posts.getById(req.params.id))
})

api.post('/api/posts', (req, res) => {
  res.json(Posts.create(req.body))
})

api.put('/api/posts/:id', (req, res) => {
  res.json(Posts.toggleDone(req.params.id))
})

api.delete('/api/posts/:id', (req, res) => {
  res.json(Posts.remove(req.params.id))
})

api.listen(5000, () => {
  console.log('listening on 5000')
})
