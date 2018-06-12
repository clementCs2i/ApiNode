// imports
var express = require('express');
var bodyParser = require('body-parser');
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
server.listen(8080, function(){
console.log('server ok')
});