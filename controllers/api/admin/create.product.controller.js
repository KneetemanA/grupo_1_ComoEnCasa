const db = require("../../../database/models");

module.exports = function (req, res) {
  const image = req.file;
  console.log(req.file); // Verifica lo que llega en req.file

  db.Product.create({
    name: req.body.name,
    price: req.body.price,
    discount: req.body.discount,
    free_shipping: req.body.free_shipping,
    category_id: req.body.category_id,
    detail: req.body.detail,
    image: image ? `/images/${image.filename}` : "/images/default.jpg"
  })
    .then(producto => {
      res.json(producto); 
    })
    .catch(err => {
      console.error('Error al crear el producto:', err);
      res.status(500).json({ error: 'Error al crear el producto en la base de datos' });
    });
};
