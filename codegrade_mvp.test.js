import server from './backend/mock-server'
import React from 'react'
import App from './frontend/components/App'
import Form from './frontend/components/Form'
import Todo from './frontend/components/Todo'
import TodoList from './frontend/components/TodoList'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

jest.setTimeout(750) // default 5000 too long for Codegrade

beforeAll(() => { server.listen() })
afterAll(() => { server.close() })
afterEach(() => {
  server.resetHandlers()
  document.body.innerHTML = ''
})

test('App is a class-based component', () => {
  render(<App />)
  expect(
    App.prototype &&
    App.prototype.isReactComponent
  ).toBeTruthy()
})
test('Form is a class-based component', () => {
  render(<Form />)
  expect(
    Form.prototype &&
    Form.prototype.isReactComponent
  ).toBeTruthy()
})
test('Todo is a class-based component', () => {
  render(<Todo />)
  expect(
    Todo.prototype &&
    Todo.prototype.isReactComponent
  ).toBeTruthy()
})
test('TodoList is a class-based component', () => {
  render(<TodoList />)
  expect(
    TodoList.prototype &&
    TodoList.prototype.isReactComponent
  ).toBeTruthy()
})
