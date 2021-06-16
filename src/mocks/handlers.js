import { rest } from 'msw'
import Todo from './data'

function getAll(req, res, ctx) {
  return res(
    ctx.json(Todo.getAll()),
  )
}

function getById(req, res, ctx) {
  return res(
    ctx.json(Todo.getById(req.params.id)),
  )
}

function create(req, res, ctx) {
  return res(
    ctx.json(Todo.create(req.body)),
  )
}

function markDone(req, res, ctx) {
  return res(
    ctx.json(Todo.markDone(req.params.id)),
  )
}

function remove(req, res, ctx) {
  return res(
    ctx.json(Todo.remove(req.params.id)),
  )
}

export const handlers = [
  rest.get('http://localhost:5000/api/todos', getAll),
  rest.get('http://localhost:5000/api/todos/:id', getById),
  rest.post('http://localhost:5000/api/todos', create),
  rest.patch('http://localhost:5000/api/todos/:id', markDone),
  rest.delete('http://localhost:5000/api/todos/:id', remove),
]
