
const express=require('express')
const app=express.Router();



app.get('/', (req, res) => {
    res.send('conatact world get')
})
app.get('/about', (req, res) => {
    res.send('conatact about get'+req.ahmad)
})
app.get('/contact', (req, res) => {
    res.send('conatact contact get')
})


module.exports=app;