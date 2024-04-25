//const { loadData,saveData} = require("../../database");
const db = require("../../database/models")
module.exports = function(req, res) {
    //let products = loadData("productos")
    const imgInfo= req.file;
    const { name,category,price,discount,freeShipping,detail } = req.body;
    //const newid = products[products.length - 1].id + 1;
    db.Product.create({
        name:name.trim(),
        price:+price,
        discount:+discount,
        free_shipping: freeShipping,
        image: imgInfo? `/images/${imgInfo.filename}` : "/images/default.jpg",
        detail: detail.trim(),
        category_id: +category
    })
    .then((p=>{return res.redirect("/admin")}))
    /*const newProduct = {
        id: +newid,
        category,
        name,
        price:+price,
        discount:+discount,
        freeShipping: freeShipping === "true",
        image: imgInfo? `/images/${imgInfo.filename}` : "/images/default.jpg",
        detail
    }*/
    //products = [...products, newProduct];
    //saveData(products,"productos")
}