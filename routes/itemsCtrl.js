// imports
var jwtUtils = require('../utils/jwt.utils');
var mongoDb = require('./mongoDb/mongoDbCtrl');
//routes 
module.exports = {
    // renvoie la liste des items, Nom de l'item Commence par PARAMETRE(LIKE en sql)
    searchItems: function(req, res){
        var headerAuth = req.headers['authorization'];
        var access = jwtUtils.getAuthorization(headerAuth);;
        if (access<0){
            return res.status(400).json({'error':'wrong token'})
        }else{
            var Collection = mongoDb.returnCollectionItems();
            if (Collection == null ){
               return res.status(400).json({'error':'wrong connection bdd'})
            }else{
                if(req.headers.item == null){
                    return res.status(400).json({'error':'Erreur param requete vide'})
                }else{
                Collection.aggregate([
                    { $match : {  name: new RegExp('^'+decodeURIComponent(req.headers.item.replace(/\+/g, ' '))) } },
                    {$limit: 20},
                    {$sort: {'name': 1}}  
                 ]).exec(function (err, items) {
                     if (err) {
                        console.log(err)
                        return res.status(400).json({'error':'Erreur execution requete'})
                     }                 
                     return res.status(200).json({items})
                 }    
                 );
                }
            }
        }
    },
    // renvoi l'items recherché par son ID
    searchItem: function(req, res){
        var headerAuth = req.headers['authorization'];
        var access = jwtUtils.getAuthorization(headerAuth);;
        if (access<0){
            return res.status(400).json({'error':'wrong token'})
        }else{
            var Collection = mongoDb.returnCollectionItems();
            if (Collection == null ){
               return res.status(400).json({'error':'wrong connection bdd'})
            }else{
                if(req.headers.id == null){
                    return res.status(400).json({'error':'Erreur param requete vide'})
                }else{
                Collection.aggregate([
                    { $match : { id : parseInt(req.headers.id, 10) } }                    
                 ]).exec(function (err, items) {
                     if (err) {
                        console.log(err)
                        return res.status(400).json({'error':'Erreur execution requete'})
                     }                     
                     return res.status(200).json({items})
                 }     
                 );
                }
            }
        }
    },

}