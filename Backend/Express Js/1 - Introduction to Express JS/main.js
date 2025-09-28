const express = require('express')
const app = express()
const port = 3000
 app.use(express.static('public'))
//app.get or app.post or app.put or app.delete(path,handler)  //defualt get request
app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})
app.get('/Home', (req, res) => {
  res.send('Hello Home')
})
app.get('/About', (req, res) => {
  res.send('Hello About!')
})
app.get('/blogs', (req, res) => {
  res.send('Hello blog!')
})
app.get('/blogs/:slug/:sec', (req, res) => {
    console.log(req.params); //will output {slugccc}
    console.log(req.query); //will output {?}
    
  res.send(`Hello ${req.params.slug}! and ${req.params.sec}`)
})


// app.get('/blogs/into-to-python', (req, res) => {
//   res.send('Hello blogs!')
// })                                        too much code if we make endpoints like this that why we use express js that makes these things very easy!
// app.get('/blogs/into-to-javascript', (req, res) => {
//   res.send('Hello blogs!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})