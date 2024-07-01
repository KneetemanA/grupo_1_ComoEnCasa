const { Op } = require("sequelize");
const db = require("../../database/models");

module.exports = async (req) => {

    const dataOrder = await db.Order.findOrCreate({
      where: {
        [Op.and]: [
          {
            user_id: req.session.userLogin?.id || req.query.user_id,
          },
          {
            state: "pending",
          },
        ],
      },
      defaults: {
        user_id: req.session.userLogin?.id || req.query.user_id,
      },
      include: [
        {
          association: "product",
          through: {
            attributes: ["quantity"],
          },
        },
      ],
    });
  return dataOrder;
};