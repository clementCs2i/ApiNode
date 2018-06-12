// imports
var express = require('express');
var reamlsCtrl = require('./routes/reamlsCtrl');

// Router
exports.router = (function(){
    var apiRouter=express.Router();

    //Realm routes
    apiRouter.route('Realms/iste/').get(reamlsCtrl.listRealm);

    return apiRouter

})();