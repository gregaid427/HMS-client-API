const {
  create,
  getproductbyId,
  getproduct,
  updateproducts,
  deleteproducts,
  updatesuppliers,
  getsuppliersId,
  deleteallsuppliers,
  deletesupplierid,
  getsuppliers,
  deleteallproduct,
  createsupplier,
} = require("./product.service");
// const { hash, genSalt, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var createHash = require("hash-generator");

module.exports = {
  createproduct: (req, res) => {
    const body = req.body;
    var hash1 = createHash(5);
    var hash2 = createHash(6);
    const bod = {
      hash1: hash1,
      hash2: hash2,
      // supplier: body.supplier,
      // contact1: body.contact1,
      // contact2: body.contact2,
      // contact3: body.contact3,
      // notes: body.notes,

      product_id: body.product_id,
      user_id: body.user_id,
      product_name: body.product_name,
      stock_qty: body.stock_qty,

      price: body.price,
      description: body.description,
      info: body.info,
      wholesale_price: body.wholesale_price,
    };

    create(bod, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      console.log(results);
      if (!err) {
        const data = {
          supplier_id: hash2,
          supplier: body.supplier,
          contact1: body.contact1,
          contact2: body.contact2,
          contact3: body.contact3,
          notes: body.notes,
        };

        createsupplier(data, (err, results) => {
          if (err) {
            console.log(err);
            return res.json({
              success1: 0,
              message1: "Database connection errror",
            });
          }
        });

        console.log(err);
        return res.status(200).json({
          success: 0,
          message: "created successfully",
        });
      }
    });
  },

  // getproductbynames: (req, res) => {
  //  let data = req.body;
  //   data = {
  //     first : data.first_name ,
  //     last: data.last_name
  //   }
  //   console.log(data)
  //   getproductbyname(data, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     if (!results) {
  //       return res.json({
  //         success: 0,
  //         message: "Record not Found",
  //       });
  //     }

  //     return res.json({
  //       success: 1,
  //       data: results,
  //     });
  //   });
  // },

  getproductbyId: (req, res) => {
    const data = req.params;

    getproductbyId(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  getsupplierId: (req, res) => {
    const data = req.params;

    getsuppliersId(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results,
      });
    });
  },


  getproduct: (req, res) => {
    getproduct((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },

  getsupplier: (req, res) => {
    getsuppliers((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },


  updateproduct: (req, res) => {
    const body = req.body;
    const bod = {
      product_id:body.product_id,


      product_name: body.product_name,
      stock_qty: body.stock_qty,

      price: body.price,
      description: body.description,
      info: body.info,
      wholesale_price: body.wholesale_price,
    };

    updateproducts(bod, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        console.log(err);
        return res.json({
          success: 0,
          message: "Unable to update",
        });
      } else {
      
        console.log(results);
        return res.json({
          success: 1,
          message: "updated successfully",
        });
      }
    });
  },

  updatesupplier: (req, res) => {
    const body = req.body;
    const bod = {
    
      supplier_id:body.supplier_id,

      supplier: body.supplier,
      contact1: body.contact1,
      contact2: body.contact2,
      contact3: body.contact3,
      notes: body.notes, 
    };
    console.log(bod);
    updatesuppliers(bod, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        console.log(err);
        return res.json({
          success: 0,
          message: "Unable to update",
        });
      } else {
      
        console.log(results);
        return res.json({
          success: 1,
          message: "updated successfully",
        });
      }
    });
  },

  deletesuppliersid: (req, res) => {
    const data = req.body;

    deletesupplierid(data, (err, results) => {
      if (err) {
        success: 0, console.log(err);
        return;
      }
      console.log("results");
      return res.json({
        success: 1,
        message: "deleted successfully",
      });
    });
  },

  deleteproduct: (req, res) => {
    const data = req.body;

    deleteproducts(data, (err, results) => {
      if (err) {
        success: 0, console.log(err);
        return;
      }
      console.log("results");
      return res.json({
        success: 1,
        message: "deleted successfully",
      });
    });
  },
  deleteallsupplier: (req, res) => {
    const data = req.body;

    deleteallsuppliers(data, (err, results) => {
      if (err) {
        success: 0, console.log(err);
        return;
      }

      return res.json({
        success: 1,
        message: "deleted successfully",
      });
    });
  },
  deleteallproduct: (req, res) => {
    const data = req.body;

    deleteallproduct(data, (err, results) => {
      if (err) {
        success: 0, console.log(err);
        return;
      }

      return res.json({
        success: 1,
        message: "deleted successfully",
      });
    });
  },
};






