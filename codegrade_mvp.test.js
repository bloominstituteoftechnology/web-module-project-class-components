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

test('sanity', () => { })

test('lady gaga', async () => {
  render(<App />)
  expect(screen.queryByText('lady gaga')).toBeInTheDocument()
}, 500)

test('hello world', async () => {
  render(<App />)
  expect(await screen.findByText('Bilbo\'s Pocket')).toBeInTheDocument()
}, 500)
