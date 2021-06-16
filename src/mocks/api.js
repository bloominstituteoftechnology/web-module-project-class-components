const express = require('express')
const { question } = require('./data')
const api = express()

api.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})

api.get('/api/questions/*', (req, res) => {
  res.json(question)
})

api.use('*', (req, res) => {
  res.json({
    message: 'hello world'
  })
})

api.listen(5000, () => {
  console.log('listening on 5000')
})
