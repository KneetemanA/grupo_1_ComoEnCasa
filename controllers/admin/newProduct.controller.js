//const { loadData,saveData} = require("../../database");
const db = require("../../database/models")
const { validationResult } = require('express-validator')

module.exports = function(req, res) {

    const errors = validationResult(req)
    
    if (errors.isEmpty()) {
        const { 
            title,
            category,
            price,
            discount,
            freeShipping,
            detail } = req.body;
        
        const imgInfo= req.file;
    
        db.Product.create({
            title:title.trim(),
            price:+price,
            discount:+discount,
            free_shipping: freeShipping,
            image: imgInfo? `/images/${imgInfo.filename}` : "/images/default.jpg",
            detail: detail.trim(),
            category_id: +category
        })
        .then((p=>{return res.redirect("/admin")}))
     
} else {
    res.render("admin/crearProduct", {
        errors : errors.array(),
        old: req.body
    })
}

}
