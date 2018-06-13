// imports
var jwtUtils = require('../utils/jwt.utils');
//routes 
module.exports = {
    // renvoi la liste des enchéres pour un ID d'acticle
    searchAuctions: function(req, res){
        var headerAuth = req.headers['authorization'];
        var access = jwtUtils.getAuthorization(headerAuth);;
        if (access<0){
            return res.status(400).json({'error':'wrong token'})
        }else{
            
        }
    },
}