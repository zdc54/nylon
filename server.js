const fs = require('fs');
const config = require('./config.json');
const fastify = require('fastify')({
  logger: true
})

fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})

const path = require('path');
const routes = [
    [ '/gs/', 'gs', path.join(__dirname, 'pages', 'gs.html'), str => str.replace('$gs', buildGames(require('./gs.json'))) ],
    [ '/home/', 'home', path.join(__dirname, 'pages', 'home.html') ],
    [ '/chatbox/', 'chatbox', path.join(__dirname, 'pages', 'chatbox.html') ],
    [ '/proxies/', 'proxies', path.join(__dirname, 'pages', 'proxies.html') ],
    [ '/credits/', 'credits', path.join(__dirname, 'pages', 'credits.html') ],
    [ '/', 'home', path.join(__dirname, 'pages', 'index.html') ],
];