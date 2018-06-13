// imports
var jwtUtils = require('../utils/jwt.utils');
//routes 
module.exports = {
    // retoune la liste des royaume 
    listRealm: function(req, res){
  var headerAuth = req.headers['authorization'];
    var access = jwtUtils.getAuthorization(headerAuth);;
    if (access<0){
        return res.status(400).json({'error':'wrong token'})
    }else{
        
    }
},
}