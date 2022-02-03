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




app.listen(8282, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT 8282");
});

const configs = {
  "palladiumprefix": "/service/"
}

const Palladium = require("./lib/server");
const Server = http.Server()

const proxy = new Palladium({
  prefix: configs.prefix,
  encode: "xor",
  ssl: true,
  requestMiddleware: [
    Palladium.blackList(['example.org', 'among.us'], 'Site is Blocked by Host')
  ],
  debug: false,
  Corrosion: [false, {}],
  server: Server,
})

/*proxy.onrequest((ctx) => {
  console.log('request', ctx.url)
})
proxy.onrequest((ctx) => {
  console.log('response', ctx.httpResponse.headers['content-type'] || '')
})*/

proxy.init()

Server.on('request', (req, res) => {if(req.url.startsWith(proxy.prefix)){return proxy.request(req, res)}else{return res.end(fs.readFileSync(__dirname+'/index.html'))}})/*.on('upgrade', (req, socket, head) => proxy.upgrade(req, socket, head))*/


    const https = require('https');
    const config = require('./config.json');
    proxys = new (require('./lib/index'))(config.prefix, {
      localAddress: config.localAddresses ? config.localAddresses : false,
      blacklist: config.blockedHostnames ? config.blockedHostnames : false
    }),
    index_file = 'index.html',
    atob = str => new Buffer.from(str, 'base64').toString('utf-8'),
    app = (req, res) => {

      // HTTP(S) proxy.
      if (req.url.startsWith(config.prefix)) return proxys.http(req, res); 

      req.pathname = req.url.split('#')[0].split('?')[0];
      req.query = {};
      req.url.split('#')[0].split('?').slice(1).join('?').split('&').forEach(query => req.query[query.split('=')[0]] = query.split('=').slice(1).join('='));

      if (req.query.url && (req.pathname == '/prox' || req.pathname == '/prox/' || req.pathname == '/session' || req.pathname == '/session/')) {
        var url = atob(req.query.url);

        if (url.startsWith('https://') || url.startsWith('http://')) url = url;
        else if (url.startsWith('//')) url = 'http:' + url;
        else url = 'http://' + url;

        return (res.writeHead(301, { location: config.prefix + proxys.proxifyRequestURL(url) }), res.end(''));
      }


      // General file server.
      const publicPath = __dirname + '/public' + req.pathname;

      const error = () => (res.statusCode = 404, res.end(fs.readFileSync(__dirname + '/lib/error.html', 'utf-8').replace('%ERR%', `Cannot ${req.method} ${req.pathname}`)))

      fs.lstat(publicPath, (err, stats) => {

        if (err) return error();

        if (stats.isDirectory()) fs.existsSync(publicPath + index_file) ? fs.createReadStream(publicPath + index_file).pipe(res) : error();
        else if (stats.isFile()) !publicPath.endsWith('/') ? fs.createReadStream(publicPath).pipe(res) : error();
        else error();

      });

    },
    server = config.ssl ? https.createServer({key: fs.readFileSync('./ssl/default.key'), cert: fs.readFileSync('./ssl/default.crt')}, app) : http.createServer(app);

// Websocket proxy.
proxy.ws(server);