const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');
//https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
  let sitename="addidas"
  let searchtext="search now"
  let arr=[4,54,5]
  res.render("index", {sitename:sitename,searchtext:searchtext,arr})
})


app.get('/blog/:slug', (req, res) => {
  let blogname="addidas why and when"
  let blogcontent="its a very good brand"
  res.render("index", {blogname:blogname, blogcontent:blogcontent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
