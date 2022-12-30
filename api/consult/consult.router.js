const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createconsult,
  getconsultbyId,
  getconsult,
  updateconsult,
  deleteallconsult,
  deleteconsult,
} = require("./consult.controller");


router.get("/",  getconsult);
router.post("/",  createconsult);
router.get("/:consult_id",  getconsultbyId);
// router.post("/search", getconsultbynames);
router.patch("/",  updateconsult);
router.delete("/", deleteconsult);
router.delete("/all", deleteallconsult);



module.exports = router;
