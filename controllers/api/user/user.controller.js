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
    res.status(200).json({
        data:users, 
        paginas:pages, 
        total
    })
    
}).catch(error => {
    console.error("Error al obtener usuarios:", error);
    res.status(500).send("Error interno del servidor");
})
}