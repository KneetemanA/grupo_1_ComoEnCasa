const db =require("../../../database/models")
module.exports=function(req,res){
    const {page} = req.query

db.User.paginate({

    attributes: { exclude: ["user",'email', 'password'] },
    page: +page,
    paginate: 1,
    order: [['id', 'ASC']],
    },
    
    {
    
})
.then(( { docs: users, pages , total } ) =>{
    res.json(users, pages, total)
})
}