const db = require("../../../database/models")

module.exports=function(req,res){
    const {page} = req.query;

    db.User.findByPk(req.params.id,{
        attributes: { exclude: ["user",'email', 'password'] }
    }).
    then( user => {
        res.json(user)
    })
}
