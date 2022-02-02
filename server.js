var fs = require('fs');
var http = require('http');
const path = require('path');
// var html = require('html');
var express= require('express')

var app = express();

var engines = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');


// app = (req, res) => {
//   http.createServer(function(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/html'});
// 
//     var file = fs.createReadStream('index.html');
//     const publicPath = __dirname + '/public' + req.pathname;
// 
//     if (stats.isDirectory()) fs.existsSync(publicPath + index_file) ? fs.createReadStream(publicPath + index_file).pipe(res) : error();
//     else if (stats.isFile()) !publicPath.endsWith('/') ? fs.createReadStream(publicPath).pipe(res) : error();
//     else error();
// 
//   });  
//   file.pipe(response);
// }

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





app.use(express.static(__dirname + '/public/assets'));
app.use(express.static(__dirname + '/pages'))
  
app.listen(8282, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT 8282");
});

// httpServer.listen(3000, () => {
//     console.log("Server is running at port 3000...");
// });