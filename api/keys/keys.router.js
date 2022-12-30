const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createKey,
  getkeyById,
  getKeys,
  revokeKey,
  getAllkeysByinstitution,
  deleteUser,
  verifymail,
  creatependingKeys,
  singlependingKeys,
  pendingKeys,
  getActivekeyByinstitution,
  deletependingKey,
  resetPassword,
  mailPasswordreset,
} = require("./keys.controller");
router.get("/", checkToken, getKeys);
router.post("/delete/:req_id", checkToken, deletependingKey);
router.get("/pending", checkToken, pendingKeys);
router.get("/pending/:id", checkToken, singlependingKeys);
router.post("/pending", checkToken, creatependingKeys);
router.post("/", checkToken , createKey);
router.get("/:id", checkToken,  getkeyById);
router.get("/all/:email",  getAllkeysByinstitution);
router.get("/active/:email",  getActivekeyByinstitution);
router.patch("/:id", checkToken, revokeKey);
router.post("/resetPassword",  resetPassword);
router.delete("/", deleteUser);

router.get("/:email/verify/:token",  verifymail);

router.post("/mailPasswordreset",  mailPasswordreset);

module.exports = router;
