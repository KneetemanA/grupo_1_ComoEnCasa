const db = require("../../database/models");
const { Op } = require("sequelize");
const fetch = require("node-fetch");

module.exports = async function (req, res) {
    const userlogueado = req.session.user;
    let productsCart = [];

    if (userlogueado) {
        const dataOrder = await db.Order.findOne({
            where: {
                [Op.and]: [
                    {
                        user_id: req.session.user?.id,
                    },
                    {
                        state: "pending",
                    },
                ],
            },
            include: [
                {
                    association: "products",
                    through: {
                        attributes: ["quantity"],
                    },
                },
            ],
        });

        if (dataOrder) {
            productsCart = dataOrder.products.map(product => {
                const quantity = product.OrderProduct ? product.OrderProduct.quantity : 0;

                return {
                    ...product.toJSON(),
                    quantity,
                };
            });
        }
    }

    fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then((response) => response.json())
    .then((data)=> {
       const {provincias} = data;

       const userlogueado = req.session.user;

        db.User.findOne({
            where: { id: userlogueado.id }
        })
        .then((updatedUser) => {
            db.infoUser.findOne({
                where: { user_id: updatedUser.id }
            })
            .then((infouser) => {
                res.render("profileUser", { userlogueado: updatedUser, infouser, provincias, productsCart });
                
            })
            .catch((err) => {
                res.send(err.message);
            });
        })
        .catch((err) => {
            res.send(err.message);
        });
    })
    .catch((err) => {
        res.send(err.message);
    });
};
