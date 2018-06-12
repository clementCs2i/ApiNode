// imports
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var https = require('https')
var apirouter = require('./apiRouter').router

// instantiate server
var server = express();

//body Parser configuration
server.use(bodyParser.urlencoded({extend:true}));
server.use(bodyParser.json());

//configuration routes
server.get('/', function (req, res){
    res.setHeader('Content-Type','text/html')
    res.status(200).send('bonjour')
});

server.use('/api/',apirouter)

//launch serveur
https.createServer({
    key: fs.readFileSync('privkey.pem'),
    cert: fs.readFileSync('cert.pem')
  }, express).listen(443, function(){
    console.log('server ok')
    });