// imports
var express = require('express');
var reamlsCtrl = require('./routes/reamlsCtrl');
var loginCtrl = require('./routes/loginCtrl');
var itemsCtrl = require('./routes/itemsCtrl');
var auctionsCtrl = require('./routes/auctionsCtrl');

// Router
exports.router = (function(){
    var apiRouter=express.Router();

    //login routes
    apiRouter.route('/login/').post(loginCtrl.login);

    //Realm routes
    apiRouter.route('/realms/liste/').get(reamlsCtrl.listRealm);

    //items routes
    apiRouter.route('/items/search/').get(itemsCtrl.searchItems);
    apiRouter.route('/item/search/').get(itemsCtrl.searchItem);

    //auctions routes
    apiRouter.route('/auctions/search/').get(auctionsCtrl.searchAuctions);

    return apiRouter

})();