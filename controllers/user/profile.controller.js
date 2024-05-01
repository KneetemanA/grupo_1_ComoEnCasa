const db = require("../../database/models");

module.exports = (req, res) => {
    const userlogueado = req.session.user;

   
    db.User.findOne({
        where: { id: userlogueado.id }
    })
    .then((updatedUser) => {
        
        db.infoUser.findOne({
            where: { user_id: updatedUser.id }
        })
        .then((infouser) => {
            res.render("profileUser", { userlogueado: updatedUser, infouser });
        })
        .catch((err) => {
            res.send(err.message);
        });
    })
    .catch((err) => {
        res.send(err.message);
    });
};
