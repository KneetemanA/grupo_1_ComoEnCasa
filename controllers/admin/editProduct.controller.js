const {loadData} = require("../../database")
module.exports = (req,res) => {
    const {id} = req.params;
    const productEdit = loadData("productos")
    const findProductEdit = productEdit.find(p => p.id === +id)
    const userlogin = req.session.user;
    res.render("admin/editProduct", {"productEdit" : findProductEdit},(err, content) =>{
        err && res.send(err.message)
        res.render("partials/dashboard", {
          views: content,userlogin
        });
})
}