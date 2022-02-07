const express = require('express')
const cors = require('cors')
const path = require('path')
const Todo = require('./helpers')

const server = express()

server.use(express.json())

server.use(express.static(path.join(__dirname, '../dist')))

server.use(cors())

server.get('/api/todos', (req, res) => {
  const [status, response] = Todo.getAll()
  res.status(status).json(response)
})

server.get('/api/todos/:id', (req, res) => {
  const [status, response] = Todo.getById(req.params.id)
  res.status(status).json(response)
})

server.post('/api/todos', async (req, res) => {
  const [status, response] = await Todo.create(req.body)
  res.status(status).json(response)
})

server.patch('/api/todos/:id', (req, res) => {
  const [status, response] = Todo.toggleDone(req.params.id)
  res.status(status).json(response)
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

server.use((req, res) => {
  res.status(404).json({
    message: `Endpoint [${req.method}] ${req.path} does not exist`,
  })
})

module.exports = server
