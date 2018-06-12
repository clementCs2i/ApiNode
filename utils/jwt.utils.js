//imports
var jwt = require('jsonwebtoken')
const JWT_SING_SECRET = "oshinijaighathlyij2"
// exported functions
module.exports={
    generateTokenForUser: function(){
        return jwt.sign({
            access:1, 
        },
        JWT_SING_SECRET,
      {
          expiresIn: '1h'
      })

    },
    parseAuthorization: function(authorization){
        return (authorization !=null) ? authorization.replace('Bearer ', '') : null;
    },

    getAuthorization: function(authorization){
        var access = -1;
        var token = module.exports.parseAuthorization(authorization);

        if(token != null){
            try{
            var jwtToken = jwt.verify(token, JWT_SING_SECRET)
            if(jwtToken != null){
                access = jwtToken.access
            } 
        } catch(err){}
        
    }
 return access;

}
}