const { loadData } = require("../../database")

module.exports= (req,res)=>{
    const users = loadData("users")
    const userr = req.params.user
    const userlogueado = req.session.user
    res.render("profileUser", {userlogueado})
}