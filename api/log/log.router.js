const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createlog,
  getlog,
  deletelog,
  deletealllog,
 


} = require("./log.controller");



router.post("/", createlog);
router.get("/", getlog);
router.delete("/",checkToken, deletelog);
router.delete("/all", deletealllog);


module.exports = router;
