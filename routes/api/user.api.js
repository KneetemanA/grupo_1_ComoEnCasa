const router = require("express").Router();
const userApi=require("../../controllers/api/user")


router.get("/",userApi.user);
router.get("/:id",userApi.userDetail);




module.exports = router