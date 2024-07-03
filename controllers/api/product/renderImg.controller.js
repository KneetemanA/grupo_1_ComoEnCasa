const path = require("path");

module.exports = (req, res) => {
  const { image } = req.params;
  try {
    res.sendFile(
      path.join(__dirname, "../../../public/images/" + image)
    );
  } catch (error) {
    console.log(error);
  }
};