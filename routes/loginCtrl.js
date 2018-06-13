// imports
var jwtUtils = require('../utils/jwt.utils');
//routes 
module.exports = {
    // attribue un token si le login en password est correcte 
    login: function(req, res){
     //params
     var login = req.body.login;
     var password = req.body.password;
     console.log("erreur mdp");
     if(login == "" || password == ""){      
         return res.status(400).json({'error':'missing parameters'});       
     }else{
            if(login == "userApi" && password == "7D]k2$T5,jU{u2tB$Dv9"){
                return res.status(200).json({
                    'access':true,
                    'TOKEN': jwtUtils.generateTokenForUser()
                });
            } else{
                return res.status(500).json({'error':'Login or Password invalide'});
            }     
     }
    }
}
 
