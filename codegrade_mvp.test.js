import { server } from './src/mocks/server'
import { resetTodos } from './src/mocks/data'
import React from 'react'
import App from './src/components/App'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

beforeAll(() => { server.listen() })
afterAll(() => { server.close() })
beforeEach(() => {
  resetTodos()
  render(<App />)
})
afterEach(() => {
  server.resetHandlers()
  document.body.innerHTML = ''
})

test('heading is present', async () => {
  expect(screen.queryByText('React Codegrade Assignment')).toBeInTheDocument()
})

test('todos are present', async () => {
  expect(await screen.findByText(/laundry/)).toBeInTheDocument()
  expect(await screen.findByText(/dishes/)).toBeInTheDocument()
  expect(await screen.findByText(/groceries/)).toBeInTheDocument()
})

test('can do laundry', async () => {
  expect(await screen.findByText('laundry pending')).toBeInTheDocument()
  fireEvent.click(screen.getAllByText('complete')[0])
  expect(await screen.findByText('laundry DONE')).toBeInTheDocument()
})
