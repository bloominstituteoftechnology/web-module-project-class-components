import { render, fireEvent, screen } from '@testing-library/react'
import { server } from './src/mocks/server'
import React from 'react'
import App from './src/components/App'
import '@testing-library/jest-dom/extend-expect'
import fetch from 'node-fetch'

globalThis.fetch = fetch

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => {
  server.resetHandlers()
  document.body.innerHTML = ''
})

test('heading is present', async () => {
  render(<App />)
  expect(screen.queryByText('React Codegrade Assignment')).toBeInTheDocument()
})

test('todos are present', async () => {
  render(<App />)
  expect(await screen.findByText(/laundry/)).toBeInTheDocument()
  expect(await screen.findByText(/dishes/)).toBeInTheDocument()
  expect(await screen.findByText(/groceries/)).toBeInTheDocument()
})

test('can do laundry', async () => {
  render(<App />)
  expect(await screen.findByText(/laundry pending/)).toBeInTheDocument()
  fireEvent.click(screen.getAllByText('done')[0])
  expect(await screen.findByText(/laundry DNE/)).toBeInTheDocument()
})
