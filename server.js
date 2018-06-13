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

//launch serveur

//////https
https.createServer({
    key: fs.readFileSync('privkey.pem'),
    cert: fs.readFileSync('cert.pem')
}, server).listen(3000);


//////http
//server.listen(3000,function(){
  //  console.log('serveur ok');
//});



//configuration routes
server.get('/', function (req, res){
    res.setHeader('Content-Type','text/html')
    res.status(200).send('bonjour')
});

server.use('/api/',apirouter)