// TODO
// TODO
// TODO

const { setupServer } = require('msw/node')
const { rest } = require('msw')
const Todo = require('./helpers')

function getAll(req, res, ctx) {
  const [status, payload] = Todo.getAll(req.body)
  return res(
    ctx.status(status),
    ctx.json(payload),
  )
}

function getById(req, res, ctx) {
  const [status, payload] = Todo.getById(req.params.id)
  return res(
    ctx.status(status),
    ctx.json(payload),
  )
}

function catchAll(req, res, ctx) {
  const message = `Endpoint [${req.method}] /${req.params['0']} does not exist`
  return res(
    ctx.status(404),
    ctx.json({ message }),
  )
}

const handlers = [
  rest.get('http://localhost:9000/api/todos', getAll),
  rest.get('http://localhost:9000/api/todos/:id', getById),
  rest.all('http://localhost:9000/*', catchAll),
]

module.exports = setupServer(...handlers)
