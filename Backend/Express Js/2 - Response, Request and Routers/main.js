const express = require('express')
const blog=require('./routes/blog')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use(express.static("template"))
app.use('/blog',blog)

app.get('/', (req, res) => {
  console.log('hey its a get request');
  res.send('Hello World!')
})
app.post('/', (req, res) => {
  console.log('hey its a post request');
  res.send('Hello World! post')
})
app.put('/', (req, res) => {
  console.log('hey its a put request');
  res.send('Hello World! put')
})
app.delete('/', (req, res) => {
  console.log('hey its a delete request');
  res.send('Hello World! deleye')
})

app.get('/index', (req, res) => {
  console.log('hey its index');
  res.sendFile('/template/index.html',{root:__dirname})
})
app.get('/json', (req, res) => {
  console.log('hey its index');
  res.json({a:1,b:2,c:3})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

