const express = require('express');
const app = express()
const port = 3000;
const contact=require('./routes/help')

const fs=require("fs")
app.use('/contact',contact)

app.use(express.static('public'))


//middleware 1 
const mylogger = function (req, res, next) {
    console.log(req.headers)
    req.ahmad=22;
    
    fs.appendFileSync('logs.txt',`resquest send on ${Date.now()} is a ${req.method}\n`)
    console.log(`resquest send on ${Date.now()} is a ${req.method}`);
    next();

}

//middleware 2
const mylogger2 = function (req, res, next) {
    console.log('Logged 2');
    // res.send("hacked by ahmad")
    next();

}

app.use(mylogger)
app.use(mylogger2)

app.get('/', (req, res) => {
    res.send('hello world get')
})
app.get('/about', (req, res) => {
    res.send('hello about get'+req.ahmad)
})
app.get('/contact', (req, res) => {
    res.send('hello contact get')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})