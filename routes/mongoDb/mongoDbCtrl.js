// imports
var mongoose = require('mongoose');

var realms; 
var items;
var auctions;
//routes 
module.exports = {
    // connection à mongoDB et aux collections
    connectMongoDb: function(){       
       mongoose.connect('mongodb://127.0.0.1:27017/wowapi')      
        this.connectCollectionRealms();
        this.connectCollectionItems();
        this.connectCollectionAuctions();
    },

    // connection à la collection realms
    connectCollectionRealms: function(){
            var SchemaRealms = mongoose.Schema({}, {collection: 'realms'});
             realms = mongoose.model('realms', SchemaRealms);                      
     },

      // renvoie la connection à la collection realms
      returnCollectionRealms: function(){      
         return realms;  
      },

    // connection à la collection items
    connectCollectionItems: function(){  
            var SchemaItems = mongoose.Schema({}, {collection: 'items'});
             items = mongoose.model('items', SchemaItems);       
     },
        // renvoie la connection à la collection items
        returnCollectionItems: function(){      
            return items;  
         },

        // connection à la collection auctions
        connectCollectionAuctions: function(){  
         var SchemaAuctions = mongoose.Schema({}, {collection: 'wowApi'});
         auctions = mongoose.model('wowApi', SchemaAuctions);       
 },     
         // renvoie la connection à la collection auctions
         returnCollectionAuctions: function(){      
        return auctions;  
     },
}