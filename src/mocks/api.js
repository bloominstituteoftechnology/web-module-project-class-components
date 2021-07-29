const express = require('express')
const Posts = require('./data')
const cors = require('cors')

const api = express()

api.use(express.json())

api.use(cors())

const credentials = {
  username: "Lambda",
  password: "School",
  username: "Lambda School",
  role: "admin",
  token:"ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
}
const authenticator = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User must be logged in to do that.' });
  }
}

//Get All Posts Endpoint
api.get('/api/login', (req, res) => {
  const {username, role, token}  = credentials;
  res.json({
    username,
    role,
    token
  })
})

api.get('/api/logout', (req, res) => {
  const {username, role, token}  = credentials;
  res.json({
    username,
    role,
    token
  })
})

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
