const { Op } = require("sequelize");
const db = require("../../../database/models");

module.exports = async (req, res) => {
  try {
    let order;
    let isCreate;

    if (req.query.createOrder) {
      [order, isCreate] = await db.Order.findOrCreate({
        where: {
          [Op.and]: [
            {
              userId: req.query.userId,
            },
            {
              state: "pending",
            },
          ],
        },
        defaults: {
          userId: req.query.userId,
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
    } else {
      [order, isCreate] = await db.Order.findAll({
        where: {
          [Op.and]: [
            {
              userId: req.query.userId,
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
    }

    const statusCode = isCreate ? 201 : 200;
    res.status(statusCode).json({
      ok: true,
      isCreate,
      data: await order.reload({
        include: [
          {
            association: "products",
            through: {
              attributes: ["quantity"],
            },
          },
        ],
      }),
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: err.message,
    });
  }
};