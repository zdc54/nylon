// We barely know Node but SOMEHOW we managed to write a backend.
var fs = require('fs');
var http = require('http');
const path = require('path');
var express= require('express')
var logins= require('./public/assets/js/login.js')
// suffering woooooooooo
var app = express();

var engines = require('consolidate');

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





app.use(express.static(__dirname + '/public/assets'));
app.use(express.static(__dirname + '/pages'))
var usergroups = JSON.parse(fs.readFileSync('groups.json'))
var userheuristcs = JSON.parse(fs.readFileSync('users.json'))
var bans = JSON.parse(fs.readFileSync('bans.json'))
  
function addUser(data) {
  userheuristcs.push({
    id: data.id,
    name: data.name,
    iurl: data.iurl,
    email: data.email,
    banned: false,
    perms: "user"
  })
  fs.writeFileSync("users.json",beautify(userheuristcs,null,2,100), (dat) => {
    if (dat) throw dat
  })
  return {
    id: data.id,
    name: data.name,
    iurl: data.iurl,
    email: data.email,
    banned: false,
    perms: "user"
  }
}

function handleUser(data) {
  if (userheuristcs) {
    for (i in userheuristcs) {
      var dat = userheuristcs[i]
      if (dat.id==data.id) {
        return new Promise((resolve,reject)=>{
          if (false) {
            reject("Error.")
          }
          for (i in usergroups) {
            if (usergroups[i].id==dat.perms) {
              resolve(usergroups[i])
            }
          }
        })
      }
    }
    return new Promise((resolve,reject)=>{
      if (false) {
        reject("Error.")
      }
      resolve(addUser(data))
    })
  }
}

app.listen(8282, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT 8282");
});


// httpServer.listen(3000, () => {
//     console.log("Server is running at port 3000...");
// });