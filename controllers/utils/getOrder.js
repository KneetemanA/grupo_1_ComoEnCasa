const { Op } = require("sequelize");
const db = require("../../database/models");

module.exports = async (req) => {
  const dataOrder = await db.Order.findAll({
    where: {
      [Op.and]: [
        {
          user_id: req.query.user,
        },
        {
          state: req.query.state || "pending",
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
  return dataOrder;
};