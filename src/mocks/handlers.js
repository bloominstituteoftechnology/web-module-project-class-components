import { rest } from 'msw'
import { question } from './data'

function helloWorld(req, res, ctx) {
  return res(
    ctx.status(200),
    ctx.json({ message: 'hello world' }),
  )
}

function getQuestion(req, res, ctx) {
  return res(
    ctx.status(200),
    ctx.json(question),
  )
}

export const handlers = [
  rest.get('http://localhost:5000/api/questions/*', getQuestion),
  rest.get('http://localhost:5000/*', helloWorld),
]
