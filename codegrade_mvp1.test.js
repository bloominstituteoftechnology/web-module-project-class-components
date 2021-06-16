test('Is the latest version of the project', () => {
  const pjson = require('./package.json')
  expect(pjson.version).toBe('0.0.1')
})
