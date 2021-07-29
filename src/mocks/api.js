const express = require('express')
const Posts = require('./data')
const cors = require('cors')
const credentials = require('./credentials');

const api = express()

api.use(express.json())

api.use(cors())

const authenticator = (req, res, next) => {
  const { authorization } = req.headers;
  const { token } = credentials;

  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User not currently logged in.' });
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

api.get('/api/logout', authenticator, (req, res) => {
  const {username, role, token}  = credentials;
  res.json({
    username,
    role,
    token
  })
})

api.get('/api/posts', authenticator, (req, res) => {
  res.json(Posts.getAll())
})

//Get Post Endpoint
api.get('/api/posts/:id', authenticator, (req, res) => {
  res.json(Posts.getById(req.params.id))
})

//Create Post Endpoint
api.post('/api/posts', authenticator, (req, res) => {
  res.json(Posts.create(req.body))
})

//Edit Post Endpoint
api.put('/api/posts/:id', authenticator, (req, res) => {
  res.json(Posts.edit(req.params.id, req.body))
})

//Delete Post Endpoint
api.delete('/api/posts/:id', authenticator, (req, res) => {
  res.json(Posts.remove(req.params.id))
})

api.listen(5000, () => {
  console.log('listening on 5000')
})
