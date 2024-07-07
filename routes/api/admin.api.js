const router = require("express").Router();
const adminApi=require("../../controllers/api/admin")

const {upload} = require("../../middleware/uploadfile")



router.post("/create",upload.single('image'),adminApi.create);
router.put("/edit/:id",upload.single('image'), adminApi.update)
router.delete("/delete/:id",adminApi.delete)


module.exports = router