const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../../database/models")
module.exports= (req,res) => {
    const userlogueado = req.session.user
   db.Product.findByPk(req.params.id)
   .then(productos =>{
    res.render('detail',{p:productos,toThousand, userlogueado})
   })
    

}