const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createPatients,
  getpatientbyId,
  getpatients,
  updatepatients,
  getpatientbynames,
  deleteallpatient,
  deletepatient,
} = require("./patients.controller");


router.get("/", checkToken, getpatients);
router.post("/",  createPatients);
router.get("/:patient_id",  getpatientbyId);
router.get("/search/:name", getpatientbynames);
router.patch("/",checkToken,  updatepatients);
router.delete("/",checkToken, deletepatient);
router.delete("/all",checkToken, deleteallpatient);



module.exports = router;
