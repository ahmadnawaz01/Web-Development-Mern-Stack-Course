const express = require('express')
const app = express.Router()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Birds Home world')
})
app.get('/about', (req, res) => {
  res.send(' about Birds Home world')
})
app.get('/about/:slug', (req, res) => {
  res.send(`about Birds ${req.params.slug}`)
})


module.exports=app;

