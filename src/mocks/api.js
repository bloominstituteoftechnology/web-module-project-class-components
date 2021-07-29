const express = require('express')
const Posts = require('./data')
const cors = require('cors')

const api = express()

api.use(express.json())

api.use(cors())

//Get All Posts Endpoint
api.get('/api/posts', (req, res) => {
  res.json(Posts.getAll())
})

//Get Post Endpoint
api.get('/api/posts/:id', (req, res) => {
  res.json(Posts.getById(req.params.id))
})

//Create Post Endpoint
api.post('/api/posts', (req, res) => {
  res.json(Posts.create(req.body))
})

//Edit Post Endpoint
api.put('/api/posts/:id', (req, res) => {
  res.json(Posts.edit(req.params.id, req.body))
})

//Delete Post Endpoint
api.delete('/api/posts/:id', (req, res) => {
  res.json(Posts.remove(req.params.id))
})

api.listen(5000, () => {
  console.log('listening on 5000')
})
