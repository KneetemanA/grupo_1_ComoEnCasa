const fs = require('fs')
const path = require('path')

const { saveData } = require("../../database");

module.exports = (req, res)=> {
  let productos = require("../../database/productos.json")
  const {id} = req.params;
  const image = req.file;

  const { category, name, price, discount, freeShipping, detail } =
    req.body;

  

  const productsMap = productos.map((p) => {
    if (p.id === +id) {
        const productEdit = {
            ...p,
            category: category ? category.trim() : category,
            name: name ? name.trim() : name ,
            price: +price,
            discount: +discount ,
            freeShipping: freeShipping === "true",
            detail: detail ? detail.trim(): detail,
            image: image ? image.filename : p.image
          };
        
        if(image?.filename){
          const pathBefore = path.join(__dirname, './public/images' + p.image);
          const existsFile = fs.existsSync(pathBefore);

          if(existsFile){
            fs.unlinkSync()
          }
        }
    
      return productEdit;
    }

    return p;
  });

  saveData(productsMap,"productos");

  res.redirect('/admin/');
};
