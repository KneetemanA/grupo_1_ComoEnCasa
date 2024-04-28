const db = require("../../database/models");

module.exports = (req, res) => {
  const userlogin = req.session.user;

  db.Product.findAll()
    .then(productos => {
      res.render("admin/listProducts", { productos }, (err, content) => {
        if (err) {
          res.send(err.message);
          return;
        }

        // Aquí renderizamos el partials de dashboard
        // que ya va a tener la vista incluida que renderizamos anteriormente
        res.render("partials/dashboard", {
          userlogin,
          views: content
        });
      });
    })
    .catch(error => {
      console.error("Error al obtener productos:", error);
      res.status(500).send("Error interno del servidor");
    });
};
