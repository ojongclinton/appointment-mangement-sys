const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connect("mongodb+srv://heyEnoh:wqtb0OZVGw1Q9US7@capetown.7xqy5.mongodb.net/mainDB?retryWrites=true&w=majority",{useNewUrlParser:true})

mongoose.connection.on('connected',()=>{
    console.log("I am now connected")
})

let app = express();
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))


app.listen(5000,()=>{
    console.log("Listening on port 5000")
})
app.get('/',(req,res)=>{
    res.render('index')
})