// imports
var jwtUtils = require('../utils/jwt.utils');
var mongoDb = require('./mongoDb/mongoDbCtrl');
//routes 
module.exports = {
    // renvoi la liste des enchéres pour un ID d'acticle
    searchAuctions: function(req, res){
        var headerAuth = req.headers['authorization'];
        var access = jwtUtils.getAuthorization(headerAuth);;
        if (access<0){
            return res.status(400).json({'error':'wrong token'})
        }else{
            var Collection = mongoDb.returnCollectionAuctions();
            if (Collection == null ){
               return res.status(400).json({'error':'wrong connection bdd'})
            }else{
                if(req.headers.item == null || req.headers.server == null){
                    return res.status(400).json({'error':'Erreur param requete vide'})
                }else{
               Collection.aggregate([
                {$unwind: "$auctions"},          
                {$match: {"auctions.item":parseInt(req.headers.item, 10),$or: [ {"realms.slug": decodeURIComponent(req.headers.server.replace(/\+/g, ' '))}, { "realms.name":  decodeURIComponent(req.headers.server.replace(/\+/g, ' ')) } ]}},
                {$group: {
                        "_id": {'item': "$auctions.item", 'owner': "$auctions.owner", bid: {$divide: ["$auctions.bid", "$auctions.quantity"]}, 'quantity': "$auctions.quantity", 'ownerRealm': "$auctions.ownerRealm", prixU: {$divide: ["$auctions.buyout", "$auctions.quantity"]}},
                        count: {$sum: 1}
                    }
                },    
                {$sort: {'_id.prixU': 1}}
            ]).exec(function (err, wowApi) {
                if (err) {
                       console.log(err);
                    res.send(wowApi);
                }         
                res.send(wowApi);
            }
            );
           }
        }
        }
    },
}