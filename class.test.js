import server from './backend/mock-server'
import React from 'react'
import App from './frontend/components/App'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

beforeAll(() => { server.listen() })
afterAll(() => { server.close() })
afterEach(() => {
  server.resetHandlers()
  document.body.innerHTML = ''
})

test('App is a class component and renders without crashing', () => {
  render(<App />)
  expect(
    App.prototype &&
    App.prototype.isReactComponent
  ).toBeTruthy()
})
