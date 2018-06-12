// imports
var express = require('express');
var reamlsCtrl = require('./routes/reamlsCtrl');

// Router
exports.router = (function(){
    var apiRouter=express.Router();

    //Realm routes
    apiRouter.route('/realme/liste/').get(reamlsCtrl.listRealme);

    apiRouter.route('/realms/liste/').get(reamlsCtrl.listRealm);
    return apiRouter

})();