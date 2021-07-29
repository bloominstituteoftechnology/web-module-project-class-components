import { rest } from 'msw'
import Posts from './data'

function getAll(req, res, ctx) {
  return res(
    ctx.json(Posts.getAll()),
  )
}

function getById(req, res, ctx) {
  return res(
    ctx.json(Posts.getById(req.params.id)),
  )
}

function create(req, res, ctx) {
  return res(
    ctx.json(Posts.create(req.body)),
  )
}

function edit(req, res, ctx) {
  return res(
    ctx.json(Posts.edit(req.params.id, req.body)),
  )
}

function remove(req, res, ctx) {
  return res(
    ctx.json(Posts.remove(req.params.id)),
  )
}

export const handlers = [
  rest.get('http://localhost:5000/api/posts', getAll),
  rest.get('http://localhost:5000/api/posts/:id', getById),
  rest.post('http://localhost:5000/api/posts', create),
  rest.put('http://localhost:5000/api/posts/:id', edit),
  rest.delete('http://localhost:5000/api/posts/:id', remove)
]
