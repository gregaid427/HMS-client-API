const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createvitals,
  getvitalsbyId,
  getvitals,
  updatevitals,
  deleteallvitals,
  deletevitals,
} = require("./vitals.controller");


router.get("/", checkToken, getvitals);
router.post("/", checkToken, createvitals);
router.get("/:vitals_id",checkToken,  getvitalsbyId);
// router.post("/search", getvitalsbynames);
router.patch("/",checkToken,  updatevitals);
router.delete("/",checkToken, deletevitals);
router.delete("/all",checkToken, deleteallvitals);



module.exports = router;
