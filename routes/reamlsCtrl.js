// imports
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

//routes 
module.exports = {
    listRealm: function(req, res){
    return res.status(200).json({'root':'ok'});
    },
 
}