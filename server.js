// Add fs, http, path, express, and login system.
var fs = require('fs');
var http = require('http');
const path = require('path');
var express= require('express')
// var logins= require('./public/assets/js/login.js')
var app = express();


var engines = require('consolidate');
// Pages. Add the exact percise directory in order to add new and different pages.
app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/',(req,res)=>{
res.sendFile(__dirname+"/index.html")
})

app.get('/pages/home.html',(req,res)=>{
res.sendFile(__dirname+"/pages/home.html")
})

app.get('/main.html',(req,res)=>{
res.sendFile(__dirname+"/main.html")
})

app.get('/pages/games.html',(req,res)=>{
res.sendFile(__dirname+"/pages/games.html")
})

app.get('/pages/chatbox.html',(req,res)=>{
res.sendFile(__dirname+"/pages/chatbox.html")
})

app.get('/pages/credits.html',(req,res)=>{
res.sendFile(__dirname+"/pages/credits.html")
})

app.get('/pages/error.html',(req,res)=>{
res.sendFile(__dirname+"/pages/error.html")
})


app.get('/pages/palladium.html',(req,res)=>{
res.sendFile(__dirname+"/pages/palladium.html")
})


app.get('/pages/alloy.html',(req,res)=>{
res.sendFile(__dirname+"/pages/alloy.html")
})


app.get('/pages/womginx.html',(req,res)=>{
res.sendFile(__dirname+"/pages/womginx.html")
})

app.get('/pages/corrosion.html',(req,res)=>{
res.sendFile(__dirname+"/pages/corrosion.html")
})
// End pages.

app.use(express.static(__dirname + '/public/assets'));
app.use(express.static(__dirname + '/pages'))
app.use(express.static(__dirname + '/pages/static/src/public/'))

app.listen(8282, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT 8282");
});