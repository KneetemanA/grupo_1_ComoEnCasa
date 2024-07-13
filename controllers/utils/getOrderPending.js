const { Op } = require("sequelize");
const db = require("../../database/models");

module.exports = async (req) => {
  if (!req.session.user || !req.session.user.id) {
    throw new Error("User session or user ID is undefined");
  }


    const dataOrder = await db.Order.findOrCreate({
      where: {
        [Op.and]: [
          {
            user_id: req.session.user?.id 
          },
          {
            state: "pending",
          },
        ],
      },
      defaults: {
        user_id: req.session.user?.id,
        state: "pending",
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