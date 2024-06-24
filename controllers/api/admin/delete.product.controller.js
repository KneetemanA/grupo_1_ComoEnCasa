const db =require("../../../database/models")


module.exports=function(req,res){

    db.Product.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(()=>{
        res.status(200).json({
            success:true,
            message:"Product deleted"
        })
    })



}