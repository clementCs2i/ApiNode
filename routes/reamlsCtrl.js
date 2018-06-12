// imports
var bcrypt = require('bcrypt')
var jwtUtils = require('../utils/jwt.utils');
//routes 
module.exports = {
    listRealme: function(req, res){
    return res.status(200).json({
        'access':true,
        'TOKEN': jwtUtils.generateTokenForUser()
    });
    },

    listRealm: function(req, res){
  var headerAuth = req.headers['authorization'];
    var access = jwtUtils.getAuthorization(headerAuth);;
    if (access<0){
        return res.status(400).json({'error':'wrong token'})
    }else{
        return res.status(200).json({'access':'token ok '})
    }


},
 
}