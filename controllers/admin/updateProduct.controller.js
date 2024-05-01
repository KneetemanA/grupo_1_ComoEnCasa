const path = require('path')
const fs = require('fs')
 const db = require('../../database/models')
 
module.exports = (req, res) => {
 
  const { id } = req.params;
  const { category, name, price, discount, free_shipping, detail } = req.body;
  const image = req.file;

  const images = db.Product.findOne({
    where: { id : id}
  })
  .then((p) =>{
    return p.image
  })
  
  db.Product.update({
    category_id: +category,
    name: name ? name.trim() : name ,
    price: +price,
    discount: +discount ,
    free_shipping: free_shipping === "true",
    detail: detail ? detail.trim(): detail,
    image: image ? `/images/${image.filename}` : "/images/default.jpg"  // req.files.image[0]?.filename
  },{
    where: {id}
  })
  .then((isUpdate)=>{
    if(isUpdate.image?.filename){
            const pathBefore = path.join(__dirname, `../../public${image}`);
            const existsFile = fs.existsSync(pathBefore);
      
            if(existsFile){
              fs.unlinkSync(pathBefore)
             }
          }
    
    res.redirect('/admin')

  })
}
// .then(image =>{
//     if(image?.filename){
//       const pathBefore = path.join(__dirname, `../../public${image}`);
//       const existsFile = fs.existsSync(pathBefore);

//       if(existsFile){
//         fs.unlinkSync(pathBefore)
//       }
//     }
// });
  /*const productsMap = productos.map((p) => {
    if (p.id === +id) {
        const productEdit = {
            ...p,
            category: category ? category.trim() : category,
            name: name ? name.trim() : name ,
            price: +price,
            discount: +discount ,
            freeShipping: freeShipping === "true",
            detail: detail ? detail.trim(): detail,
            image: image ? `/images/${image.filename}` : p.image
          };
        
        if(image?.filename){
          const pathBefore = path.join(__dirname, `../../public${p.image}`);
          const existsFile = fs.existsSync(pathBefore);

          if(existsFile){
            fs.unlinkSync(pathBefore)
          }
        }
    
      return productEdit;
    }

    return p;
  });

  saveData(productsMap,"productos");*/

 

