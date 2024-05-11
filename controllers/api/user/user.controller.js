const db =require("../../../database/models")
module.exports=function(req,res){
    const {page} = req.query

db.User.paginate({

    attributes: ["id", "name"],
    page: +page,
    paginate: 1,
    order: [['id', 'ASC']],
    },
    
    {
    attributes: { exclude: ["user",'email', 'password'] }
})
.then(( { docs: users, pages , total } ) =>{
    res.json(users, pages, total)
})
}