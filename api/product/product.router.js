const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createproduct,
  getproductbyId,
  getproduct,
  updateproduct,
  deleteallproduct,
  getsupplierId,
  getsupplier,
  deletesuppliersid,
  updatesupplier,
  deleteallsupplier,
  deleteproduct,
} = require("./product.controller");


router.get("/",  getproduct);
router.get("/supplier",  getsupplier);
router.post("/",  createproduct);
router.get("/:product_id",  getproductbyId);
router.get("/supplier/:supplier_id",   getsupplierId);
// router.post("/search", getproductbynames);
router.patch("/",  updateproduct);
router.patch("/supplier",  updatesupplier);
router.delete("/", deleteproduct);
router.delete("/supplier", deletesuppliersid);
router.delete("/all", deleteallproduct);
router.delete("/supplier/all", deleteallsupplier);



module.exports = router;
