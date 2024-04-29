const db = require("../../database/models")

module.exports = (req, res) => {
  const userlogueado = req.session.user;
  db.infoUser
    .findOne({
      where: { user_id: userlogueado.id },
    })
    .then((infouser) => {
      res.render("profileUser", { userlogueado, infouser });
    })
    .catch((err) => {
      res.send(err.message);
    });
};