const db = require("../../database/models");

module.exports = (req, res) => {
  const userlogeado = req.session.user;

  db.Order.findAll({
    include:["user","products","orderProducts"],
  })
    .then(orders => {
      res.render("admin/pedidos", { orders }, (err, content) => {
        
        if (err) {
          res.send(err.message);
          return;
        }

        // Aquí renderizamos el partials de dashboard
        // que ya va a tener la vista incluida que renderizamos anteriormente
        db.User.findOne({ where: { id: userlogeado.id } }) // Cambiado
          .then(userlogin => {
            res.render("partials/dashboard", {
              userlogin,
              views: content
            });
          })
          .catch(error => {
            console.error("Error al obtener usuario:", error);
            res.status(500).send("Error interno del servidor");
          });
      });
    })
    .catch(error => {
      console.error("Error al obtener productos:", error);
      res.status(500).send("Error interno del servidor");
    });
};
