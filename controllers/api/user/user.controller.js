const db =require("../../../database/models")
module.exports=function(req,res){
db.User.findAll({
    attributes: { exclude: ["user",'email', 'password'] }
})
.then(users =>{
    res.json(users)
})
}