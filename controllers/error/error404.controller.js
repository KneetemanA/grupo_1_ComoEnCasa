module.exports = (req, res) => {
    const userlogueado = req.session.user || null;
    const productsCart = req.productsCart || []; // Asegúrate de que `productsCart` esté definido
  
    res.render('error404', {
      userlogueado: userlogueado,
      productsCart: productsCart
    });
  };
  