// imports
var jwtUtils = require('../utils/jwt.utils');
var mongoDb = require('./mongoDb/mongoDbCtrl');
//routes 
module.exports = {
    // retoune la liste des royaume 
    listRealm: function(req, res){
    var headerAuth = req.headers['authorization'];
    var access = jwtUtils.getAuthorization(headerAuth);;
    if (access<0){
        return res.status(400).json({'error':'wrong token'})
    }else{ 
        var Collection = mongoDb.returnCollectionRealms();
     if (Collection == null ){
        return res.status(400).json({'error':'wrong connection bdd'})
     }else{
        Collection.aggregate([
            {$unwind: "$connected_realms"},          
            
            {$sort: {'connected_realms': 1}}
        ]).exec(function (err, realms) {
            if (err) {
            return res.status(400).json({'error':'Erreur execution requete'})
            }
            return res.status(200).json({realms})
       
        });
    }
    }
},
}