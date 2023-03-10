const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
  verifymail,
  resetPassword,
  mailPasswordreset,
} = require("./user.controller");


router.get("/",  getUsers);
router.post("/",  createUser);
router.get("/:user_id",  getUserByUserId);
router.post("/login", login);
router.patch("/",  updateUsers);
router.post("/resetPassword",  resetPassword);
router.delete("/",  deleteUser);

router.post("/verify",  verifymail);

router.post("/mailPasswordreset",  mailPasswordreset);

module.exports = router;
