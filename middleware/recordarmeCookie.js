 const db =require("../database/models")
function recordarmeCookie(req, res, next) {
    if (req.cookies.recordarme && !req.session.user) {
      db.User.findOne({where :{user: req.cookies.recordarme}})
      .then(user => {
        if(user){
            req.session.user=user
        }
      }) 
        
    }

    next(); 
}

module.exports = recordarmeCookie;
